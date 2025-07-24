'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !backgroundTextRef.current) return;

    // Background text parallax animation
    gsap.to(backgroundTextRef.current, {
      yPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden py-20"
    >
      {/* Background Text */}
      <div
        ref={backgroundTextRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] 2xl:text-[16rem] font-bold font-urbanist select-none text-center leading-tight">
            <span className="font-bold text-coffee/90">Stay Safe</span> <br />
            <span className="font-bold italic text-coffee/20">With VIP</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
