import { Metadata } from 'next';
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'About Me',
  description: 'Learn about Sumrendra Singh - a Full-Stack Software Engineer with 8 years of experience. Discover my journey, values, technical expertise, and what drives me to build great software.',
  keywords: ['About', 'Career', 'Experience', 'Skills', 'Values', 'Biography'],
  path: '/about',
});
