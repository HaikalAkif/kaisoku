'use client';

import PageLayout from '@/components/PageLayout';
import ScrollAnimation from '@/components/ScrollAnimation';
import { FiShoppingBag, FiCreditCard, FiMail, FiDatabase, FiCloud, FiCode } from 'react-icons/fi';

export default function Integrations() {
  const categories = [
    {
      title: 'Payment Gateways',
      description: 'Accept payments from customers worldwide with secure payment processing.',
      integrations: [
        { name: 'Stripe', icon: <FiCreditCard className="w-5 h-5 animate-[pulse_2s_ease-in-out_infinite]" /> },
        { name: 'PayPal', icon: <FiCreditCard className="w-5 h-5 animate-[pulse_2.1s_ease-in-out_infinite]" /> },
        { name: 'Square', icon: <FiCreditCard className="w-5 h-5 animate-[pulse_2.2s_ease-in-out_infinite]" /> },
      ],
    },
    {
      title: 'E-commerce Platforms',
      description: 'Connect with popular e-commerce platforms to sync products and orders.',
      integrations: [
        { name: 'Shopify', icon: <FiShoppingBag className="w-5 h-5 animate-[pulse_2.3s_ease-in-out_infinite]" /> },
        { name: 'WooCommerce', icon: <FiShoppingBag className="w-5 h-5 animate-[pulse_2.4s_ease-in-out_infinite]" /> },
        { name: 'BigCommerce', icon: <FiShoppingBag className="w-5 h-5 animate-[pulse_2.5s_ease-in-out_infinite]" /> },
      ],
    },
    {
      title: 'Email Marketing',
      description: 'Integrate with email marketing tools to automate campaigns and track engagement.',
      integrations: [
        { name: 'Mailchimp', icon: <FiMail className="w-5 h-5 animate-[pulse_2s_ease-in-out_infinite]" /> },
        { name: 'SendGrid', icon: <FiMail className="w-5 h-5 animate-[pulse_2.1s_ease-in-out_infinite]" /> },
        { name: 'ConvertKit', icon: <FiMail className="w-5 h-5 animate-[pulse_2.2s_ease-in-out_infinite]" /> },
      ],
    },
    {
      title: 'Cloud Storage',
      description: 'Store and sync files with leading cloud storage providers.',
      integrations: [
        { name: 'Google Drive', icon: <FiCloud className="w-5 h-5 animate-[pulse_2.3s_ease-in-out_infinite]" /> },
        { name: 'Dropbox', icon: <FiCloud className="w-5 h-5 animate-[pulse_2.4s_ease-in-out_infinite]" /> },
        { name: 'OneDrive', icon: <FiCloud className="w-5 h-5 animate-[pulse_2.5s_ease-in-out_infinite]" /> },
      ],
    },
    {
      title: 'Databases',
      description: 'Connect to your existing databases and data sources seamlessly.',
      integrations: [
        { name: 'PostgreSQL', icon: <FiDatabase className="w-5 h-5 animate-[pulse_2s_ease-in-out_infinite]" /> },
        { name: 'MongoDB', icon: <FiDatabase className="w-5 h-5 animate-[pulse_2.1s_ease-in-out_infinite]" /> },
        { name: 'MySQL', icon: <FiDatabase className="w-5 h-5 animate-[pulse_2.2s_ease-in-out_infinite]" /> },
      ],
    },
    {
      title: 'Developer Tools',
      description: 'Build custom integrations with our comprehensive API and webhooks.',
      integrations: [
        { name: 'REST API', icon: <FiCode className="w-5 h-5 animate-[pulse_2.3s_ease-in-out_infinite]" /> },
        { name: 'Webhooks', icon: <FiCode className="w-5 h-5 animate-[pulse_2.4s_ease-in-out_infinite]" /> },
        { name: 'SDK', icon: <FiCode className="w-5 h-5 animate-[pulse_2.5s_ease-in-out_infinite]" /> },
      ],
    },
  ];

  return (
    <PageLayout>
      <div className="pt-20 md:pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation delay={0}>
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Integrations</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Connect Kaisoku with your favorite tools and services. We support hundreds of integrations 
                to streamline your workflow and boost productivity.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="bg-white border border-gray-300 rounded-2xl p-6 md:p-8">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h2>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <div className="space-y-3">
                    {category.integrations.map((integration, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
                      >
                        <div className="text-gray-700">{integration.icon}</div>
                        <span className="text-gray-700 font-medium">{integration.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={0.7}>
            <div className="mt-16 text-center">
              <div className="bg-white border border-gray-300 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Need a Custom Integration?</h3>
                <p className="text-gray-600 mb-6">
                  Our team can help you build custom integrations tailored to your specific needs.
                </p>
                <a
                  href="/contact"
                  className="inline-flex px-6 md:px-8 py-3 md:py-3.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors min-h-[48px] md:min-h-[52px] text-base md:text-lg items-center justify-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </PageLayout>
  );
}

