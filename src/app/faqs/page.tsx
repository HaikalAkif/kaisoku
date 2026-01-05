'use client';

import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import ScrollAnimation from '@/components/ScrollAnimation';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

interface FAQ {
  question: string;
  answer: string;
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQ[] = [
    {
      question: 'What is Kaisoku and how does it work?',
      answer: 'Kaisoku is a comprehensive SaaS platform designed to streamline business operations. It integrates multiple tools and services into one unified platform, allowing you to manage workflows, automate tasks, and gain real-time insights. Simply sign up, connect your tools, and start automating your processes.',
    },
    {
      question: 'How much does Kaisoku cost?',
      answer: 'We offer flexible pricing plans to suit businesses of all sizes. Our Starter plan begins at RM99/month, with Pro and Enterprise plans available for growing businesses. All plans include a 14-day free trial, so you can explore all features risk-free. Visit our pricing page for detailed information.',
    },
    {
      question: 'Do I need technical knowledge to use Kaisoku?',
      answer: 'Not at all! Kaisoku is designed with user-friendliness in mind. Our intuitive interface and guided setup process make it easy for anyone to get started, regardless of technical background. However, we also provide advanced features and APIs for developers who want to customize their experience.',
    },
    {
      question: 'What integrations does Kaisoku support?',
      answer: 'Kaisoku supports hundreds of integrations across various categories including payment gateways (Stripe, PayPal), e-commerce platforms (Shopify, WooCommerce), email marketing tools (Mailchimp, SendGrid), cloud storage (Google Drive, Dropbox), and many more. We also offer custom integration services for specific needs.',
    },
    {
      question: 'Is my data secure with Kaisoku?',
      answer: 'Absolutely. Security is our top priority. We use enterprise-grade encryption, regular security audits, and comply with industry standards including GDPR and SOC 2. Your data is stored securely and never shared with third parties without your explicit consent.',
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time with no penalties. Your access will continue until the end of your current billing period. We don\'t lock you into long-term contracts, giving you the flexibility to adjust your plan as needed.',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We offer 24/7 customer support via email and live chat for all users. Pro and Enterprise plan subscribers get priority support with faster response times. We also provide comprehensive documentation, video tutorials, and a knowledge base to help you get the most out of Kaisoku.',
    },
    {
      question: 'Can I try Kaisoku before purchasing?',
      answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start your trial. This gives you plenty of time to explore the platform and see how it can benefit your business.',
    },
    {
      question: 'How do I migrate my existing data to Kaisoku?',
      answer: 'Our team provides migration assistance to help you seamlessly transfer your data from existing systems. We support data imports from common formats and can work with you to ensure a smooth transition. Enterprise customers receive dedicated migration support.',
    },
    {
      question: 'Does Kaisoku work on mobile devices?',
      answer: 'Yes! Kaisoku is fully responsive and works seamlessly on desktop, tablet, and mobile devices. We also offer native mobile apps for iOS and Android, so you can manage your business on the go.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageLayout>
      <div className="pt-20 md:pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation delay={0}>
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Frequently Asked Questions</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about Kaisoku. Can&apos;t find what you&apos;re looking for?{' '}
                <a href="/contact" className="text-gray-900 underline hover:text-gray-700">
                  Contact us
                </a>.
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((faq, index) => (
              <ScrollAnimation key={index} delay={index * 0.05}>
                <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-4 md:px-6 py-4 md:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors min-h-[60px] md:min-h-[72px]"
                  >
                    <span className="font-semibold text-gray-900 pr-4 text-sm md:text-base">{faq.question}</span>
                    <div className="flex-shrink-0 text-gray-500">
                      {openIndex === index ? (
                        <FiChevronUp className="w-5 h-5" />
                      ) : (
                        <FiChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-4 md:px-6 pb-4 md:pb-5">
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={0.6}>
            <div className="mt-16 text-center">
              <div className="bg-white border border-gray-300 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
                <p className="text-gray-600 mb-6">
                  Our support team is here to help. Get in touch and we&apos;ll respond within 24 hours.
                </p>
                <a
                  href="/contact"
                  className="inline-flex px-6 md:px-8 py-3 md:py-3.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors min-h-[48px] md:min-h-[52px] text-base md:text-lg items-center justify-center"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </PageLayout>
  );
}

