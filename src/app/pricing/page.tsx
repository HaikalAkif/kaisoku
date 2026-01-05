'use client';

import Link from 'next/link';
import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import ScrollAnimation from '@/components/ScrollAnimation';
import Button from '@/components/Button';
import { FiCompass, FiTrendingUp, FiGrid } from 'react-icons/fi';

type BillingPeriod = 'monthly' | 'yearly';

const plans = [
  {
    name: 'Starter',
    description: 'For early-stage teams validating their product.',
    monthly: 19,
    yearly: 16,
    popular: false,
    features: ['Up to 3 projects', 'Basic analytics', 'Email support', 'Community access'],
    icon: <FiCompass className="w-5 h-5 animate-[pulse_2s_ease-in-out_infinite]" />,
  },
  {
    name: 'Pro',
    description: 'For growing teams that need advanced workflows.',
    monthly: 49,
    yearly: 39,
    popular: true,
    features: ['Unlimited projects', 'Advanced analytics', 'Priority support', 'Automation rules'],
    icon: <FiTrendingUp className="w-5 h-5 animate-[pulse_2.2s_ease-in-out_infinite]" />,
  },
  {
    name: 'Enterprise',
    description: 'For organizations that need security and scale.',
    monthly: 129,
    yearly: 109,
    popular: false,
    features: ['Custom onboarding', 'Dedicated CSM', 'SSO & advanced security', 'Custom integrations'],
    icon: <FiGrid className="w-5 h-5 animate-[pulse_2.4s_ease-in-out_infinite]" />,
  },
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');

  const getPrice = (plan: (typeof plans)[number]) =>
    billingPeriod === 'monthly' ? plan.monthly : plan.yearly;

  const getSuffix = () => (billingPeriod === 'monthly' ? '/month' : '/month billed yearly');

  return (
    <PageLayout>
      <section className="w-full pt-20 pb-8 md:pt-32 md:pb-14 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollAnimation delay={0}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
                Simple, transparent pricing.
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.1}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Choose a plan that grows with your team. Switch between monthly and yearly billing at any
                time.
              </p>
            </ScrollAnimation>
          </div>

          {/* Billing Toggle */}
          <ScrollAnimation delay={0.2}>
            <div className="mt-6 md:mt-8 flex justify-center">
              <div className="inline-flex items-center gap-2 md:gap-4 rounded-full border border-gray-300 bg-white px-2 md:px-3 py-1.5 md:py-2 shadow-sm">
                <button
                  type="button"
                  onClick={() => setBillingPeriod('monthly')}
                  className={`text-xs md:text-sm px-3 md:px-4 py-2 md:py-2 rounded-full transition-all min-h-[44px] ${
                    billingPeriod === 'monthly'
                      ? 'bg-black text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBillingPeriod('yearly')}
                  className={`text-xs md:text-sm px-3 md:px-4 py-2 md:py-2 rounded-full transition-all flex items-center gap-1 md:gap-2 min-h-[44px] ${
                    billingPeriod === 'yearly'
                      ? 'bg-black text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Yearly
                  <span className="text-[10px] md:text-xs font-medium text-gray-400">
                    save up to 20%
                  </span>
                </button>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="w-full pb-16 md:pb-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan, index) => {
              const isPopular = plan.popular;

              return (
                <ScrollAnimation key={plan.name} delay={0.1 + index * 0.1}>
                  <div
                    className={`relative flex h-full flex-col rounded-2xl border p-6 md:p-7 transition-all duration-300 ${
                      isPopular
                        ? 'border-black bg-white/90 shadow-2xl shadow-black/10 scale-[1.02]'
                        : 'border-gray-300 bg-white hover:border-gray-400 hover:shadow-xl'
                    }`}
                  >
                    {isPopular && (
                      <div className="absolute -top-3 left-6 rounded-full bg-black px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                        Most popular
                      </div>
                    )}

                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 border border-gray-300 text-gray-700">
                        {plan.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
                        <p className="text-sm text-gray-600">{plan.description}</p>
                      </div>
                    </div>

                    <div className="mt-4 mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl md:text-4xl font-bold text-gray-900">
                          RM {getPrice(plan)}
                        </span>
                        <span className="text-sm text-gray-600">{getSuffix()}</span>
                      </div>
                    </div>

                    <ul className="mb-6 space-y-3 text-sm text-gray-600">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      <Link href="/contact">
                        <Button
                          variant={isPopular ? 'primary' : 'secondary'}
                          className="w-full justify-center min-h-[48px] md:min-h-[52px] text-base"
                        >
                          {plan.name === 'Enterprise' ? 'Contact us' : 'Subscribe'}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}


