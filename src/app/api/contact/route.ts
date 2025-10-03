import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema } from '@/lib/validations/contact';
import { rateLimit } from '@/lib/rate-limit';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'anonymous';

    // Apply rate limiting: 3 requests per minute per IP
    const rateLimitResult = rateLimit(ip, {
      interval: 60 * 1000, // 1 minute
      maxRequests: 3,
    });

    if (!rateLimitResult.success) {
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          resetTime: rateLimitResult.reset,
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': rateLimitResult.limit.toString(),
            'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
            'X-RateLimit-Reset': rateLimitResult.reset.toString(),
          }
        }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Invalid form data',
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validationResult.data;

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      
      // For development: just log the message
      if (process.env.NODE_ENV === 'development') {
        console.log('📧 Contact Form Submission (Development Mode):');
        console.log('From:', name, `<${email}>`);
        console.log('Subject:', subject);
        console.log('Message:', message);
        console.log('---');
        
        return NextResponse.json(
          { 
            success: true,
            message: 'Message received (development mode)',
          },
          { 
            status: 200,
            headers: {
              'X-RateLimit-Limit': rateLimitResult.limit.toString(),
              'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
              'X-RateLimit-Reset': rateLimitResult.reset.toString(),
            }
          }
        );
      }
      
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    // Send email using Resend
    const emailResult = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL || 'sumrendra@example.com',
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            
            <div style="background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <h2 style="margin-top: 0; color: #667eea; font-size: 18px;">Contact Information</h2>
                <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></p>
                <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
              </div>
              
              <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <h2 style="margin-top: 0; color: #667eea; font-size: 18px;">Message</h2>
                <div style="padding: 15px; background: #f9fafb; border-left: 4px solid #667eea; border-radius: 4px;">
                  ${message.split('\n').map(line => `<p style="margin: 5px 0;">${line}</p>`).join('')}
                </div>
              </div>
              
              <div style="margin-top: 20px; padding: 15px; background: #eff6ff; border-left: 4px solid #3b82f6; border-radius: 4px;">
                <p style="margin: 0; font-size: 14px; color: #1e40af;">
                  <strong>💡 Quick Reply:</strong> You can reply directly to this email to respond to ${name}.
                </p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 14px;">
              <p style="margin: 0;">This message was sent from your portfolio contact form</p>
              <p style="margin: 5px 0;">Received on ${new Date().toLocaleString('en-US', { 
                dateStyle: 'full', 
                timeStyle: 'short' 
              })}</p>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

From: ${name} <${email}>
Subject: ${subject}

Message:
${message}

---
Received on ${new Date().toLocaleString()}
      `.trim(),
    });

    if (emailResult.error) {
      console.error('Failed to send email:', emailResult.error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true,
        message: 'Message sent successfully',
      },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Limit': rateLimitResult.limit.toString(),
          'X-RateLimit-Remaining': rateLimitResult.remaining.toString(),
          'X-RateLimit-Reset': rateLimitResult.reset.toString(),
        }
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
