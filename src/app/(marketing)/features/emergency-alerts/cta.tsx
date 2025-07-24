import React from 'react';

const Cta = () => {
  return (
    <section className="py-16 bg-coffee text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Don&apos;t Wait for an Emergency
        </h2>
        <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
          Protect yourself and your loved ones with our instant emergency alert
          system. When seconds matter, we ensure help is on the way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-red-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-50 transition-colors">
            Activate Emergency Protection
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-900 transition-colors">
            Learn More
          </button>
        </div>
        <p className="text-sm text-red-200 mt-4">
          Instant activation • 24/7 monitoring • Professional emergency response
        </p>
      </div>
    </section>
  );
};
export default Cta;
