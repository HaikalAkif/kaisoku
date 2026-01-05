'use client';

import Link from 'next/link';
import PageLayout from '@/components/PageLayout';
import Button from '@/components/Button';
import FeatureCard from '@/components/FeatureCard';
import PartnerCard from '@/components/PartnerCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ScrollAnimation from '@/components/ScrollAnimation';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiBarChart2, FiLayers, FiShield, FiHeadphones, FiSmartphone } from 'react-icons/fi';

export default function Home() {
  const features = [
    {
      icon: <FiShoppingBag className="w-5 h-5 animate-[pulse_2s_ease-in-out_infinite]" />,
      title: 'Sell anything',
      description: 'Create and manage your products with ease. Our intuitive platform allows you to sell digital goods, subscriptions, or physical products all in one place.'
    },
    {
      icon: <FiBarChart2 className="w-5 h-5 animate-[pulse_2.2s_ease-in-out_infinite]" />,
      title: 'Analytics Dashboard',
      description: 'Get real-time insights into your business performance. Track sales, monitor user engagement, and make data-driven decisions with our comprehensive analytics tools.'
    },
    {
      icon: <FiLayers className="w-5 h-5 animate-[pulse_2.4s_ease-in-out_infinite]" />,
      title: 'Integrations',
      description: 'Connect with your favorite tools seamlessly. We support integrations with payment gateways, email marketing platforms, CRM systems, and more.'
    },
    {
      icon: <FiShield className="w-5 h-5 animate-[pulse_2.1s_ease-in-out_infinite]" />,
      title: 'Secure & Scalable',
      description: 'Built with enterprise-grade security. Your data is protected with end-to-end encryption, and our infrastructure scales automatically with your growth.'
    },
    {
      icon: <FiHeadphones className="w-5 h-5 animate-[pulse_2.3s_ease-in-out_infinite]" />,
      title: 'Customer Support',
      description: '24/7 customer support to help you succeed. Our dedicated team is always ready to assist you with any questions or issues you may encounter.'
    },
    {
      icon: <FiSmartphone className="w-5 h-5 animate-[pulse_2.5s_ease-in-out_infinite]" />,
      title: 'Mobile Ready',
      description: 'Access your dashboard from anywhere. Our responsive design works perfectly on desktop, tablet, and mobile devices, so you can manage your business on the go.'
    }
  ];

  const partners = [
    'CoinBase',
    'Stripe',
    'Shopify',
    'Microsoft',
    'Google',
    'Amazon'
  ];

  return (
    <PageLayout>

      <section className="w-full pt-20 pb-12 md:pt-32 md:pb-24 px-4 md:px-8 lg:px-16 relative overflow-hidden min-h-[500px] md:min-h-[600px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] gap-8 md:gap-10 lg:gap-16 items-center">
            <div className="space-y-4 md:space-y-6 max-w-xl md:max-w-2xl mx-auto md:mx-0">
              <ScrollAnimation delay={0}>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                  <span className="text-xs md:text-sm text-gray-700 font-medium">What&apos;s New?</span>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.1}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight text-center md:text-left">
                  Transform Your Business with Powerful SaaS Solutions
                </h1>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed text-center md:text-left">
                  Streamline your workflow, boost productivity, and scale effortlessly with our innovative platform designed for modern businesses.
                </p>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <div className="flex justify-center md:justify-start">
                  <Link href="/contact">
                    <Button variant="primary" className="text-sm sm:text-base md:text-lg px-6 md:px-8 py-3 md:py-4 min-h-[48px] md:min-h-[56px]">
                      Start Free Trial
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation direction="left" delay={0.2}>
              <div className="relative h-[300px] sm:h-[380px] md:h-[420px] lg:h-[520px] flex items-center justify-center mt-8 md:mt-0">
                <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm h-full flex items-center justify-center gap-2 md:gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="absolute -left-1 sm:-left-2 md:-left-4 w-[100px] h-[200px] sm:w-[120px] sm:h-[240px] md:w-[130px] md:h-[260px] bg-gray-800 rounded-3xl p-1.5 sm:p-2 shadow-2xl transform rotate-[-8deg] z-10"
                  >
                    <div className="w-full h-full bg-gradient-to-b from-sky-900 via-sky-800 to-sky-600 rounded-2xl overflow-hidden relative">
                      <div className="absolute top-4 left-4 text-white font-semibold text-xs">
                        TripNow
                      </div>
                      <div className="absolute top-8 left-0 right-0 px-3 space-y-2 text-[10px] text-white/80">
                        <div className="flex items-center justify-between bg-white/10 rounded-full px-2 py-1">
                          <span>Kuala Lumpur</span>
                          <span className="text-[9px]">Today</span>
                        </div>
                        <div className="flex items-center justify-between bg-white/10 rounded-full px-2 py-1">
                          <span>Tokyo</span>
                          <span className="text-[9px]">Next week</span>
                        </div>
                      </div>
                      <div className="absolute bottom-14 left-0 right-0 px-3">
                        <div className="bg-white/15 rounded-xl p-2 text-[10px] text-white space-y-1">
                          <div className="flex justify-between">
                            <span>Flights</span>
                            <span className="text-white/70">RM 420</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Stays</span>
                            <span className="text-white/70">RM 310</span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 rounded-full font-semibold text-xs shadow-md">
                        Plan Trip
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 1,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="absolute z-20 w-[110px] h-[220px] sm:w-[130px] sm:h-[260px] md:w-[140px] md:h-[280px] bg-gray-800 rounded-3xl p-1.5 sm:p-2 shadow-2xl"
                  >
                    <div className="w-full h-full bg-gradient-to-b from-rose-900 via-orange-900 to-black rounded-2xl overflow-hidden relative flex items-center justify-center">
                      <div className="absolute top-4 left-4 text-white font-semibold text-xs">
                        Foodly
                      </div>
                      <div className="absolute top-8 left-0 right-0 px-3 space-y-2 text-[10px] text-white">
                        <div className="flex justify-between items-center bg-black/30 rounded-lg px-2 py-1">
                          <span className="font-medium">Burger Set</span>
                          <span className="text-amber-300">RM 18</span>
                        </div>
                        <div className="flex justify-between items-center bg-black/30 rounded-lg px-2 py-1">
                          <span className="font-medium">Chicken Rice</span>
                          <span className="text-amber-300">RM 12</span>
                        </div>
                        <div className="flex justify-between items-center bg-black/30 rounded-lg px-2 py-1">
                          <span className="font-medium">Thai Milk Tea</span>
                          <span className="text-amber-300">RM 8</span>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-0 right-0 px-3 flex items-center justify-between text-[10px] text-white/90">
                        <div>
                          <p className="font-semibold">2 items</p>
                          <p className="text-white/60">Arrives in 25 min</p>
                        </div>
                        <button className="bg-white text-black px-3 py-1.5 rounded-full font-semibold text-[10px] shadow-md">
                          Checkout
                        </button>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 2,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="absolute -right-1 sm:-right-2 md:-right-4 w-[100px] h-[200px] sm:w-[120px] sm:h-[240px] md:w-[130px] md:h-[260px] bg-gray-800 rounded-3xl p-1.5 sm:p-2 shadow-2xl transform rotate-[8deg] z-10"
                  >
                    <div className="w-full h-full bg-gradient-to-b from-emerald-900 via-emerald-800 to-black rounded-2xl overflow-hidden relative">
                      <div className="absolute top-4 left-4 text-emerald-100 font-semibold text-xs">
                        SportUp
                      </div>
                      <div className="absolute inset-x-3 top-10 text-[10px] text-emerald-50 space-y-2">
                        <div className="flex justify-between items-center border-b border-emerald-700/60 pb-1">
                          <span className="font-semibold">Today</span>
                          <span className="text-emerald-300">3 matches</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>KAI</span>
                          <span className="text-emerald-300 font-semibold">2 : 1</span>
                          <span>SCR</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>RAP</span>
                          <span className="text-emerald-300 font-semibold">89&apos;</span>
                          <span>JMP</span>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-0 right-0 px-3 flex items-center justify-between text-[10px] text-emerald-50">
                        <div>
                          <p className="font-semibold">Live score</p>
                          <p className="text-emerald-200/80">Premier league</p>
                        </div>
                        <button className="bg-emerald-400 text-black px-3 py-1.5 rounded-full font-semibold text-[10px] shadow-md">
                          Watch
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section id="solutions" className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <ScrollAnimation delay={0}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Everything You Need to Succeed
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={0.1}>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our comprehensive suite of tools and features is designed to help your business grow and thrive in today&apos;s competitive market.
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>

          <ScrollAnimation delay={0.6}>
            <div className="text-center">
              <Link href="/how-it-works">
                <Button variant="primary" className="text-base md:text-lg px-6 md:px-8 py-3 md:py-4 min-h-[48px] md:min-h-[56px]">
                  How it works?
                </Button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <ScrollAnimation delay={0}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by 1,000+ companies
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={0.1}>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Join thousands of businesses that trust Kaisoku to power their operations and drive growth.
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <PartnerCard
                key={index}
                name={partner}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />

    </PageLayout>
  );
}
