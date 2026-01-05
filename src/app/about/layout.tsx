import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Kaisoku\'s mission, values, and the team behind our innovative SaaS platform. Empowering businesses worldwide with cutting-edge solutions.',
  openGraph: {
    title: 'About Kaisoku',
    description: 'Learn about Kaisoku\'s mission, values, and the team behind our innovative SaaS platform.',
    url: 'https://kaisoku.com/about',
  },
  alternates: {
    canonical: 'https://kaisoku.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

