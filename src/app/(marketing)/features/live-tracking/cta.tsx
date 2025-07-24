import React from 'react';

const Cta = () => {
  return (
    <section className="py-16 bg-coffee text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Start Live Tracking Today</h2>
        <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
          Join thousands of families who rely on our live tracking technology
          for peace of mind. Experience the difference real-time protection
          makes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-indigo-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-indigo-900 transition-colors">
            Schedule Demo
          </button>
        </div>
        <p className="text-sm text-indigo-200 mt-4">
          30-day free trial • No setup fees • Cancel anytime
        </p>
      </div>
    </section>
  );
};
export default Cta;
