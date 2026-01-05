'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface InteractiveBrandNameProps {
  text: string;
}

export default function InteractiveBrandName({ text }: InteractiveBrandNameProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="w-full pb-8 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div
        className="text-[120px] md:text-[200px] lg:text-[320px] font-bold text-black text-center leading-none font-brand flex justify-center items-center flex-wrap"
        style={{
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, transparent 100%)',
          opacity: 0.15,
        }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              textShadow: hoveredIndex === index
                ? [
                    '0 0 20px rgba(147, 51, 234, 0.5)',
                    '0 0 30px rgba(147, 51, 234, 0.7)',
                    '0 0 20px rgba(147, 51, 234, 0.5)',
                  ]
                : '0 0 0px rgba(0, 0, 0, 0)',
              opacity: hoveredIndex === index ? 0.3 : 0.15,
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className="inline-block cursor-pointer"
            style={{
              transition: 'all 0.3s ease',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

