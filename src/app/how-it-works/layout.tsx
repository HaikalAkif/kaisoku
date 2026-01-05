import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'Get started with Kaisoku in four simple steps. Our platform is designed to be intuitive, powerful, and scalable from day one.',
  openGraph: {
    title: 'How It Works - Kaisoku',
    description: 'Get started with Kaisoku in four simple steps. Our platform is designed to be intuitive, powerful, and scalable from day one.',
    url: 'https://kaisoku.com/how-it-works',
  },
  alternates: {
    canonical: 'https://kaisoku.com/how-it-works',
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

