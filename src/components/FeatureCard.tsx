'use client';

import ScrollAnimation from './ScrollAnimation';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ 
  icon, 
  title, 
  description, 
  delay = 0 
}: FeatureCardProps) {
  return (
    <ScrollAnimation delay={delay}>
      <div className="bg-white border border-gray-300 rounded-xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-gray-400">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-gray-700">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </ScrollAnimation>
  );
}

