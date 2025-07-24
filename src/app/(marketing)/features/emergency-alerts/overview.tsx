import React from 'react';

const Overview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Life-Saving Emergency Response
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Our emergency alert system is designed for critical situations
                where immediate help is needed. With multiple activation methods
                and instant notification to emergency contacts, law enforcement,
                and medical services.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether facing a medical emergency, personal threat, or
                dangerous situation, our system ensures the right people are
                notified instantly with your exact location and situation
                details.
              </p>
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-red-800 font-semibold">
                  Average Emergency Response Time: Under 60 seconds
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-full h-64 bg-gradient-to-br from-red-100 to-orange-200 rounded-lg flex items-center justify-center relative">
                <div className="absolute top-4 right-4 w-6 h-6 bg-red-500 rounded-full animate-ping"></div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-red-500 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                    <span className="text-white text-4xl">🚨</span>
                  </div>
                  <p className="text-red-700 font-semibold">
                    Emergency Alert Active
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Overview;
