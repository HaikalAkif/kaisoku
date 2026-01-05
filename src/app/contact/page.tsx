'use client';

import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import PageLayout from '@/components/PageLayout';
import ScrollAnimation from '@/components/ScrollAnimation';
import Button from '@/components/Button';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [state, handleSubmit] = useForm('xnjnwwbe');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    await handleSubmit(e);
    
    if (state.succeeded) {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <PageLayout>
      <section className="w-full pt-20 pb-12 md:pt-32 md:pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollAnimation delay={0}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
                Get in Touch
              </h1>
            </ScrollAnimation>
            <ScrollAnimation delay={0.1}>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                Have a question or want to learn more? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="w-full pb-16 md:pb-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,2fr)] items-start">
            <ScrollAnimation delay={0.2}>
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Contact information
                  </h2>
                  <p className="text-sm text-gray-600">
                    Reach out to us directly or use the form and our team will respond within one
                    business day.
                  </p>
                </div>

                <div className="grid gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center">
                      <FiMail className="w-5 h-5 text-gray-700 animate-[pulse_2s_ease-in-out_infinite]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-sm text-gray-600">haikalakif@kaisoku.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center">
                      <FiPhone className="w-5 h-5 text-gray-700 animate-[pulse_2.2s_ease-in-out_infinite]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-sm text-gray-600">+60 12-345 6789</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center">
                      <FiMapPin className="w-5 h-5 text-gray-700 animate-[pulse_2.4s_ease-in-out_infinite]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Location</h3>
                      <p className="text-sm text-gray-600">Kuala Lumpur, Malaysia</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.25}>
              <div className="bg-white border border-gray-300 rounded-2xl p-8 md:p-12">
                {state.succeeded ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Message Sent Successfully!
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                    <Button variant="primary" onClick={() => window.location.reload()}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-900 mb-2"
                      >
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 md:py-3.5 border rounded-lg focus:outline-none focus:ring-2 transition-colors text-base min-h-[48px] ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-gray-900 focus:border-gray-900'
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-900 mb-2"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 md:py-3.5 border rounded-lg focus:outline-none focus:ring-2 transition-colors text-base min-h-[48px] ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-gray-900 focus:border-gray-900'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        className="mt-1 text-sm text-red-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-900 mb-2"
                      >
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 md:py-3.5 border rounded-lg focus:outline-none focus:ring-2 transition-colors text-base min-h-[48px] ${
                          errors.subject
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-gray-900 focus:border-gray-900'
                        }`}
                        placeholder="What's this about?"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-900 mb-2"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className={`w-full px-4 py-3 md:py-3.5 border rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none text-base min-h-[120px] ${
                          errors.message
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-gray-900 focus:border-gray-900'
                        }`}
                        placeholder="Tell us more about your inquiry..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                      )}
                      <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                        className="mt-1 text-sm text-red-500"
                      />
                    </div>

                    {state.errors && Object.keys(state.errors).length > 0 && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm text-red-600 mb-2">
                          Please fix the errors above and try again.
                        </p>
                      </div>
                    )}

                    <div>
                      <Button
                        type="submit"
                        variant="primary"
                        className="w-full min-h-[48px] md:min-h-[52px] text-base md:text-lg"
                        disabled={state.submitting}
                      >
                        {state.submitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg
                              className="animate-spin h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          'Send Message'
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

