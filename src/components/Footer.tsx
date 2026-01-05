'use client';

import Link from 'next/link';
import ScrollAnimation from './ScrollAnimation';
import { FaLinkedinIn, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { useCookie } from '@/contexts/CookieContext';

export default function Footer() {
  const { showBanner } = useCookie();

  return (
    <footer className="w-full py-8 md:py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation delay={0}>
          <div className="bg-white border border-gray-300 rounded-2xl p-6 md:p-8 lg:p-12 relative overflow-hidden">
            <div className="grid md:grid-cols-3 gap-8 md:gap-8">
              <ScrollAnimation delay={0.1}>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900 font-brand tracking-[0.3em]">
                    Kaisoku
                  </h2>
                  <p className="text-gray-600 leading-relaxed max-w-sm">
                    Empowering businesses with cutting-edge SaaS solutions. Streamline your workflow, boost productivity, and scale effortlessly with our innovative platform.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors"
                    >
                      <FaLinkedinIn className="w-4 h-4 animate-[pulse_2s_ease-in-out_infinite]" />
                    </a>

                    <a
                      href="#"
                      aria-label="Instagram"
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors"
                    >
                      <FaInstagram className="w-4 h-4 animate-[pulse_2.2s_ease-in-out_infinite]" />
                    </a>

                    <a
                      href="#"
                      aria-label="Twitter"
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-colors"
                    >
                      <FaXTwitter className="w-4 h-4 animate-[pulse_2.4s_ease-in-out_infinite]" />
                    </a>
                  </div>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
                        How it works
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                        What&apos;s new?
                      </Link>
                    </li>
                    <li>
                      <Link href="/faqs" className="text-gray-600 hover:text-gray-900 transition-colors">
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Company</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation delay={0.4}>
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
                <p className="text-gray-600 text-xs md:text-sm text-center md:text-left">
                  © 2026 Kaisoku. All Rights Reserved.
                </p>
                <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-xs md:text-sm">
                  <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors min-h-[44px] flex items-center">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors min-h-[44px] flex items-center">
                    Terms of Service
                  </Link>
                  <button
                    onClick={() => {
                      localStorage.removeItem('cookieConsent');
                      showBanner();
                    }}
                    className="text-gray-600 hover:text-gray-900 transition-colors min-h-[44px] flex items-center"
                  >
                    Cookies Settings
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    </footer>
  );
}

