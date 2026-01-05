'use client';

import PageLayout from '@/components/PageLayout';
import ScrollAnimation from '@/components/ScrollAnimation';
import { FiCheckCircle, FiZap, FiBarChart2, FiUsers } from 'react-icons/fi';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Sign Up & Setup',
      description: 'Create your account in minutes. Our intuitive onboarding process guides you through initial setup, helping you configure your workspace and preferences.',
      icon: <FiCheckCircle className="w-6 h-6 animate-[pulse_2s_ease-in-out_infinite]" />,
    },
    {
      number: '02',
      title: 'Connect Your Tools',
      description: 'Integrate with your favorite apps and services seamlessly. We support hundreds of integrations, from payment gateways to marketing platforms.',
      icon: <FiZap className="w-6 h-6 animate-[pulse_2.2s_ease-in-out_infinite]" />,
    },
    {
      number: '03',
      title: 'Customize & Configure',
      description: 'Tailor the platform to your specific needs. Set up workflows, automate processes, and configure settings that match your business requirements.',
      icon: <FiBarChart2 className="w-6 h-6 animate-[pulse_2.4s_ease-in-out_infinite]" />,
    },
    {
      number: '04',
      title: 'Launch & Scale',
      description: 'Go live and start growing. Monitor your performance with real-time analytics and scale effortlessly as your business expands.',
      icon: <FiUsers className="w-6 h-6 animate-[pulse_2.1s_ease-in-out_infinite]" />,
    },
  ];

  return (
    <PageLayout>
      <div className="pt-20 md:pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation delay={0}>
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">How It Works</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Get started with Kaisoku in four simple steps. Our platform is designed to be intuitive, 
                powerful, and scalable from day one.
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative">
                  <div className="shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gray-100 border border-gray-300 flex items-center justify-center">
                      <span className="text-2xl md:text-3xl font-bold text-gray-400 font-brand">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="text-gray-700">{step.icon}</div>
                      <h2 className="text-xl md:text-2xl font-semibold text-gray-900">{step.title}</h2>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">{step.description}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={0.5}>
            <div className="mt-16 text-center">
              <div className="bg-white border border-gray-300 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of businesses already using Kaisoku to streamline their operations.
                </p>
                <a
                  href="/contact"
                  className="inline-flex px-6 md:px-8 py-3 md:py-3.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors min-h-[48px] md:min-h-[52px] text-base md:text-lg items-center justify-center"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </PageLayout>
  );
}

