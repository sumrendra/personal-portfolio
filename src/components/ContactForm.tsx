'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { contactFormSchema, type ContactFormData } from '@/lib/validations/contact';
import toast from 'react-hot-toast';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setStatus('success');
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      reset();

      // Reset success state after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      const message = error instanceof Error ? error.message : 'Something went wrong';
      setErrorMessage(message);
      toast.error(message);

      // Reset error state after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Name <span className="text-red-500">*</span>
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          disabled={status === 'submitting'}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.name
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
          } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
          placeholder="John Doe"
        />
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-500"
          >
            {errors.name.message}
          </motion.p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          disabled={status === 'submitting'}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.email
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
          } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
          placeholder="john@example.com"
        />
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-500"
          >
            {errors.email.message}
          </motion.p>
        )}
      </div>

      {/* Subject Field */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          {...register('subject')}
          type="text"
          id="subject"
          disabled={status === 'submitting'}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.subject
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
          } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
          placeholder="Project inquiry"
        />
        {errors.subject && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-500"
          >
            {errors.subject.message}
          </motion.p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={6}
          disabled={status === 'submitting'}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.message
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
          } bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
          placeholder="Tell me about your project or inquiry..."
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-500"
          >
            {errors.message.message}
          </motion.p>
        )}
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200"
        >
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">Message sent successfully! I'll get back to you soon.</p>
        </motion.div>
      )}

      {status === 'error' && errorMessage && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200"
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">{errorMessage}</p>
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === 'submitting'}
        whileHover={{ scale: status === 'submitting' ? 1 : 1.02 }}
        whileTap={{ scale: status === 'submitting' ? 1 : 0.98 }}
        className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </>
        )}
      </motion.button>
    </motion.form>
  );
}
