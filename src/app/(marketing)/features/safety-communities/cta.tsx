import React from 'react';

const Cta = () => {
  return (
    <section className="py-16 bg-coffee text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Build a Safer Community?
        </h2>
        <p className="text-xl mb-8 text-vanilla max-w-2xl mx-auto">
          Join thousands of neighbors who are already making their communities
          safer. Connect, share, and protect together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-coffee px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-colors">
            Join Your Community
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-coffee transition-colors">
            Start New Community
          </button>
        </div>
        <p className="text-sm text-vanilla mt-4">
          Free to join • Verified neighbors only • Privacy protected
        </p>
      </div>
    </section>
  );
};
export default Cta;
