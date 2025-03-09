'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-indigo-600' : 'text-gray-600 hover:text-gray-900';
  };

  return (
    <header className="w-full border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-indigo-600">
              TechBuddy
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={isActive('/')}>
              Home
            </Link>
            <Link 
              href="/mentors" 
              className={`${isActive('/mentors')} relative group`}
            >
              <span className={`
                px-4 py-1 rounded-full border-2 border-indigo-600
                ${pathname === '/mentors' ? 'bg-indigo-600 text-white' : 'bg-white hover:bg-indigo-50'}
                transition-colors duration-200
              `}>
                Mentors
                <span className="absolute -top-2 -right-2 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-500 text-white text-[10px] items-center justify-center">
                    New
                  </span>
                </span>
              </span>
            </Link>
            <Link href="/resources" className={isActive('/resources')}>
              Resources
            </Link>
            <Link href="/blog" className={isActive('/blog')}>
              Blog
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/mentors"
              className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Find a Mentor
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu (hidden by default) */}
        <div className="hidden">
          <div className="py-2 space-y-1">
            <Link href="/" className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
              Home
            </Link>
            <Link href="/mentors" className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
              Mentors
            </Link>
            <Link href="/resources" className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
              Resources
            </Link>
            <Link href="/blog" className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 