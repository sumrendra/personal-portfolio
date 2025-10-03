'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sumrendra@example.com',
    href: 'mailto:sumrendra@example.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Boston, MA',
    href: null,
  },
];

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/sumrendra',
    color: 'hover:text-blue-600',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/sumrendra',
    color: 'hover:text-gray-900 dark:hover:text-white',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg font-medium text-gray-900 dark:text-white">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Connect With Me
              </h2>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 ${link.color} transition-all shadow-md hover:shadow-lg`}
                    aria-label={link.name}
                  >
                    <link.icon className="w-7 h-7" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-blue-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Quick Response
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I typically respond to all inquiries within 24-48 hours. For urgent matters,
                feel free to reach out via LinkedIn or email directly.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Usually replies within a day</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
