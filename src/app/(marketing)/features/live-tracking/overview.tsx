import React from 'react'

const Overview = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Advanced Live Tracking Technology
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg font-urbanist text-gray-700 mb-6">
                                Our live tracking system provides real-time location updates with military-grade precision. Using advanced GPS, cellular, and Wi-Fi positioning, we ensure you always know where your family members are.
                            </p>
                            <p className="text-lg font-urbanist text-gray-700 mb-6">
                                Whether it&apos;s monitoring children on their way to school, elderly parents during daily activities, or ensuring personal safety during travel, our live tracking keeps you connected and informed.
                            </p>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                                    <span className="text-sm text-gray-600">Live Updates</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                                    <span className="text-sm text-gray-600">GPS Precision</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                                    <span className="text-sm text-gray-600">Secure</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="w-full h-64 bg-gradient-to-br from-indigo-100 to-purple-200 rounded-lg flex items-center justify-center relative">
                                <div className="absolute top-4 left-4 bg-green-500 w-4 h-4 rounded-full animate-pulse"></div>
                                <div className="absolute top-8 right-6 bg-blue-500 w-3 h-3 rounded-full animate-pulse"></div>
                                <div className="absolute bottom-6 left-8 bg-purple-500 w-3 h-3 rounded-full animate-pulse"></div>
                                <div className="text-center">
                                    <div className="w-32 h-32 bg-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-white text-3xl">🗺️</span>
                                    </div>
                                    <p className="text-indigo-700 font-semibold">Live Location Map</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Overview