import { useMemo } from 'react';

type NotionAvatarProps = {
  name: string;
  size?: number;
  className?: string;
};

const colors = [
  ['#FF6B6B', '#FF8787'], // Red
  ['#4D96FF', '#6BA6FF'], // Blue
  ['#51CF66', '#69DB7C'], // Green
  ['#FAB005', '#FFD43B'], // Yellow
  ['#BE4BDB', '#DA77F2'], // Purple
  ['#FF922B', '#FFA94D'], // Orange
];

export default function NotionAvatar({ name, size = 64, className = '' }: NotionAvatarProps) {
  const [backgroundColor, textColor] = useMemo(() => {
    const hash = name.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    return colors[Math.abs(hash) % colors.length];
  }, [name]);

  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className={`rounded-full flex items-center justify-center font-medium ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor,
        color: '#FFF',
        fontSize: size * 0.4,
        background: `linear-gradient(135deg, ${backgroundColor} 0%, ${textColor} 100%)`,
      }}
    >
      {initials}
    </div>
  );
} 