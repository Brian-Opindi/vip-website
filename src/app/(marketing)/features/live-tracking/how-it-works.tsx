import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          How Live Tracking Works
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-coffee text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h3 className="text-lg font-semibold mb-3">Install & Setup</h3>
              <p className="text-gray-600 text-sm">
                Download our app and complete the simple setup process. Add
                family members to your tracking circle.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-coffee text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h3 className="text-lg font-semibold mb-3">Enable Tracking</h3>
              <p className="text-gray-600 text-sm">
                Grant location permissions and configure tracking preferences
                for each family member.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-coffee text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h3 className="text-lg font-semibold mb-3">Monitor Live</h3>
              <p className="text-gray-600 text-sm">
                View real-time locations on interactive maps with automatic
                updates every few seconds.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-coffee text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                4
              </div>
              <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
              <p className="text-gray-600 text-sm">
                Receive notifications, access history, and maintain constant
                awareness of your family&apos;s safety.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HowItWorks;
