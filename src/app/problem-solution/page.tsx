'use client';

import PageLayout from '@/components/PageLayout';
import ScrollAnimation from '@/components/ScrollAnimation';
import { FiAlertCircle, FiCheckCircle, FiTrendingUp, FiShield, FiZap } from 'react-icons/fi';

export default function ProblemSolution() {
  const problems = [
    {
      problem: 'Fragmented Tools & Systems',
      description: 'Managing multiple disconnected tools leads to inefficiency, data silos, and increased operational costs.',
      solution: 'Unified Platform',
      solutionDesc: 'Kaisoku brings all your tools together in one cohesive platform, eliminating silos and streamlining operations.',
      icon: <FiAlertCircle className="w-6 h-6 animate-[pulse_2s_ease-in-out_infinite]" />,
      solutionIcon: <FiCheckCircle className="w-6 h-6 animate-[pulse_2s_ease-in-out_infinite]" />,
    },
    {
      problem: 'Manual Workflows & Repetitive Tasks',
      description: 'Time-consuming manual processes slow down your team and reduce productivity.',
      solution: 'Automation & Efficiency',
      solutionDesc: 'Automate repetitive tasks and workflows, freeing up your team to focus on high-value work.',
      icon: <FiAlertCircle className="w-6 h-6 animate-[pulse_2.1s_ease-in-out_infinite]" />,
      solutionIcon: <FiZap className="w-6 h-6 animate-[pulse_2.1s_ease-in-out_infinite]" />,
    },
    {
      problem: 'Lack of Real-Time Insights',
      description: 'Making decisions without real-time data leads to missed opportunities and poor strategic choices.',
      solution: 'Advanced Analytics',
      solutionDesc: 'Get real-time insights and comprehensive analytics to make data-driven decisions instantly.',
      icon: <FiAlertCircle className="w-6 h-6 animate-[pulse_2.2s_ease-in-out_infinite]" />,
      solutionIcon: <FiTrendingUp className="w-6 h-6 animate-[pulse_2.2s_ease-in-out_infinite]" />,
    },
    {
      problem: 'Security & Compliance Concerns',
      description: 'Data breaches and compliance issues can damage your reputation and result in significant financial losses.',
      solution: 'Enterprise-Grade Security',
      solutionDesc: 'Built with security-first architecture, ensuring your data is protected with industry-leading encryption and compliance standards.',
      icon: <FiAlertCircle className="w-6 h-6 animate-[pulse_2.3s_ease-in-out_infinite]" />,
      solutionIcon: <FiShield className="w-6 h-6 animate-[pulse_2.3s_ease-in-out_infinite]" />,
    },
  ];

  return (
    <PageLayout>
      <div className="pt-20 md:pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <ScrollAnimation delay={0}>
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">Problem & Solution</h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                We understand the challenges businesses face. Here&apos;s how Kaisoku solves them.
              </p>
            </div>
          </ScrollAnimation>

          <div className="space-y-8 md:space-y-12">
            {problems.map((item, index) => (
              <ScrollAnimation key={index} delay={index * 0.1}>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  {/* Problem */}
                  <div className="bg-white border border-red-200 rounded-2xl p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-red-500">{item.icon}</div>
                      <h2 className="text-xl font-semibold text-gray-900">The Problem</h2>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{item.problem}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>

                  {/* Solution */}
                  <div className="bg-white border border-green-200 rounded-2xl p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-green-500">{item.solutionIcon}</div>
                      <h2 className="text-xl font-semibold text-gray-900">Our Solution</h2>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{item.solution}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.solutionDesc}</p>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation delay={0.5}>
            <div className="mt-16 text-center">
              <div className="bg-white border border-gray-300 rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Solve Your Challenges?</h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of businesses that have transformed their operations with Kaisoku.
                </p>
                <a
                  href="/contact"
                  className="inline-flex px-6 md:px-8 py-3 md:py-3.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors min-h-[48px] md:min-h-[52px] text-base md:text-lg items-center justify-center"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </PageLayout>
  );
}

