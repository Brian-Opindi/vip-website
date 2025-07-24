'use client';

import React from 'react';
import Image from 'next/image';
import { FloatingDock } from '@/components/ui/floating-dock';
import { IconHome, IconUsers, IconHeart } from '@tabler/icons-react';

export function FloatingDockDemo() {
  const links = [
    {
      title: 'Home',
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '/',
    },
    {
      title: 'Community',
      icon: (
        <IconUsers className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '/community',
    },
    {
      title: 'NGO',
      icon: (
        <IconHeart className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: '/ngo',
    },
    {
      title: 'VIP AI',
      icon: (
        <div className="h-full w-full flex items-center justify-center">
          <Image
            src="/images/logos/VIP icon.png"
            width={20}
            height={20}
            alt="VIP AI Logo"
            className="object-contain"
            sizes="20px"
          />
        </div>
      ),
      href: '/ai',
    },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock items={links} />
    </div>
  );
}
