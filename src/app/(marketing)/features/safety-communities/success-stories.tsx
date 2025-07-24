import React from 'react';

const SuccessStories = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Community Success Stories
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div>
            <div className="text-4xl font-bold text-vanilla mb-2">40%</div>
            <p className="text-vanilla">Reduction in Crime</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-vanilla mb-2">85%</div>
            <p className="text-vanilla">Neighbor Participation</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-vanilla mb-2">60%</div>
            <p className="text-vanilla">Faster Emergency Response</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mt-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Community Impact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-coffee mr-3">✓</span>
                <span>Reduced break-ins and theft</span>
              </li>
              <li className="flex items-center">
                <span className="text-vanilla mr-3">✓</span>
                <span>Improved emergency response times</span>
              </li>
              <li className="flex items-center">
                <span className="text-vanilla mr-3">✓</span>
                <span>Stronger neighborhood relationships</span>
              </li>
              <li className="flex items-center">
                <span className="text-vanilla mr-3">✓</span>
                <span>Increased property values</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Member Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-vanilla mr-3">✓</span>
                <span>24/7 community support network</span>
              </li>
              <li className="flex items-center">
                <span className="text-vanilla mr-3">✓</span>
                <span>Real-time safety notifications</span>
              </li>
              <li className="flex items-center">
                <span className="text-vanilla mr-3">✓</span>
                <span>Access to safety resources</span>
              </li>
              <li className="flex items-center">
                <span className="text-vanilla mr-3">✓</span>
                <span>Professional security integration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SuccessStories;
