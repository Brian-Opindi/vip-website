'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handlePlayClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsPlaying(true);
      setIsLoading(false);
    }, 800);
  };

  const handleImageError = () => {
    setImageError(true);
    // In production, you might want to send this to an error tracking service
    // For development debugging, you can enable this:
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('Failed to load image: /images/vip2.gif');
    }
  };

  return (
    <section className="min-h-full flex flex-col items-center justify-center px-4 py-20 md:-mt-50">
      {/* Video Container */}
      <motion.div
        className="relative w-full max-w-4xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black border-4 border-white">
          <AnimatePresence mode="wait">
            {!isPlaying ? (
              <motion.div
                key="thumbnail"
                className="relative w-full h-full cursor-pointer group"
                onClick={handlePlayClick}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Video Thumbnail */}
                {!imageError ? (
                  <Image
                    src="/images/vip2.gif"
                    alt="VIP demo video thumbnail showing app interface"
                    fill
                    className="object-cover"
                    onError={handleImageError}
                    unoptimized
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-full flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <span className="text-white text-lg font-medium block mb-2">
                        Demo Video
                      </span>
                      <span className="text-gray-400 text-sm">
                        Click to watch VIP in action
                      </span>
                    </div>
                  </div>
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 group-hover:from-black/30 group-hover:to-black/10 transition-all duration-500"></div>

                {/* Centered Watch Demo Button with Loading State */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <AnimatePresence>
                    {!isLoading ? (
                      <motion.div
                        key="watch-demo-button"
                        className="relative"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Pulse Rings */}
                        <div className="absolute inset-0 bg-white/20 rounded-full animate-ping scale-150"></div>
                        <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse scale-125"></div>
                        <div className="absolute inset-0 bg-white/5 rounded-full animate-ping scale-200 delay-300"></div>

                        {/* Watch Demo Button */}
                        <div className="relative bg-white/15 backdrop-blur-md rounded-full px-8 py-4 border border-white/30 shadow-2xl">
                          <div className="flex items-center space-x-3">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                            <span className="text-white font-urbanist text-sm">
                              Click to watch demo
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="loading"
                        className="bg-white/15 backdrop-blur-md rounded-full px-8 py-4 border border-white/30 shadow-2xl"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span className="text-white font-semibold text-lg">
                            Loading...
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ) : (
              <motion.iframe
                key="video"
                className="w-full h-full"
                src="https://www.youtube.com/embed/ebxEydEvhTk?autoplay=1&rel=0&modestbranding=1"
                title="VIP Personal Safety App Demo - Emergency Response Features"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}
          </AnimatePresence>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-pink-400 to-orange-500 rounded-full blur-xl opacity-20 animate-pulse delay-1000"></div>
      </motion.div>
    </section>
  );
};

export default About;
