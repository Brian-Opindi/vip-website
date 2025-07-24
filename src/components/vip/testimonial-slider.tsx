'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';

import { cn } from '@/lib/utils';

type Testimonial = {
  image: string;
  name: string;
  role: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    image: '/images/user 6.jpg',
    name: 'Dr. Evelyn S.',
    role: 'psychiatrist, New York City',
    text: 'VIP isn’t just an app. It’s a shift in how we care for ourselves and others. For people dealing with anxiety or trauma, having a clear emergency plan built into your phone makes a big difference. I believe it’ll help people feel more grounded in their daily lives.',
  },
  {
    image: '/images/user 4.jpg',
    name: 'Emily R.',
    role: 'Early Access Tester, Chicago',
    text: 'As a mother of two teenagers, I’ve always wished for a simple way to know they’re safe — and for them to reach me fast if anything ever goes wrong. When I first heard about VIP’s real-time alert system and geofencing, I knew this was something every parent needs. I can’t wait for the full launch.',
  },
  {
    image: '/images/user 2.jpg',
    name: 'Darryl W.',
    role: 'Father of 2, Charlotte, NC',
    text: 'VIP feels like the kind of app you hope you’ll never need — but will be grateful to have. I’ve pre-registered for my whole family. Even just the peace of mind it brings is worth it.',
  },
  {
    image: '/images/user 3.jpg',
    name: 'Leah M.',
    role: 'Program Lead, Global Aid Network',
    text: 'Working in remote areas comes with risks. VIP’s upcoming launch is something my entire team is watching closely. The ability to create geofenced danger zones and share alerts instantly could be a breakthrough for us and the communities we serve.',
  },
];

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlide(swiper.realIndex);
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);

    let tick = 0;
    progressRef.current = setInterval(() => {
      tick += 1;
      setProgress((tick / 50) * 100); // 30s = 300 ticks
      if (tick >= 300) clearInterval(progressRef.current!);
    }, 100);
  };

  return (
    <div className="w-full max-w-6xl mx-auto mb-10 px-4">
      <Swiper
        slidesPerView={1}
        loop
        autoplay={{ delay: 30000, disableOnInteraction: false }}
        modules={[Autoplay]}
        onSlideChange={handleSlideChange}
        onSwiper={swiper => handleSlideChange(swiper)}
      >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col md:flex-row items-start gap-8 transition-all duration-300 ease-in-out">
              {/* Image Column */}
              <div className="w-full md:w-[350px] h-[400px] overflow-hidden rounded-2xl relative shrink-0">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="transition-transform duration-300 hover:rotate-1 hover:scale-105 object-cover rounded-2xl"
                />
              </div>

              {/* Text Column */}
              <div className="bg-white dark:bg-black flex-1 h-[400px] flex flex-col justify-between rounded-3xl shadow-slate-200 dark:shadow-black p-8 overflow-hidden">
                <p className="text-neutral-800 dark:text-white text-2xl font-urbanist leading-relaxed mb-6">
                  “{t.text}”
                </p>
                <div className="flex flex-col gap-2">
                  <div>
                    <p className="text-coffee dark:text-vanilla font-bold font-urbanist text-base">
                      {t.name}
                    </p>
                    <p className="text-sm text-gray-400 font-urbanist">
                      {t.role}
                    </p>
                  </div>

                  <div className="flex justify-end mt-2 gap-1.5">
                    {testimonials.map((_, i) => (
                      <span
                        key={i}
                        className={cn(
                          'relative flex items-center rounded-full overflow-hidden transition-all',
                          currentSlide === i
                            ? 'bg-gray-300 dark:bg-neutral-700 w-6 h-1.5'
                            : 'bg-coffee dark:bg-vanilla w-1.5 h-1.5'
                        )}
                        style={{
                          width: currentSlide === i ? '24px' : '6px',
                          height: '6px',
                          transition: 'width 0.3s',
                        }}
                      >
                        {currentSlide === i ? (
                          <span
                            className="absolute left-0 top-0 h-full bg-coffee"
                            style={{
                              width: `${progress}%`,
                              borderRadius: '9999px',
                              transition: 'width 0.1s linear',
                            }}
                          />
                        ) : null}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
