'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const cardData = [
  {
    id: 1,
    subtitle: 'Why VIP',
    title: 'VIP for Families',
    description:
      "Keep your loved ones safe and connected. With real-time tracking, panic alerts, and secure check-ins, families can stay informed about each member's safety. Parents receive instant updates and can monitor movements, giving peace of mind at all times.",
    image: '/images/why.png',
    alt: 'VIP for families',
  },
  {
    id: 2,
    subtitle: 'Why VIP',
    title: 'VIP for Late-Night Workers',
    description:
      'Whether commuting home or working odd hours, our 24/7 safety support has your back. Use safe route planning, emergency alerts, and our built-in panic button to instantly notify responders or your community when you feel unsafe—day or night.',
    image: '/images/why.png',
    alt: 'VIP for late night workers',
  },
  {
    id: 3,
    subtitle: 'Why VIP',
    title: 'VIP for Students',
    description:
      'Stay safe on and off campus. VIP helps students check in with guardians, find the safest paths to their dorms or classes, and connect with peers through community watch. Our discreet panic button ensures help is just a tap away in emergencies.',
    image: '/images/why.png',
    alt: 'VIP for students',
  },
  {
    id: 4,
    subtitle: 'Why VIP',
    title: 'VIP for Travelers',
    description:
      "Navigate unfamiliar places confidently. Our location-sharing, travel alerts, and emergency access features ensure you're never alone. Whether you're exploring or on a business trip, VIP keeps you connected to safety and support wherever you go.",
    image: '/images/why.png',
    alt: 'VIP for travelers',
  },
];

const Why = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize refs array
  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, cardData.length);
  }, []);

  useEffect(() => {
    // Register plugin and wait for component to be fully loaded
    gsap.registerPlugin(ScrollTrigger);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded || !containerRef.current) return;

    const container = containerRef.current;
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

    if (cards.length !== cardData.length) return;

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Set initial positions
    const initAnimation = () => {
      cards.forEach((card, index) => {
        gsap.set(card, {
          x: index === 0 ? '0%' : '120%', // First card at center, others off-screen right
          opacity: index === 0 ? 1 : 0,
          scale: 1,
          transformOrigin: 'center center',
        });
      });

      // Create horizontal sliding animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: `+=${cardData.length * 100}%`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Animate each card transition
      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          // Current card slides out to the left
          tl.to(
            card,
            {
              x: '-120%',
              opacity: 0,
              duration: 1,
              ease: 'power2.inOut',
            },
            index
          );

          // Next card slides in from the right
          tl.fromTo(
            cards[index + 1],
            {
              x: '120%',
              opacity: 0,
            },
            {
              x: '0%',
              opacity: 1,
              duration: 1,
              ease: 'power2.inOut',
            },
            index
          );
        }
      });

      // Refresh ScrollTrigger to recalculate positions
      ScrollTrigger.refresh();
    };

    // Small delay to ensure everything is rendered
    const timer = setTimeout(initAnimation, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isLoaded]);

  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardsRef.current[index] = el;
  };

  if (!isLoaded) {
    return <div className="h-screen" />; // Loading placeholder
  }

  return (
    <section className="relative bg-background" ref={containerRef}>
      <div className="relative w-full h-screen">
        <div className="sticky top-0 h-screen flex items-center justify-center px-4 overflow-hidden">
          <div className="relative w-full max-w-6xl h-[600px]">
            {cardData.map((cardInfo, index) => (
              <div
                key={cardInfo.id}
                ref={el => setCardRef(el, index)}
                className="absolute inset-0 w-full flex items-center justify-center"
              >
                <Card className="w-full rounded-3xl border-coffee dark:border-vanilla bg-white dark:bg-black shadow-2xl overflow-hidden">
                  <CardContent className="p-8 md:p-12 lg:p-20 bg-white dark:bg-black">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Left Column - Text Content */}
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <p className="text-sm font-medium font-wix-madefor-display text-accent-foreground tracking-wider">
                            {cardInfo.subtitle}
                          </p>
                          <h2 className="text-2xl font-wix-madefor-display md:text-4xl lg:text-5xl font-medium text-coffee dark:text-vanilla leading-tight">
                            {cardInfo.title}
                          </h2>
                          <p className="text-sm text-muted-foreground dark:text-white font-wix-madefor-display leading-relaxed">
                            {cardInfo.description}
                          </p>
                        </div>
                      </div>

                      {/* Right Column - Image */}
                      <div className="relative">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                          <Image
                            src={cardInfo.image}
                            alt={cardInfo.alt}
                            fill
                            className="object-cover h-full"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
