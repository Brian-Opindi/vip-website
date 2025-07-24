'use client';
import React from 'react';
import { FloatingNav } from '@/components/ui/floating-navbar';
import {
  IconMessage,
  IconUser,
  IconSettings,
  IconCurrencyDollar,
} from '@tabler/icons-react';

export function FloatingNavDemo() {
  const navItems = [
    {
      name: 'Features',
      link: '/features',
      icon: (
        <IconSettings className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: 'Learn',
      link: '/learn',
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: 'Solutions',
      link: '/solutions',
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Pricing',
      link: '/pricing',
      icon: (
        <IconCurrencyDollar className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
