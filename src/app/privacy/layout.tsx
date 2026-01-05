import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Kaisoku Privacy Policy. Learn how we collect, use, and protect your personal data.',
  openGraph: {
    title: 'Privacy Policy - Kaisoku',
    description: 'Kaisoku Privacy Policy. Learn how we collect, use, and protect your personal data.',
    url: 'https://kaisoku.com/privacy',
  },
  alternates: {
    canonical: 'https://kaisoku.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

