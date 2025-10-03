import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sumrendra Singh | Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer with 7+ years of experience in building scalable web applications. Expert in React, Next.js, Node.js, and cloud technologies.",
  keywords: [
    "Sumrendra Singh",
    "Software Engineer",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Sumrendra Singh" }],
  creator: "Sumrendra Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sumrendrasingh.com",
    title: "Sumrendra Singh | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer with 7+ years of experience in building scalable web applications.",
    siteName: "Sumrendra Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumrendra Singh | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer with 7+ years of experience in building scalable web applications.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 5000,
              style: {
                background: 'var(--toast-bg)',
                color: 'var(--toast-color)',
                border: '1px solid var(--toast-border)',
              },
              success: {
                iconTheme: {
                  primary: '#10b981',
                  secondary: '#fff',
                },
              },
              error: {
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
