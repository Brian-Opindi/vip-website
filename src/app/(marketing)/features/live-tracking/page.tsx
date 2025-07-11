import React from 'react'

const Page = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-coffee text-white py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-6 font-urbanist">
                            Real-Time Live Tracking
                        </h1>
                        <p className="text-sm mb-8 text-indigo-100 font-urbanist">
                            Know exactly where your loved ones are, every moment. Advanced GPS tracking with precision accuracy and instant updates for ultimate peace of mind.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-indigo-900 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                                Start Live Tracking
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-900 transition-colors">
                                View Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Live Tracking Overview */}
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
                                    Whether it's monitoring children on their way to school, elderly parents during daily activities, or ensuring personal safety during travel, our live tracking keeps you connected and informed.
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

            {/* Key Features */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Powerful Tracking Features
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-green-600 text-2xl">📍</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Real-Time Updates</h3>
                            <p className="text-gray-600">
                                Get location updates every 10 seconds with pinpoint accuracy. Never lose track of what matters most.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-blue-600 text-2xl">🛰️</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Multi-Signal Tracking</h3>
                            <p className="text-gray-600">
                                Combines GPS, cellular towers, and Wi-Fi signals for accurate positioning even indoors.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-purple-600 text-2xl">📱</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Mobile App Integration</h3>
                            <p className="text-gray-600">
                                View live locations on interactive maps with easy-to-use mobile and web applications.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-red-600 text-2xl">🚨</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Emergency Alerts</h3>
                            <p className="text-gray-600">
                                Instant panic button and automatic emergency detection with immediate location sharing.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-yellow-600 text-2xl">📊</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Location History</h3>
                            <p className="text-gray-600">
                                Access detailed location history and movement patterns with comprehensive reporting.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-indigo-600 text-2xl">🔋</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Battery Optimization</h3>
                            <p className="text-gray-600">
                                Smart power management ensures all-day tracking without draining device battery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Live Tracking Benefits */}
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
                                        Know your children arrived safely at school, activities, or friends' houses. Monitor elderly parents during daily routines.
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

            {/* How It Works */}
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
                                    Download our app and complete the simple setup process. Add family members to your tracking circle.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-coffee text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                                    2
                                </div>
                                <h3 className="text-lg font-semibold mb-3">Enable Tracking</h3>
                                <p className="text-gray-600 text-sm">
                                    Grant location permissions and configure tracking preferences for each family member.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-coffee text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                                    3
                                </div>
                                <h3 className="text-lg font-semibold mb-3">Monitor Live</h3>
                                <p className="text-gray-600 text-sm">
                                    View real-time locations on interactive maps with automatic updates every few seconds.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-coffee text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                                    4
                                </div>
                                <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
                                <p className="text-gray-600 text-sm">
                                    Receive notifications, access history, and maintain constant awareness of your family's safety.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
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

            {/* CTA Section */}
            <section className="py-16 bg-coffee text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Start Live Tracking Today
                    </h2>
                    <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
                        Join thousands of families who rely on our live tracking technology for peace of mind. Experience the difference real-time protection makes.
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
        </div>
    )
}

export default Page