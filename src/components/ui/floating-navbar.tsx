'use client';

import React, { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'motion/react';
import { cn } from '@/lib/utils';

const WavyText = ({
  text,
  isHovered,
  isActive,
}: {
  text: string;
  isHovered: boolean;
  isActive: boolean;
}) => {
  return (
    <span className="relative">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          animate={
            isHovered
              ? {
                  y: [0, -8, 0],
                  transition: {
                    duration: 0.6,
                    delay: index * 0.05,
                    ease: 'easeInOut',
                  },
                }
              : isActive
                ? {
                    y: [0, -2, 0],
                    transition: {
                      duration: 1.2,
                      delay: index * 0.03,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      repeatDelay: 2,
                    },
                  }
                : { y: 0 }
          }
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Show/hide navbar based on scroll position
  useMotionValueEvent(scrollYProgress, 'change', current => {
    if (typeof current === 'number') {
      if (current > 0.05) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  // Update activeIdx based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      let foundIdx: number | null = null;
      for (let i = 0; i < navItems.length; i++) {
        const sectionId = navItems[i].link.replace(/^#/, '');
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Section is considered active if its top is above 120px from top and bottom is below 120px
          if (rect.top <= 120 && rect.bottom > 120) {
            foundIdx = i;
            break;
          }
        }
      }
      setActiveIdx(foundIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Smooth scroll to section and update activeIdx
  const handleNavClick = (
    idx: number,
    link: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setActiveIdx(idx);
    const sectionId = link.replace(/^#/, '');
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -80,
            scale: 0.7,
          }}
          transition={{
            type: 'spring',
            stiffness: 180,
            damping: 24,
            mass: 1.1,
          }}
          className={cn(
            'flex justify-center items-center max-w-fit fixed top-10 inset-x-0 mx-auto border-0 dark:border-white/[0.2] rounded-2xl dark:bg-coffee/60 bg-black/50 backdrop-blur-sm shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 py-2 space-x-0',
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              onClick={e => handleNavClick(idx, navItem.link, e)}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={cn(
                'relative font-urbanist font-semibold flex items-center justify-center px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer overflow-hidden',
                activeIdx === idx
                  ? 'text-coffee'
                  : 'dark:text-neutral-50 text-white',
                'dark:hover:text-vanilla hover:text-vanilla'
              )}
              style={{ minWidth: 80, textAlign: 'center' }}
            >
              {/* Animated background for active item */}
              {activeIdx === idx && (
                <motion.div
                  layoutId="navbar-active-bg"
                  className="absolute inset-0 rounded-md bg-vanilla z-0"
                  transition={{
                    type: 'spring',
                    stiffness: 180,
                    damping: 24,
                    mass: 1.1,
                  }}
                />
              )}
              <span className="relative z-10 block sm:hidden">
                {navItem.icon}
              </span>
              <span className="relative z-10 hidden sm:block text-sm">
                <WavyText
                  text={navItem.name}
                  isHovered={hoveredIdx === idx}
                  isActive={activeIdx === idx}
                />
              </span>
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
