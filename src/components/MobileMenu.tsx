'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiMenu } from 'react-icons/fi';
import Button from './Button';
import Dropdown from './Dropdown';

interface MobileMenuProps {
  solutionsItems: { label: string; href: string }[];
}

export default function MobileMenu({ solutionsItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const sidebarContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 z-[9998] md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-72 max-w-[80vw] bg-white shadow-2xl z-[9999] md:hidden overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
                <Link
                  href="/"
                  className="text-lg font-bold text-black font-brand tracking-[0.2em]"
                  onClick={() => setIsOpen(false)}
                >
                  Kaisoku
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-700 hover:text-black transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              <nav className="space-y-1">
                <Link
                  href="/about"
                  className="block px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors text-base font-medium rounded-lg min-h-[44px] flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                
                <div className="px-4 py-2">
                  <p className="text-gray-500 font-semibold mb-2 text-xs uppercase tracking-wider">Solutions</p>
                  <div className="space-y-1">
                    {solutionsItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2.5 text-gray-600 hover:text-black hover:bg-gray-50 transition-colors text-sm rounded-lg min-h-[44px] flex items-center"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/pricing"
                  className="block px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors text-base font-medium rounded-lg min-h-[44px] flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-3 text-gray-700 hover:text-black hover:bg-gray-50 transition-colors text-base font-medium rounded-lg min-h-[44px] flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </nav>

              <div className="pt-6 border-t border-gray-200 mt-6">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button variant="primary" className="w-full justify-center min-h-[48px]">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-700 hover:text-black transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <FiX className="w-6 h-6" />
        ) : (
          <FiMenu className="w-6 h-6" />
        )}
      </button>

      {mounted && typeof window !== 'undefined' && createPortal(sidebarContent, document.body)}
    </>
  );
}

