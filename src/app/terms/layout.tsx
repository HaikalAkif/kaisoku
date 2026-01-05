import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Kaisoku Terms of Service. Read our terms and conditions for using our platform.',
  openGraph: {
    title: 'Terms of Service - Kaisoku',
    description: 'Kaisoku Terms of Service. Read our terms and conditions for using our platform.',
    url: 'https://kaisoku.com/terms',
  },
  alternates: {
    canonical: 'https://kaisoku.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

