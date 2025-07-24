import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const Cta = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div className="text-center mt-20">
        <div
          className="relative bg-cover bg-center bg-no-repeat rounded-3xl p-12 text-white overflow-hidden"
          style={{ backgroundImage: 'url(/images/vip.jpg)' }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/80 rounded-3xl"></div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold font-wix-madefor-display mb-4">
              Ready to Experience True Safety?
            </h3>
            <p className="text-md font-urbanist mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands who've already made the switch to smarter, more
              reliable protection.
            </p>
            <Button
              variant="vip"
              className="p-4 bg-white hover:bg-vanilla sm:p-6 font-wix-madefor-display text-sm sm:text-base"
            >
              <span
                className="shadow-lg bg-coffee flex items-center justify-center rounded-full dark:bg-white/20 w-6 h-6 sm:w-8 sm:h-8 -ml-2 sm:-ml-4 mr-1 sm:mr-2"
                aria-hidden="true"
              >
                <ArrowUpRight className="text-white" size={16} />
              </span>
              Join our waitlist!
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
