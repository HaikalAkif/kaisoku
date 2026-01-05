import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Kaisoku. Have a question or want to learn more? Send us a message and we\'ll respond as soon as possible.',
  openGraph: {
    title: 'Contact Kaisoku',
    description: 'Get in touch with Kaisoku. Send us a message and we\'ll respond as soon as possible.',
    url: 'https://kaisoku.com/contact',
  },
  alternates: {
    canonical: 'https://kaisoku.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

