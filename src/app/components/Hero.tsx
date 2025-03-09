'use client';

import { useState } from 'react';
import AvatarGroup from './Avatar';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else {
        throw new Error(data.error || 'Something went wrong');
      }
    } catch (error: any) {
      setStatus('error');
      setMessage(error.message || 'There was an error subscribing to the newsletter.');
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full text-sm font-medium">
            Early Access
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Level up your tech career
          <span className="block text-indigo-600">in weeks, not years</span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Join our community of tech professionals and get personalized mentorship from industry experts. Start your journey to success today.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-4">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              required
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Joining...' : 'Join Now'}
            </button>
          </div>
        </form>

        {message && (
          <div className={`mb-8 text-sm ${status === 'error' ? 'text-red-600' : 'text-green-600'}`}>
            {message}
          </div>
        )}

        <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
          <AvatarGroup />
          <p>
            <span className="font-semibold text-gray-900">2,000+</span> members
            have joined
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col items-center gap-2">
            <div className="text-indigo-600 font-semibold">30+ Mentors</div>
            <p className="text-sm text-gray-600">Industry experts</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-indigo-600 font-semibold">1:1 Calls</div>
            <p className="text-sm text-gray-600">Personalized guidance</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-indigo-600 font-semibold">Weekly Content</div>
            <p className="text-sm text-gray-600">Stay updated</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-indigo-600 font-semibold">Community</div>
            <p className="text-sm text-gray-600">Network & grow</p>
          </div>
        </div>
      </div>
    </div>
  );
} 