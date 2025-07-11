import React from 'react'

const Why = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                    Why Live Tracking Matters
                </h2>
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                <span className="text-green-600 text-xl">👨‍👩‍👧‍👦</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Family Peace of Mind</h3>
                                <p className="text-gray-600">
                                    Know your children arrived safely at school, activities, or friends&apos; houses. Monitor elderly parents during daily routines.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                <span className="text-blue-600 text-xl">🚗</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Travel Safety</h3>
                                <p className="text-gray-600">
                                    Track family members during road trips, business travel, or when exploring new areas for enhanced security.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                <span className="text-purple-600 text-xl">⚡</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Emergency Response</h3>
                                <p className="text-gray-600">
                                    Immediate location sharing during emergencies enables faster response times from family and emergency services.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                <span className="text-red-600 text-xl">🎯</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Precision Accuracy</h3>
                                <p className="text-gray-600">
                                    Military-grade GPS technology provides location accuracy within 3 meters, even in challenging environments.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                <span className="text-yellow-600 text-xl">🔒</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Privacy Protected</h3>
                                <p className="text-gray-600">
                                    End-to-end encryption ensures location data remains private and secure. You control who sees what information.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                <span className="text-indigo-600 text-xl">📈</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Detailed Insights</h3>
                                <p className="text-gray-600">
                                    Comprehensive reports and analytics help you understand movement patterns and optimize safety routines.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Why