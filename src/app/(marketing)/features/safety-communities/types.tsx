import React from 'react';

const Types = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Different Types of Safety Communities
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-vanilla rounded-lg flex items-center justify-center mb-4">
              <span className="text-coffee text-xl">🏘️</span>
            </div>
            <h3 className="text-lg font-semibold mb-3">
              Residential Neighborhoods
            </h3>
            <p className="text-gray-600 text-sm">
              Traditional neighborhood communities focused on home security,
              family safety, and local crime prevention.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-blue-600 text-xl">🏢</span>
            </div>
            <h3 className="text-lg font-semibold mb-3">Apartment Complexes</h3>
            <p className="text-gray-600 text-sm">
              Multi-unit housing communities with shared security concerns and
              building-specific safety protocols.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-purple-600 text-xl">🏫</span>
            </div>
            <h3 className="text-lg font-semibold mb-3">School Districts</h3>
            <p className="text-gray-600 text-sm">
              Parent and community networks focused on child safety, school
              security, and safe routes to school.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-orange-600 text-xl">🏪</span>
            </div>
            <h3 className="text-lg font-semibold mb-3">Business Districts</h3>
            <p className="text-gray-600 text-sm">
              Commercial area networks for business owners and employees to
              share security information and coordinate safety measures.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 text-xl">🌳</span>
            </div>
            <h3 className="text-lg font-semibold mb-3">Rural Communities</h3>
            <p className="text-gray-600 text-sm">
              Wide-area rural networks covering larger geographic regions with
              unique safety challenges and resources.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-red-600 text-xl">🚨</span>
            </div>
            <h3 className="text-lg font-semibold mb-3">Emergency Response</h3>
            <p className="text-gray-600 text-sm">
              Specialized communities focused on emergency preparedness,
              disaster response, and crisis coordination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Types;
