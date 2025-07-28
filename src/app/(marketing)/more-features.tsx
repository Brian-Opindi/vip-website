import React from 'react';

const MoreFeatures = () => {
  return (
    <section className="py-8 md:py-16 px-4 min-h-screen md:h-screen">
      <div className="max-w-6xl mx-auto h-full">
        {/* Mobile & Tablet: Stack vertically, Desktop: Horizontal layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 h-full space-y-8 lg:space-y-0">
          {/* Column 1 - Advanced Protection */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Icon Section */}
            <div className="relative mb-6 md:mb-8">
              <div className="bg-vanilla rounded-xl md:rounded-2xl p-6 md:p-8 relative">
                {/* Corner Circle Icon */}
                <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-10 h-10 md:w-12 md:h-12 bg-coffee rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white text-lg md:text-xl">🔒</span>
                </div>
                {/* Main Icon/GIF */}
                <div className="flex items-center justify-center h-24 md:h-32">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-coffee/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl md:text-4xl">🛡️</span>
                  </div>
                </div>
                <p className="text-center text-xs md:text-sm text-coffee/70 mt-3 md:mt-4">
                  Security First
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-3 md:space-y-4 text-center lg:text-center">
              <h3 className="text-xl md:text-2xl font-semibold font-wix-madefor-display text-coffee dark:text-vanilla">
                Advanced Protection
              </h3>
              <p className="text-gray-600 dark:text-white text-sm md:text-md font-urbanist leading-relaxed max-w-md mx-auto lg:max-w-none">
                Safety with real-time monitoring, instant alerts, and
                comprehensive protection protocols.
              </p>
            </div>
          </div>

          {/* Separator 1 - Only visible on desktop */}
          <div className="hidden lg:flex items-center">
            <div className="w-px h-150 bg-coffee/20"></div>
          </div>

          {/* Mobile/Tablet Separator */}
          <div className="lg:hidden w-full h-px bg-coffee/20 my-4"></div>

          {/* Column 2 - Smart Connectivity */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Content Section - Show first on mobile, second on desktop */}
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8 text-center lg:text-center order-2 lg:order-1">
              <h3 className="text-xl md:text-2xl font-semibold font-wix-madefor-display text-coffee dark:text-vanilla">
                Smart Connectivity
              </h3>
              <p className="text-gray-600 dark:text-white text-sm md:text-md font-urbanist leading-relaxed max-w-md mx-auto lg:max-w-none">
                Intelligent communication systems that keep everyone informed
                and coordinated.
              </p>
            </div>

            {/* Icon Section */}
            <div className="relative flex-1 order-1 lg:order-2">
              <div className="bg-teal-100 rounded-xl md:rounded-2xl p-6 md:p-8 relative h-full min-h-[140px] md:min-h-[180px]">
                {/* Corner Circle Icon */}
                <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-10 h-10 md:w-12 md:h-12 bg-teal-600 rounded-full flex items-center justify-center shadow-lg z-10">
                  <span className="text-white text-lg md:text-xl">📡</span>
                </div>
                {/* Main Icon/GIF */}
                <div className="flex items-center justify-center h-24 md:h-32">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-teal-600/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl md:text-4xl">🌐</span>
                  </div>
                </div>
                <p className="text-center text-xs md:text-sm text-teal-600/70 mt-3 md:mt-4">
                  Always Connected
                </p>
              </div>
            </div>
          </div>

          {/* Separator 2 - Only visible on desktop */}
          <div className="hidden lg:flex items-center">
            <div className="w-px h-150 bg-coffee/20"></div>
          </div>

          {/* Mobile/Tablet Separator */}
          <div className="lg:hidden w-full h-px bg-coffee/20 my-4"></div>

          {/* Column 3 - Response & Location Features */}
          <div className="flex-1 flex flex-col justify-center space-y-6 md:space-y-8">
            {/* Row 1 - Instant Response */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              {/* GIF Section */}
              <div className="flex-shrink-0 order-1 sm:order-1">
                <div className="bg-green-100 rounded-lg md:rounded-xl p-3 md:p-4 relative">
                  <div className="absolute -top-1.5 -left-1.5 md:-top-2 md:-left-2 w-6 h-6 md:w-8 md:h-8 bg-green-600 rounded-full flex items-center justify-center shadow-md z-10">
                    <span className="text-white text-xs md:text-sm">⚡</span>
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-green-600/10 rounded-md md:rounded-lg flex items-center justify-center">
                    <span className="text-xl md:text-2xl">🚀</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2 text-center sm:text-left order-2 sm:order-2">
                <h4 className="text-lg font-semibold font-urbanist text-coffee dark:text-vanilla">
                  Instant Response
                </h4>
                <p className="text-gray-600 dark:text-white font-urbanist text-sm leading-relaxed">
                  Lightning-fast emergency response with automated protocols
                  that activate within seconds of threat detection.
                </p>
              </div>
            </div>

            {/* Horizontal Separator */}
            <div className="w-full h-px bg-coffee/20"></div>

            {/* Row 2 - Precise Location */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6">
              {/* GIF Section */}
              <div className="flex-shrink-0 order-1 sm:order-1">
                <div className="bg-blue-100 rounded-lg md:rounded-xl p-3 md:p-4 relative">
                  <div className="absolute -top-1.5 -left-1.5 md:-top-2 md:-left-2 w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-md z-10">
                    <span className="text-white text-xs md:text-sm">🎯</span>
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600/10 rounded-md md:rounded-lg flex items-center justify-center">
                    <span className="text-xl md:text-2xl">📍</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2 text-center sm:text-left order-2 sm:order-2">
                <h4 className="text-lg font-semibold font-urbanist text-coffee dark:text-vanilla">
                  Precise Location
                </h4>
                <p className="text-gray-600 dark:text-white font-urbanist text-sm leading-relaxed">
                  Advanced GPS tracking with indoor positioning capabilities for
                  accurate location sharing when it matters most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreFeatures;
