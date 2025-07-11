import React from 'react'

const Page = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-coffee text-white py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-6">
                            Instant Emergency Alerts
                        </h1>
                        <p className="text-xl mb-8 text-red-100">
                            When every second counts, our emergency alert system ensures help reaches you instantly. One-touch panic button, automatic threat detection, and immediate response coordination.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-red-900 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                                Activate Protection
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-900 transition-colors">
                                See How It Works
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Alert Overview */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                            Life-Saving Emergency Response
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-lg text-gray-700 mb-6">
                                    Our emergency alert system is designed for critical situations where immediate help is needed. With multiple activation methods and instant notification to emergency contacts, law enforcement, and medical services.
                                </p>
                                <p className="text-lg text-gray-700 mb-6">
                                    Whether facing a medical emergency, personal threat, or dangerous situation, our system ensures the right people are notified instantly with your exact location and situation details.
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
                                        <p className="text-red-700 font-semibold">Emergency Alert Active</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alert Types */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Multiple Alert Activation Methods
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="text-center p-6 bg-red-50 rounded-lg">
                            <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-red-600 text-2xl">👆</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Panic Button</h3>
                            <p className="text-gray-600">
                                One-touch emergency activation from your phone, smartwatch, or dedicated panic device. Instant alert with location.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-orange-50 rounded-lg">
                            <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-orange-600 text-2xl">🗣️</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Voice Activation</h3>
                            <p className="text-gray-600">
                                Hands-free emergency activation using voice commands. Works even when you can't reach your device.
                            </p>
                        </div>
                        <div className="text-center p-6 bg-yellow-50 rounded-lg">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-yellow-600 text-2xl">🤖</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Auto-Detection</h3>
                            <p className="text-gray-600">
                                AI-powered threat detection automatically triggers alerts based on unusual patterns or dangerous situations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Comprehensive Emergency Features
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-red-600 text-xl">📍</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-3">Instant Location Sharing</h3>
                            <p className="text-gray-600 text-sm">
                                Automatically shares your precise GPS coordinates with emergency contacts and responders.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-blue-600 text-xl">👥</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-3">Multi-Contact Alerts</h3>
                            <p className="text-gray-600 text-sm">
                                Simultaneously notifies family, friends, security team, and emergency services.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-green-600 text-xl">🎥</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-3">Live Audio/Video</h3>
                            <p className="text-gray-600 text-sm">
                                Streams live audio and video to emergency contacts for real-time situation assessment.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-purple-600 text-xl">🚑</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-3">Emergency Services</h3>
                            <p className="text-gray-600 text-sm">
                                Direct connection to 911, police, fire department, and medical emergency services.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-yellow-600 text-xl">💊</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-3">Medical Information</h3>
                            <p className="text-gray-600 text-sm">
                                Shares critical medical information, allergies, and emergency contacts with responders.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                <span className="text-indigo-600 text-xl">🔄</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-3">Follow-up Monitoring</h3>
                            <p className="text-gray-600 text-sm">
                                Continues monitoring and provides updates until the emergency is resolved.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Scenarios */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        When You Need Emergency Alerts
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                            <h3 className="text-lg font-semibold mb-3 text-red-900">Personal Safety</h3>
                            <p className="text-red-700 text-sm">
                                Threats, harassment, stalking, or feeling unsafe in any situation.
                            </p>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                            <h3 className="text-lg font-semibold mb-3 text-blue-900">Medical Emergency</h3>
                            <p className="text-blue-700 text-sm">
                                Heart attack, stroke, severe allergic reactions, or any medical crisis.
                            </p>
                        </div>
                        <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                            <h3 className="text-lg font-semibold mb-3 text-orange-900">Accidents</h3>
                            <p className="text-orange-700 text-sm">
                                Car accidents, falls, injuries, or being trapped in dangerous situations.
                            </p>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                            <h3 className="text-lg font-semibold mb-3 text-purple-900">Home Security</h3>
                            <p className="text-purple-700 text-sm">
                                Break-ins, intruders, fire, gas leaks, or other home emergencies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        How Emergency Alerts Work
                    </h2>
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                                    1
                                </div>
                                <h3 className="text-lg font-semibold mb-3">Alert Triggered</h3>
                                <p className="text-gray-600 text-sm">
                                    Emergency activated via panic button, voice command, or automatic detection.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                                    2
                                </div>
                                <h3 className="text-lg font-semibold mb-3">Location Captured</h3>
                                <p className="text-gray-600 text-sm">
                                    GPS coordinates, address, and surrounding area details are instantly captured.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                                    3
                                </div>
                                <h3 className="text-lg font-semibold mb-3">Contacts Notified</h3>
                                <p className="text-gray-600 text-sm">
                                    Emergency contacts, security team, and appropriate services are alerted simultaneously.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-red-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl">
                                    4
                                </div>
                                <h3 className="text-lg font-semibold mb-3">Help Dispatched</h3>
                                <p className="text-gray-600 text-sm">
                                    Emergency responders are dispatched while contacts coordinate immediate assistance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Response Times & Statistics */}
            <section className="py-16 bg-black text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Proven Emergency Response Performance
                    </h2>
                    <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
                        <div>
                            <div className="text-4xl font-bold text-vanilla mb-2">&lt;60s</div>
                            <p className="text-red-100">Average Alert Time</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-vanilla mb-2">99.9%</div>
                            <p className="text-red-100">Delivery Success Rate</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-vanilla mb-2">24/7</div>
                            <p className="text-red-100">Monitoring Coverage</p>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-vanilla mb-2">3m</div>
                            <p className="text-red-100">Location Accuracy</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mt-12">
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Emergency Capabilities</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <span className="text-vanilla mr-3">✓</span>
                                    <span>Instant 911 connection</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-vanilla mr-3">✓</span>
                                    <span>Police dispatch coordination</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-vanilla mr-3">✓</span>
                                    <span>Medical emergency response</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-vanilla mr-3">✓</span>
                                    <span>Fire department alerts</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-4">Advanced Features</h3>
                            <ul className="space-y-3">
                                <li className="flex items-center">
                                    <span className="text-vanilla mr-3">✓</span>
                                    <span>Silent alarm options</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-vanilla mr-3">✓</span>
                                    <span>False alarm protection</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-vanilla mr-3">✓</span>
                                    <span>Multi-language support</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-vanilla mr-3">✓</span>
                                    <span>Offline emergency backup</span>
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
                        Don't Wait for an Emergency
                    </h2>
                    <p className="text-xl mb-8 text-red-100 max-w-2xl mx-auto">
                        Protect yourself and your loved ones with our instant emergency alert system. When seconds matter, we ensure help is on the way.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-red-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-50 transition-colors">
                            Activate Emergency Protection
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-900 transition-colors">
                            Learn More
                        </button>
                    </div>
                    <p className="text-sm text-red-200 mt-4">
                        Instant activation • 24/7 monitoring • Professional emergency response
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Page