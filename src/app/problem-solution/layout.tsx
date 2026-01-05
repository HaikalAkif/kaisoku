import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Problem & Solution',
  description: 'We understand the challenges businesses face. Learn how Kaisoku solves common business problems with innovative solutions.',
  openGraph: {
    title: 'Problem & Solution - Kaisoku',
    description: 'We understand the challenges businesses face. Learn how Kaisoku solves common business problems.',
    url: 'https://kaisoku.com/problem-solution',
  },
  alternates: {
    canonical: 'https://kaisoku.com/problem-solution',
  },
};

export default function ProblemSolutionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

