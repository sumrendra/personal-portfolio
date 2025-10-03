import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
