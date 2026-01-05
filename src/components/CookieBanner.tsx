'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiShield } from 'react-icons/fi';
import Button from './Button';
import Link from 'next/link';
import { useCookie } from '@/contexts/CookieContext';

export default function CookieBanner() {
  const { isVisible, hideBanner } = useCookie();

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    hideBanner();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    hideBanner();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 md:bottom-6 md:right-6 md:left-auto z-[200] max-w-md md:max-w-md mx-auto md:mx-0"
        >
          <div className="bg-white border border-gray-300 rounded-2xl p-4 md:p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <FiShield className="w-5 h-5 text-gray-700 animate-[pulse_2s_ease-in-out_infinite]" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">We use cookies</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                  By clicking &quot;Accept&quot;, you consent to our use of cookies.{' '}
                  <Link href="/privacy" className="text-gray-900 underline hover:text-gray-700">
                    Learn more
                  </Link>
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="primary"
                    onClick={handleAccept}
                    className="text-sm px-4 py-3 min-h-[44px] flex-1 sm:flex-none justify-center"
                  >
                    Accept
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={handleDecline}
                    className="text-sm px-4 py-3 min-h-[44px] flex-1 sm:flex-none justify-center"
                  >
                    Decline
                  </Button>
                </div>
              </div>
              <button
                onClick={handleDecline}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

