'use client';

import PageLayout from '@/components/PageLayout';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function TermsOfService() {
  return (
    <PageLayout>
      <div className="pt-20 md:pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <ScrollAnimation delay={0}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 text-center">Terms of Service</h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-8 md:mb-12 text-center">Last updated: January 2026</p>
          </ScrollAnimation>

          <ScrollAnimation delay={0.1}>
            <section className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">1. Acceptance of Terms</h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                By accessing and using Kaisoku, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to these terms, please do not use our service.
              </p>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Permission is granted to temporarily access and use Kaisoku for personal or commercial purposes. This is the 
                grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose without written consent</li>
                <li>Attempt to reverse engineer any software contained on the platform</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or mirror the materials on any other server</li>
              </ul>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={0.3}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
                You are responsible for safeguarding the password and for all activities that occur under your account.
              </p>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={0.4}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Acceptable Use</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to use the service:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>In any way that violates any applicable law or regulation</li>
                <li>To transmit any malicious code or harmful content</li>
                <li>To impersonate or attempt to impersonate another user or entity</li>
                <li>To engage in any automated use of the system that interferes with the service</li>
                <li>To collect or store personal data about other users without their permission</li>
              </ul>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={0.5}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you purchase a subscription or make a payment, you agree to provide current, complete, and accurate purchase 
                and account information. All payments are processed securely through our payment partners. Subscription fees are 
                billed in advance on a monthly or annual basis and are non-refundable.
              </p>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={0.6}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The service and its original content, features, and functionality are owned by Kaisoku and are protected by 
                international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not 
                reproduce, distribute, modify, or create derivative works of our content without our express written permission.
              </p>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={0.7}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use 
                the service will immediately cease.
              </p>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={0.8}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The information on this service is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, 
                Kaisoku excludes all representations, warranties, and conditions relating to our service and the use of this service.
              </p>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={0.9}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In no event shall Kaisoku, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable 
                for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of 
                profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
              </p>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={1.0}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which Kaisoku operates, without 
                regard to its conflict of law provisions.
              </p>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={1.1}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is 
                material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>
          </ScrollAnimation>

          <ScrollAnimation delay={1.2}>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at{' '}
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

