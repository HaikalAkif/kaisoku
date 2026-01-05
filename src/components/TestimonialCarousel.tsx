'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollAnimation from './ScrollAnimation';
import Image from 'next/image';

interface Testimonial {
  id: number;
  body: string;
  user: {
    id: number;
    username: string;
    image?: string;
  };
}

export default function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const customTestimonials = [
          {
            id: 1,
            body: "Kaisoku has completely transformed how our team collaborates and manages projects. The intuitive interface made onboarding effortless, and within just a week, we saw a 40% increase in productivity. The automation features have saved us countless hours every month, and the real-time analytics give us insights we never had before. The customer support team is incredibly responsive and helpful. I can't recommend Kaisoku enough to any business looking to streamline their operations!",
            user: {
              id: 1,
              username: "Sarah Chen",
              image: "https://api.dicebear.com/7.x/avataaars/svg?seed=happy1&backgroundColor=b6e3f4,c0aede,d1d4f9"
            }
          },
          {
            id: 2,
            body: "As a growing startup, we needed a platform that could scale with us, and Kaisoku has exceeded all expectations. The integration capabilities are outstanding - we've connected all our essential tools seamlessly. What impressed me most was how quickly we could customize workflows to match our unique processes. The reporting features have been game-changing for our decision-making process. Our team loves using it daily, and I've already recommended it to three other companies!",
            user: {
              id: 2,
              username: "Michael Rodriguez",
              image: "https://api.dicebear.com/7.x/avataaars/svg?seed=happy2&backgroundColor=b6e3f4,c0aede,d1d4f9"
            }
          },
          {
            id: 3,
            body: "After trying multiple SaaS solutions, Kaisoku stands out as the clear winner. The user experience is exceptional - everything feels intuitive and well-designed. We've reduced our project completion time by 35% since implementing it. The mobile app is fantastic, allowing me to stay connected even when I'm traveling. The security features give us peace of mind, and the pricing is incredibly fair for the value provided. This is the best investment we've made this year!",
            user: {
              id: 3,
              username: "Emily Johnson",
              image: "https://api.dicebear.com/7.x/avataaars/svg?seed=happy3&backgroundColor=b6e3f4,c0aede,d1d4f9"
            }
          },
          {
            id: 4,
            body: "Kaisoku has revolutionized our workflow management. The dashboard provides such clear visibility into all our projects and team performance. We've eliminated so much manual work through their automation features. What really sets them apart is their commitment to continuous improvement - they're always adding new features based on user feedback. The training resources are excellent, and our entire team was up and running within days. I'm genuinely excited about what they'll add next!",
            user: {
              id: 4,
              username: "David Kim",
              image: "https://api.dicebear.com/7.x/avataaars/svg?seed=happy4&backgroundColor=b6e3f4,c0aede,d1d4f9"
            }
          },
          {
            id: 5,
            body: "I've been using Kaisoku for over a year now, and it continues to impress me. The platform has grown with our business, handling everything from small projects to enterprise-level operations. The collaboration features have improved our team communication dramatically. We've seen measurable improvements in project delivery times and client satisfaction. The support team is knowledgeable and always quick to help. Kaisoku has become an essential part of our daily operations!",
            user: {
              id: 5,
              username: "Lisa Anderson",
              image: "https://api.dicebear.com/7.x/avataaars/svg?seed=happy5&backgroundColor=b6e3f4,c0aede,d1d4f9"
            }
          }
        ];
        
        setTestimonials(customTestimonials);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (loading) {
    return (
      <div className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          <div className="bg-white border border-gray-300 rounded-xl p-8 animate-pulse">
            <div className="h-32 bg-gray-200 rounded mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-32 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-48"></div>
          </div>
        </div>
      </div>
    );
  }

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <ScrollAnimation delay={0}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
          </ScrollAnimation>
          <ScrollAnimation delay={0.1}>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our customers have to say about Kaisoku.
            </p>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={0.2}>
          <div className="relative">
            <div className="relative bg-white border border-gray-300 rounded-2xl p-8 md:p-12 lg:p-16 overflow-hidden">
              <div className="max-w-5xl mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.25, 0, 1] }}
                    className="grid md:grid-cols-2 gap-8 items-center"
                  >
                    <div className="space-y-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed italic">
                      &ldquo;{currentTestimonial.body}&rdquo;
                    </p>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">
                        {currentTestimonial.user.username}
                      </p>
                      <p className="text-gray-600">Customer</p>
                    </div>
                    </div>

                    <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-gray-300 bg-gray-50 flex items-center justify-center">
                      {currentTestimonial.user.image ? (
                        <Image
                          src={currentTestimonial.user.image}
                          alt={currentTestimonial.user.username}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                      ) : (
                        <div className="text-center p-8">
                          <div className="w-32 h-32 rounded-full border-2 border-gray-300 bg-white mx-auto mb-4 flex items-center justify-center">
                            <span className="text-4xl font-bold text-gray-700">
                              {currentTestimonial.user.username.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300 shadow-lg z-10"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300 shadow-lg z-10"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-gray-900 w-8'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}

