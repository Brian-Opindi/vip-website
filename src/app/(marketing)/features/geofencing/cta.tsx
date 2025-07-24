import React from 'react';

const Cta = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Enhance Your Family&apos;s Safety?
        </h2>
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Join thousands of families who trust our geofencing technology to keep
          their loved ones safe. Start your free trial today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
            Start Free 30-Day Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors">
            Contact Sales
          </button>
        </div>
        <p className="text-sm text-blue-200 mt-4">
          No credit card required • Cancel anytime • 24/7 support
        </p>
      </div>
    </section>
  );
};
export default Cta;
