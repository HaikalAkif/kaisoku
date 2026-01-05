'use client';

import ScrollAnimation from './ScrollAnimation';

interface PartnerCardProps {
  name: string;
  delay?: number;
}

export default function PartnerCard({ name, delay = 0 }: PartnerCardProps) {
  return (
    <ScrollAnimation delay={delay}>
      <div className="bg-white border border-gray-300 rounded-xl p-8 flex items-center justify-center min-h-[120px] transition-all duration-300 hover:shadow-lg hover:border-gray-400">
        <span className="text-xl font-semibold text-gray-700">{name}</span>
      </div>
    </ScrollAnimation>
  );
}

