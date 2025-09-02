'use client';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export function ProfileImage() {
  const { theme } = useTheme();
  return (
    <Image
      src={theme === 'light' ? '/images/profile-light.png' : '/images/profile-dark.png'}
      alt="t.jin_01"
      width={144}
      height={144}
      className="object-cover"
    />
  );
}
