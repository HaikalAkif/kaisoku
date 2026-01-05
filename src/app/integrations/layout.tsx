import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Integrations',
  description: 'Connect Kaisoku with your favorite tools and services. We support hundreds of integrations to streamline your workflow and boost productivity.',
  openGraph: {
    title: 'Integrations - Kaisoku',
    description: 'Connect Kaisoku with your favorite tools and services. We support hundreds of integrations.',
    url: 'https://kaisoku.com/integrations',
  },
  alternates: {
    canonical: 'https://kaisoku.com/integrations',
  },
};

export default function IntegrationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

