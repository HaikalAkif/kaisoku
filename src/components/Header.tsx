'use client';

import Link from 'next/link';
import Button from './Button';
import Dropdown from './Dropdown';
import MobileMenu from './MobileMenu';

export default function Header() {
  const solutionsItems = [
    { label: 'How it works', href: '/how-it-works' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'Problem & Solution', href: '/problem-solution' }
  ];

  return (
    <header className="w-full absolute top-2 md:top-4 left-0 right-0 px-4 md:px-8 lg:px-4 z-[100]">
      <div className="w-full max-w-[1240px] mx-auto flex justify-center">
        <nav className="bg-transparent border border-black rounded-full px-3 md:px-6 py-2 flex items-center gap-3 md:gap-6 lg:gap-8 w-full backdrop-blur-sm">
          <Link
            href="/"
            className="text-lg md:text-xl font-bold text-black font-brand tracking-[0.2em] md:tracking-[0.3em]"
          >
            Kaisoku
          </Link>

          <div className="hidden md:flex items-center gap-6 ml-4">
            <Link href="/about" className="text-gray-700 hover:text-black transition-colors text-sm">
              About
            </Link>
            <Dropdown title="Solutions" items={solutionsItems} />
            <Link href="/pricing" className="text-gray-700 hover:text-black transition-colors text-sm">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-black transition-colors text-sm">
              Contact
            </Link>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden md:block">
              <Link href="/contact">
                <Button variant="primary" className="text-sm px-4 md:px-6 py-2 min-h-[44px]">
                  Start Free Trial
                </Button>
              </Link>
            </div>
            <MobileMenu solutionsItems={solutionsItems} />
          </div>
        </nav>
      </div>
    </header>
  );
}

