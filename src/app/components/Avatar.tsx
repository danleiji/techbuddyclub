'use client';

import Image from 'next/image';

const avatars = [
  {
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&q=80&crop=faces&fit=crop',
    alt: 'Tech professional 1'
  },
  {
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&crop=faces&fit=crop',
    alt: 'Tech professional 2'
  },
  {
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&q=80&crop=faces&fit=crop',
    alt: 'Tech professional 3'
  },
  {
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&q=80&crop=faces&fit=crop',
    alt: 'Tech professional 4'
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&q=80&crop=faces&fit=crop',
    alt: 'Tech professional 5'
  }
];

export default function AvatarGroup() {
  return (
    <div className="flex -space-x-3">
      {avatars.map((avatar, i) => (
        <div
          key={i}
          className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden"
        >
          <Image
            src={avatar.src}
            alt={avatar.alt}
            fill
            className="object-cover"
            sizes="32px"
          />
        </div>
      ))}
      <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center">
        <span className="text-xs text-indigo-600 font-medium">+</span>
      </div>
    </div>
  );
} 