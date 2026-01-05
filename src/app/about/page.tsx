'use client';

import { useEffect, useState } from 'react';
import PageLayout from '@/components/PageLayout';
import ScrollAnimation from '@/components/ScrollAnimation';
import TeamCard from '@/components/TeamCard';
import { FiZap, FiShield, FiStar, FiUsers } from 'react-icons/fi';

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
  };
  location: {
    city: string;
    country: string;
  };
}

export default function AboutPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=6');
        const data = await response.json();
        setTeamMembers(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching team members:', error);
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  const values = [
    {
      title: 'Innovation',
      description:
        'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions that drive business growth.',
      icon: (
        <FiZap className="w-5 h-5 animate-[pulse_2s_ease-in-out_infinite]" />
      ),
    },
    {
      title: 'Integrity',
      description:
        'We operate with transparency, honesty, and ethical practices in everything we do, building trust with our clients and partners.',
      icon: (
        <FiShield className="w-5 h-5 animate-[pulse_2.2s_ease-in-out_infinite]" />
      ),
    },
    {
      title: 'Excellence',
      description:
        'We strive for perfection in every detail, ensuring our products and services exceed expectations and deliver exceptional value.',
      icon: (
        <FiStar className="w-5 h-5 animate-[pulse_2.4s_ease-in-out_infinite]" />
      ),
    },
    {
      title: 'Collaboration',
      description:
        'We believe in the power of teamwork, fostering an environment where diverse perspectives come together to create something extraordinary.',
      icon: (
        <FiUsers className="w-5 h-5 animate-[pulse_2.1s_ease-in-out_infinite]" />
      ),
    },
  ];

  return (
    <PageLayout>
      <section className="w-full pt-20 pb-12 md:pt-32 md:pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollAnimation delay={0}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
                About Kaisoku
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.1}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Empowering businesses worldwide with innovative SaaS solutions that transform how teams work, collaborate,
                and succeed.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="w-full pt-6 pb-12 md:pt-10 md:pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)] items-start">
            <div>
              <ScrollAnimation delay={0}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
              </ScrollAnimation>
              <ScrollAnimation delay={0.1}>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  At Kaisoku, our mission is to give modern teams a single, reliable operating system for running their
                  business. We remove the friction between tools, data, and people so that teams can focus on meaningful
                  work instead of manual busywork.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We do this by combining a clean, opinionated product experience with deep integrations and enterprise-grade
                  reliability—making powerful software feel simple, fast, and approachable for every team.
                </p>
              </ScrollAnimation>
            </div>

            <ScrollAnimation delay={0.15}>
              <div className="bg-white border border-gray-300 rounded-2xl p-6 md:p-7 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-500 mb-4">
                  What this means for you
                </p>
                <ul className="space-y-4 text-sm md:text-base">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gray-900" />
                    <div>
                      <p className="font-semibold text-gray-900">Faster execution</p>
                      <p className="text-gray-600">
                        Automate repetitive workflows so your team can move from idea to impact in days, not weeks.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gray-900" />
                    <div>
                      <p className="font-semibold text-gray-900">Aligned teams</p>
                      <p className="text-gray-600">
                        Give every stakeholder a single source of truth with live dashboards, alerts, and shared context.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-gray-900" />
                    <div>
                      <p className="font-semibold text-gray-900">Scalable foundation</p>
                      <p className="text-gray-600">
                        Start small and grow confidently with infrastructure, security, and performance you don&apos;t have
                        to think about.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="w-full pt-8 pb-16 md:pt-10 md:pb-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <ScrollAnimation delay={0}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={0.1}>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do and shape our culture.
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <ScrollAnimation key={index} delay={0.1 + index * 0.1}>
                <div className="bg-white border border-gray-300 rounded-xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-gray-400">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-gray-700">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <ScrollAnimation delay={0}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
            </ScrollAnimation>
            <ScrollAnimation delay={0.1}>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                The passionate individuals behind Kaisoku, dedicated to your success.
              </p>
            </ScrollAnimation>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-white border border-gray-300 rounded-xl p-6 animate-pulse">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full bg-gray-200 mb-4"></div>
                    <div className="h-6 bg-gray-200 rounded w-32 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-48 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <TeamCard
                  key={index}
                  member={member}
                  delay={index * 0.1}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}

