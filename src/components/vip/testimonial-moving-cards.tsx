"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useCallback } from "react";

export const TestimonialMovingCards = ({
                                         items,
                                         direction = "left",
                                         speed = "fast",
                                         pauseOnHover = true,
                                         className,
                                       }: {
  items: {
    quote: string;
    name: string;
    title: string;
    image?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  // Memoize addAnimation to avoid unnecessary re-creations
  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, scrollerRef, direction, speed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  const [start, setStart] = useState(false);

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
            "--animation-direction",
            "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
            "--animation-direction",
            "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
      <div
          ref={containerRef}
          className={cn(
              "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
              className,
          )}
      >
        <ul
            ref={scrollerRef}
            className={cn(
                "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
                start && "animate-scroll",
                pauseOnHover && "hover:[animation-play-state:paused]",
            )}
        >
          {items.map((item) => (
              <li
                  className="relative w-[280px] max-w-full shrink-0 rounded-2xl border border-b-0 border-0 bg-vanilla/40 px-8 py-10 md:w-[360px] md:py-12 min-h-[200px] md:min-h-[240px] dark:border-zinc-700 dark:bg-zinc-800"
                  key={item.name}
              >
                <blockquote className="h-full flex flex-col">
                  <div
                      aria-hidden="true"
                      className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                  ></div>

                  {/* Quote at the top */}
                  <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-900 dark:text-gray-100 flex-1 mb-6">
                    {item.quote}
                  </span>

                  {/* Horizontal line */}
                  <div className="w-full h-px bg-coffee/50 dark:bg-neutral-700 mb-4"></div>

                  {/* Name and title section fixed to bottom */}
                  <div className="relative z-20 flex flex-row items-center gap-3">
                    {/* Profile image */}
                    <div className="w-12 h-12 rounded-full bg-neutral-300 dark:bg-neutral-600 flex-shrink-0 overflow-hidden">
                      {item.image ? (
                          <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                          />
                      ) : (
                          <div className="w-full h-full flex items-center justify-center text-neutral-500 dark:text-neutral-400 font-semibold text-lg">
                            {item.name.charAt(0).toUpperCase()}
                          </div>
                      )}
                    </div>

                    {/* Name and title */}
                    <span className="flex flex-col gap-1">
                      <span className="text-sm leading-[1.6] font-bold text-neutral-500 dark:text-gray-400">
                        {item.name}
                      </span>
                      <span className="text-sm leading-[1.6] italic text-neutral-500 dark:text-gray-400">
                        {item.title}
                      </span>
                    </span>
                  </div>
                </blockquote>
              </li>
          ))}
        </ul>
      </div>
  );
};