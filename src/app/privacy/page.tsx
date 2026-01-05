'use client';

import PageLayout from '@/components/PageLayout';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <div className="pt-20 md:pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation delay={0}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 text-center">Privacy Policy</h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-8 md:mb-12 text-center">Last updated: January 2026</p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.1}>
            <section className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">1. Introduction</h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                Welcome to Kaisoku. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy explains how we collect, use, and safeguard your information when you use our service.
              </p>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Name and contact information (email address, phone number)</li>
                <li>Account credentials and profile information</li>
                <li>Payment and billing information</li>
                <li>Communication data when you contact us</li>
                <li>Usage data and preferences</li>
              </ul>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Detect, prevent, and address technical issues</li>
              </ul>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>With service providers who assist us in operating our platform</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or merger</li>
                <li>With your explicit consent</li>
              </ul>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={0.5}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal data against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                the Internet is 100% secure.
              </p>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={0.6}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
              </ul>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={0.7}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our service and hold certain 
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={0.8}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={0.9}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="/contact" className="text-gray-900 underline hover:text-gray-700">
                  our contact page
                </a>.
              </p>
            </section>
          </ScrollAnimation>
        </div>
      </div>
    </PageLayout>
  );
}

