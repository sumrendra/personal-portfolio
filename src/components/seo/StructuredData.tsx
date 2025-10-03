import { siteConfig } from '@/lib/metadata';

interface PersonSchemaProps {
  name?: string;
  jobTitle?: string;
  description?: string;
}

export function PersonSchema({ 
  name = siteConfig.name,
  jobTitle = "Full-Stack Software Engineer",
  description = siteConfig.description
}: PersonSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    url: siteConfig.url,
    sameAs: [
      siteConfig.links.linkedin,
      siteConfig.links.github,
    ],
    email: siteConfig.links.email,
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Kubernetes',
      'Docker',
      'GraphQL',
      'Kafka',
      'AWS',
      'DevOps',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/projects?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}

export function WebPageSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
}: WebPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
