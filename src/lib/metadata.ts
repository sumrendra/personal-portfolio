import { Metadata } from 'next';

const siteConfig = {
  name: 'Sumrendra Singh',
  title: 'Sumrendra Singh | Full-Stack Software Engineer',
  description:
    'Full-Stack Software Engineer with 7+ years of experience in building scalable web applications. Expert in React, Next.js, Node.js, Kubernetes, and cloud technologies.',
  url: 'https://sumrendrasingh.com',
  ogImage: 'https://sumrendrasingh.com/og-image.jpg',
  keywords: [
    'Sumrendra Singh',
    'Software Engineer',
    'Full-Stack Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Kubernetes',
    'DevOps',
    'Cloud Architecture',
    'Web Development',
    'Portfolio',
  ],
  links: {
    linkedin: 'https://linkedin.com/in/sumrendra',
    github: 'https://github.com/sumrendra',
    email: 'sumrendra@example.com',
  },
};

export function createMetadata({
  title,
  description,
  image,
  keywords,
  path = '',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string[];
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const pageDescription = description || siteConfig.description;
  const pageImage = image || siteConfig.ogImage;
  const pageUrl = `${siteConfig.url}${path}`;
  const pageKeywords = keywords
    ? [...siteConfig.keywords, ...keywords]
    : siteConfig.keywords;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.title,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: '@sumrendra',
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}

export { siteConfig };
