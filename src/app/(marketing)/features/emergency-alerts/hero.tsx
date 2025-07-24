import React from 'react';
import { NavMenu } from '@/app/(marketing)/navigation-menu';

const Hero = () => {
  return (
    <section className="bg-black text-white py-20 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/vip2.gif')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="absolute top-0 left-0 right-0 z-10 mx-auto max-w-6xl flex justify-center">
        <NavMenu />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-wix-madefor-display mb-10 mt-10">
            Instant Emergency Alerts
          </h1>
          <p className="text-md mb-8 text-white font-wix-madefor-display">
            When every second counts, our emergency alert system ensures help
            reaches you instantly. One-touch panic button, automatic threat
            detection, and immediate response coordination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
