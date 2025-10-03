"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/sumrendra",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/sumrendra/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:sumrendra111@gmail.com",
    icon: Mail,
  },
];

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Resume", href: "/resume" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold">Sumrendra Singh</h3>
            <p className="text-sm text-muted-foreground">
              Full-Stack Software Engineer building scalable web applications with modern
              technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background hover:bg-accent transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sumrendra Singh. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with <Heart className="h-3 w-3 fill-red-500 text-red-500" /> using
            Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
