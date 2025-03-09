'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { mentors } from '@/app/data/mentors';
import Image from 'next/image';
import Link from 'next/link';

declare global {
  interface Window {
    Calendly: any;
  }
}

export default function BookingPage() {
  const params = useParams();
  const mentor = mentors.find((m) => m.id === params.mentorId);
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      console.log('Calendly script loaded successfully');
      setCalendlyLoaded(true);
    };
    script.onerror = () => {
      console.error('Failed to load Calendly script');
      setError('Failed to load booking widget');
    };
    document.body.appendChild(script);

    // Add Calendly styles
    const style = document.createElement('style');
    style.innerHTML = `
      .calendly-inline-widget,
      .calendly-inline-widget *,
      .calendly-badge-widget,
      .calendly-badge-widget *,
      .calendly-overlay,
      .calendly-overlay * {
        font-size: 16px;
        line-height: 1.2em;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    // Initialize Calendly widget when script is loaded
    if (window.Calendly && mentor && calendlyLoaded) {
      console.log('Initializing Calendly widget with URL:', mentor.calendlyUrl);
      try {
        window.Calendly.initInlineWidget({
          url: mentor.calendlyUrl,
          parentElement: document.getElementById('calendly-booking'),
          prefill: {},
          utm: {},
          styles: {
            height: '800px',
            minHeight: '800px'
          }
        });
        console.log('Calendly widget initialized successfully');
      } catch (err) {
        console.error('Error initializing Calendly widget:', err);
        setError('Error initializing booking widget');
      }
    }
  }, [mentor, calendlyLoaded]);

  if (!mentor) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Mentor not found</h1>
          <Link href="/mentors" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">
            Back to mentors
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mentor Info */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{mentor.name}</h1>
                  <p className="text-gray-600">{mentor.role} at {mentor.company}</p>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">About</h2>
                <p className="text-gray-600">{mentor.bio}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Expertise</h2>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 text-sm font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-600">{mentor.availability.duration}</span>
                    <span className="font-semibold text-gray-900 ml-2">
                      ${mentor.availability.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Schedule Your Call</h2>
            {error ? (
              <div className="text-red-600 text-center">
                {error}
                <button
                  onClick={() => window.location.reload()}
                  className="block mx-auto mt-4 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Retry
                </button>
              </div>
            ) : (
              <div 
                id="calendly-booking" 
                className="w-full"
                style={{ 
                  minHeight: '800px',
                  height: '800px',
                  overflow: 'hidden'
                }}
              >
                {!calendlyLoaded && (
                  <div className="flex items-center justify-center h-[800px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 