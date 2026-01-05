import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about Kaisoku. Learn about pricing, features, integrations, and more.',
  openGraph: {
    title: 'FAQs - Kaisoku',
    description: 'Find answers to common questions about Kaisoku.',
    url: 'https://kaisoku.com/faqs',
  },
  alternates: {
    canonical: 'https://kaisoku.com/faqs',
  },
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

