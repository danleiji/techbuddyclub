'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mentor } from '../types/mentor';
import NotionAvatar from './NotionAvatar';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function MentorCard({ mentor }: { mentor: Mentor }) {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Auto-rotate reviews every 5 seconds
  useEffect(() => {
    if (mentor.featuredReviews.length > 1) {
      const interval = setInterval(() => {
        setCurrentReviewIndex((current) =>
          current === mentor.featuredReviews.length - 1 ? 0 : current + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [mentor.featuredReviews.length]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <NotionAvatar name={mentor.name} size={64} />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
            <p className="text-sm text-gray-600">{mentor.role} at {mentor.company}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <StarRating rating={mentor.stats.averageRating} />
            <span className="text-sm text-gray-600">
              {mentor.stats.averageRating.toFixed(1)}
            </span>
          </div>
          <div className="text-sm text-gray-600">
            {mentor.stats.totalBookings} sessions
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{mentor.bio}</p>

        {mentor.featuredReviews.length > 0 && (
          <div className="mb-4 p-3 bg-gray-50 rounded-lg relative">
            <div className="flex items-start gap-2">
              <svg
                className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <div className="min-h-[80px] flex flex-col">
                <p className="text-sm text-gray-600 italic">
                  &quot;{mentor.featuredReviews[currentReviewIndex].comment}&quot;
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  {mentor.featuredReviews[currentReviewIndex].author}
                </p>
              </div>
            </div>
            {mentor.featuredReviews.length > 1 && (
              <div className="flex justify-center gap-1 mt-2">
                {mentor.featuredReviews.map((_, index) => (
                  <button
                    key={index}
                    className={`w-1.5 h-1.5 rounded-full ${
                      index === currentReviewIndex ? 'bg-indigo-600' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentReviewIndex(index)}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {mentor.expertise.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 bg-indigo-50 text-indigo-600 text-xs font-medium rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">{mentor.availability.duration}</span>
              <span className="font-semibold text-2xl text-indigo-600">
                ${mentor.availability.price}
              </span>
            </div>
            <span className="text-xs text-gray-500">Student-friendly pricing</span>
          </div>
          <Link
            href={`/book/${mentor.id}`}
            className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </div>
  );
} 