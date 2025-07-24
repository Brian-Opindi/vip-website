'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    // Set initial position
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(cursorDot, { xPercent: -50, yPercent: -50 });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Animate main cursor with slower elastic easing for slow motion effect
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 5.0, // Increased from 0.6 to 1.2 for slower movement
        ease: 'elastic.out(1, 0.3)',
      });

      // Animate cursor dot with slower, smoother movement
      gsap.to(cursorDot, {
        x: clientX,
        y: clientY,
        duration: 1, // Increased from 0.1 to 0.4 for delayed effect
        ease: 'power2.out',
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
        ease: 'back.out(1.7)',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: 'back.out(1.7)',
      });
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Main elastic cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 h-[20px] w-[20px] bg-white/0 backdrop-blur-sm rounded-full z-50 pointer-events-none border border-coffee dark:border-vanilla"
        style={{ mixBlendMode: 'difference' }}
      />

      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 h-[8px] w-[8px] bg-white rounded-full z-50 pointer-events-none"
      />
    </>
  );
};

export default Cursor;
