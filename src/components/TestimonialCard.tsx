'use client';

import ScrollAnimation from './ScrollAnimation';
import Image from 'next/image';

interface TestimonialCardProps {
  testimonial: string;
  name: string;
  location: string;
  imageUrl: string;
  delay?: number;
}

export default function TestimonialCard({
  testimonial,
  name,
  location,
  imageUrl,
  delay = 0
}: TestimonialCardProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <ScrollAnimation direction="right" delay={delay}>
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed italic">
            &ldquo;{testimonial}&rdquo;
          </p>
          <div>
            <p className="font-bold text-gray-900 text-lg">{name}</p>
            <p className="text-gray-600">{location}</p>
          </div>
        </div>
      </ScrollAnimation>
      
      <ScrollAnimation direction="left" delay={delay + 0.2}>
        <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-gray-300 bg-gray-50 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="w-32 h-32 rounded-full border-2 border-gray-300 bg-white mx-auto mb-4 flex items-center justify-center">
              <span className="text-4xl font-bold text-gray-700">{name.charAt(0)}</span>
            </div>
            <p className="text-gray-600 text-sm">Placeholder Image</p>
            <p className="text-gray-500 text-xs mt-2">Upload image to /public/images/testimonial.jpg</p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

