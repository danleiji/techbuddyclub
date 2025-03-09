'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Resource, isActiveResource } from '../types/resource';
import Footer from '../components/Footer';

const resources: Resource[] = [
  {
    id: 'tech-interview-guide',
    title: 'Tech Interview Preparation Guide',
    description: 'A comprehensive guide to ace your next technical interview. Includes common questions, patterns, and strategies.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=600&fit=crop',
    type: 'Free Guide',
    gumroadUrl: 'https://careerbuddy.gumroad.com/l/techinterviewguide',
    category: 'Interview Prep',
    stats: {
      downloads: 1250,
      rating: 4.8,
      reviews: 89
    },
    testimonials: [
      {
        text: "This guide helped me land my dream job at Google. The system design section was particularly helpful!",
        author: "David Chen",
        role: "Software Engineer at Google"
      },
      {
        text: "Clear, concise, and practical. Worth every minute spent reading it.",
        author: "Sarah Miller",
        role: "Frontend Developer at Meta"
      }
    ]
  },
  {
    id: 'system-design',
    title: 'System Design Templates',
    description: 'Ready-to-use templates for system design interviews. Includes common architectures and design patterns.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
    type: 'Coming Soon',
    category: 'System Design',
    stats: {
      preRegistered: 450,
      expectedRelease: 'June 2024'
    }
  },
  {
    id: 'resume-templates',
    title: 'Tech Resume Templates',
    description: 'ATS-friendly resume templates optimized for tech roles. Includes examples and writing guidelines.',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=600&fit=crop',
    type: 'Coming Soon',
    category: 'Career Tools',
    stats: {
      preRegistered: 320,
      expectedRelease: 'May 2024'
    }
  }
];

const webinars = [
  {
    id: 'system-design-workshop',
    title: 'System Design Interview Masterclass',
    description: 'Learn how to tackle complex system design questions with practical examples and live coding.',
    status: 'Coming Soon',
    duration: '2 hours',
    price: 29.99,
    instructor: {
      name: 'Alex Chen',
      role: 'Senior Software Engineer at Google'
    },
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&h=600&fit=crop',
    eventbriteUrl: '#'
  },
  {
    id: 'faang-prep',
    title: 'Breaking into FAANG: A Complete Guide',
    description: 'Comprehensive strategies for landing roles at top tech companies, from resume to offer negotiation.',
    status: 'Coming Soon',
    duration: '90 minutes',
    price: 24.99,
    instructor: {
      name: 'Sarah Johnson',
      role: 'Engineering Manager at Microsoft'
    },
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop',
    eventbriteUrl: '#'
  },
  {
    id: 'tech-leadership',
    title: 'Tech Leadership Workshop',
    description: 'Essential skills for transitioning from senior engineer to tech lead. Real-world scenarios and best practices.',
    status: 'Coming Soon',
    duration: '2 hours',
    price: 34.99,
    instructor: {
      name: 'Emily Zhang',
      role: 'Tech Lead at Meta'
    },
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
    eventbriteUrl: '#'
  }
];

const categories = [
  {
    name: 'Interview Prep',
    description: 'Resources to help you prepare for technical interviews',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    name: 'System Design',
    description: 'Learn how to design scalable systems',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    name: 'Career Tools',
    description: 'Tools and templates for career growth',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function ResourcesPage() {
  useEffect(() => {
    // Load Gumroad script
    const script = document.createElement('script');
    script.src = 'https://gumroad.com/js/gumroad.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const featuredResource = resources.find(r => r.id === 'tech-interview-guide');
  const otherResources = resources.filter(r => r.id !== 'tech-interview-guide');

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Tech Career Resources
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Free and premium resources to accelerate your tech career growth.
              Curated by industry experts.
            </p>
          </div>

          {/* Featured Guide Section */}
          {featuredResource && isActiveResource(featuredResource) && (
            <div className="mb-16">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl overflow-hidden shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div className="text-white">
                    <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                      Featured Guide
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{featuredResource.title}</h2>
                    <p className="text-white/90 mb-6">{featuredResource.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-3xl font-bold">
                          {featuredResource.stats.downloads.toLocaleString()}
                        </div>
                        <div className="text-white/80">Downloads</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold">
                          {featuredResource.stats.rating}
                        </div>
                        <div className="text-white/80">
                          Average Rating ({featuredResource.stats.reviews} reviews)
                        </div>
                      </div>
                    </div>

                    <a
                      href={featuredResource.gumroadUrl}
                      className="inline-block px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
                    >
                      Download Free Guide
                    </a>
                  </div>
                  <div className="relative h-64 lg:h-auto rounded-xl overflow-hidden">
                    <Image
                      src={featuredResource.image}
                      alt={featuredResource.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-indigo-600">{category.icon}</div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {category.name}
                  </h2>
                </div>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>

          {/* Webinars Section */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Upcoming Webinars
              </h2>
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                View all webinars →
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webinars.map((webinar) => (
                <div
                  key={webinar.id}
                  className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={webinar.image}
                      alt={webinar.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500 text-white text-sm font-medium">
                        {webinar.status}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {webinar.description}
                    </p>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="text-sm">
                        <p className="font-medium text-gray-900">{webinar.instructor.name}</p>
                        <p className="text-gray-600">{webinar.instructor.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-indigo-600">
                        ${webinar.price}
                      </span>
                      <button
                        className="px-4 py-2 bg-gray-100 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                        disabled
                      >
                        Register Soon
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Resources Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {otherResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-full">
                      {resource.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-indigo-600">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>

                  {/* Stats Section */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="grid grid-cols-2 gap-4">
                      {isActiveResource(resource) ? (
                        <>
                          <div>
                            <div className="text-2xl font-bold text-indigo-600">
                              {resource.stats.downloads.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600">Downloads</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-indigo-600">
                              {resource.stats.rating}
                            </div>
                            <div className="text-sm text-gray-600">
                              Average Rating ({resource.stats.reviews} reviews)
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <div className="text-2xl font-bold text-indigo-600">
                              {resource.stats.preRegistered.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600">Pre-registered</div>
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-indigo-600">
                              {resource.stats.expectedRelease}
                            </div>
                            <div className="text-sm text-gray-600">Expected Release</div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Testimonials Section */}
                  {isActiveResource(resource) && resource.testimonials && (
                    <div className="mb-6">
                      {resource.testimonials.map((testimonial, index) => (
                        <div
                          key={index}
                          className="mb-4 last:mb-0 p-4 bg-indigo-50 rounded-lg"
                        >
                          <p className="text-gray-700 text-sm italic mb-2">
                            &quot;{testimonial.text}&quot;
                          </p>
                          <div className="text-sm">
                            <span className="font-medium text-gray-900">
                              {testimonial.author}
                            </span>
                            <span className="text-gray-600"> · {testimonial.role}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {isActiveResource(resource) ? (
                    <a
                      className="gumroad-button block w-full text-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                      href={resource.gumroadUrl}
                    >
                      Download Now
                    </a>
                  ) : (
                    <button
                      className="w-full px-4 py-2 bg-gray-100 text-gray-600 font-medium rounded-lg cursor-not-allowed"
                      disabled
                    >
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 bg-indigo-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Get Notified About New Resources
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates when we release new
              resources, guides, and tools.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
} 