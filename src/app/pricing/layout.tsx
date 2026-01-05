import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing. Choose a plan that grows with your team. Switch between monthly and yearly billing at any time.',
  openGraph: {
    title: 'Pricing - Kaisoku',
    description: 'Simple, transparent pricing. Choose a plan that grows with your team.',
    url: 'https://kaisoku.com/pricing',
  },
  alternates: {
    canonical: 'https://kaisoku.com/pricing',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

