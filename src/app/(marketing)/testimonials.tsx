import React from 'react';
import TestimonialSlider from '@/components/vip/testimonial-slider';
import ClientTestimonials from '@/app/(marketing)/client-testimonials';

const Testimonials = () => {
  return (
    <section className="h-full pt-40 pb-20 bg-white flex flex-col">
      {/* Title and Subtitle */}
      <div className="max-w-6xl mx-auto w-full px-4 mb-16">
        <p className="text-coffee font-urbanist text-sm font-medium mb-2">
          TESTIMONIALS
        </p>
        <h2 className="text-4xl md:text-5xl font-wix-madefor-display text-neutral-900">
          Satisfaction isn’t one-sided. It’s about building solutions that truly
          work for all.
        </h2>
      </div>

      {/* Testimonials Content */}
      <div className="flex-1 flex flex-col items-center justify-center mt-20">
        <div className="flex-1 flex items-center justify-center">
          <TestimonialSlider />
        </div>
        <div className="flex-1 flex items-center justify-center -mt-30">
          <ClientTestimonials />
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
