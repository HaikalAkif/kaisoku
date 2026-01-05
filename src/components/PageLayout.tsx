'use client';

import Header from './Header';
import Footer from './Footer';
import ScrollAnimation from './ScrollAnimation';
import CookieBanner from './CookieBanner';
import { CookieProvider } from '@/contexts/CookieContext';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <CookieProvider>
      <main className="min-h-screen relative">
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(147,51,234,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(249,168,37,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.9),transparent_70%)]" />
      </div>

      <div className="relative z-10">
        <Header />

        {children}

        <Footer />

        <ScrollAnimation delay={0.2}>
          <div className="w-full pb-6 md:pb-8 px-4 md:px-8 lg:px-16 relative overflow-hidden">
            <div
              className="text-[120px] sm:text-[180px] md:text-[240px] lg:text-[320px] font-bold text-black text-center leading-none font-brand"
              style={{
                maskImage:
                  'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, transparent 100%)',
                WebkitMaskImage:
                  'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, transparent 100%)',
                opacity: 0.15,
              }}
            >
              Kaisoku
            </div>
          </div>
        </ScrollAnimation>
      </div>

        <CookieBanner />
      </main>
    </CookieProvider>
  );
}

