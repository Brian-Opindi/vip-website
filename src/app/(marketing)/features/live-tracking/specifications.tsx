import React from 'react';

const Specifications = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Technical Excellence
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-vanilla mb-2">3m</div>
            <p className="text-indigo-100">Location Accuracy</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-vanilla mb-2">10s</div>
            <p className="text-indigo-100">Update Frequency</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-vanilla mb-2">99.9%</div>
            <p className="text-indigo-100">Uptime Guarantee</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mt-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Advanced Features</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-vanilla mr-3">✓</span>
                <span>Multi-satellite GPS constellation</span>
              </li>
              <li className="flex items-center">
                <span className="text-vanilla mr-3">✓</span>
                <span>Cellular tower triangulation</span>
              </li>
              <li className="flex items-center">
                <span className="text-vasnilla mr-3">✓</span>
                <span>Wi-Fi positioning system</span>
              </li>
              <li className="flex items-center">
                <span className="text-vanilla mr-3">✓</span>
                <span>Indoor location mapping</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Security & Privacy</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-vanilla mr-3">✓</span>
                <span>End-to-end encryption</span>
              </li>
              <li className="flex items-center">
                <span className="text-vanilla mr-3">✓</span>
                <span>GDPR compliant data handling</span>
              </li>
              <li className="flex items-center">
                <span className="text-vanilla mr-3">✓</span>
                <span>Secure cloud infrastructure</span>
              </li>
              <li className="flex items-center">
                <span className="text-vanilla mr-3">✓</span>
                <span>User-controlled data sharing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Specifications;
