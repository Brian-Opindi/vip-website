import React from 'react'
import Footer from "@/app/(marketing)/footer";

const Geofencing = () => {
    return (
        <>
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-coffee text-white py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl font-bold mb-6 font-wix-madefor-display">
                            Advanced Geofencing Protection
                        </h1>
                        <p className="text-sm mb-8 text-white font-wix-madefor-display">
                            Create virtual boundaries that keep you safe. Get instant alerts when you or your loved ones enter or leave designated safe zones.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                                Start Free Trial
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                                Watch Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is Geofencing Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-urbanist font-bold text-center mb-12 text-gray-900">
                            What is Geofencing?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-lg font-urbanist text-gray-700 mb-6">
                                    Geofencing is a location-based technology that creates virtual boundaries around real-world geographic areas. When a device enters or exits these predefined zones, automated actions are triggered.
                                </p>
                                <p className="text-lg font-urbanist text-gray-700">
                                    For personal protection, this means instant notifications when family members arrive safely at school, work, or home, or alerts when someone ventures into potentially unsafe areas.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-lg">
                                <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-32 h-32 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-white text-2xl">📍</span>
                                        </div>
                                        <p className="text-blue-700 font-semibold">Virtual Boundary</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-urbanist font-bold text-center mb-12 text-gray-900">
                        Powerful Protection Features
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-green-600 text-2xl">🏠</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Safe Zone Alerts</h3>
                            <p className="text-gray-600">
                                Get notified when family members safely arrive at home, school, or work. Peace of mind with every arrival.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-red-600 text-2xl">⚠️</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Danger Zone Warnings</h3>
                            <p className="text-gray-600">
                                Immediate alerts when someone enters potentially unsafe areas or restricted zones.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-blue-600 text-2xl">📱</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Real-time Notifications</h3>
                            <p className="text-gray-600">
                                Instant push notifications, SMS, and email alerts ensure you're always informed.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-purple-600 text-2xl">🕒</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Time-based Rules</h3>
                            <p className="text-gray-600">
                                Set different geofence rules for different times of day or days of the week.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-yellow-600 text-2xl">👥</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Family Sharing</h3>
                            <p className="text-gray-600">
                                Share geofences with family members and receive updates about each other's safety.
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-indigo-600 text-2xl">🔒</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Privacy Protected</h3>
                            <p className="text-gray-600">
                                Your location data is encrypted and secure. You control who sees what information.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Use Cases Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Perfect for Every Protection Need
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-3 text-blue-900">Family Safety</h3>
                            <p className="text-gray-600 text-sm">
                                Monitor children's safe arrival at school and activities. Get alerts if they venture into unsafe areas.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-3 text-blue-900">Elderly Care</h3>
                            <p className="text-gray-600 text-sm">
                                Ensure elderly family members stay within safe areas and get help if they wander.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-3 text-blue-900">Personal Security</h3>
                            <p className="text-gray-600 text-sm">
                                Create safe zones around your daily routes and get alerts about potential security risks.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold mb-3 text-blue-900">Travel Safety</h3>
                            <p className="text-gray-600 text-sm">
                                Set up temporary geofences when traveling to unfamiliar areas for added protection.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        How It Works
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-coffee text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg">
                                    1
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Set Up Zones</h3>
                                <p className="text-gray-600">
                                    Draw virtual boundaries around important locations like home, school, work, or areas to avoid.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-coffee text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg">
                                    2
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Configure Alerts</h3>
                                <p className="text-gray-600">
                                    Choose who gets notified and how when someone enters or leaves your geofenced areas.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-lg">
                                    3
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Stay Protected</h3>
                                <p className="text-gray-600">
                                    Receive instant notifications and maintain peace of mind knowing your loved ones are safe.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-coffee text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Why Choose Our Geofencing Protection?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        <div>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-blue-300 mr-3">✓</span>
                                    <span>Military-grade encryption for all location data</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-300 mr-3">✓</span>
                                    <span>Battery-optimized tracking technology</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-300 mr-3">✓</span>
                                    <span>Works offline with cached geofence data</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-300 mr-3">✓</span>
                                    <span>24/7 monitoring and support</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-blue-300 mr-3">✓</span>
                                    <span>Customizable alert preferences</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-300 mr-3">✓</span>
                                    <span>Integration with emergency services</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-300 mr-3">✓</span>
                                    <span>Historical location reporting</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-300 mr-3">✓</span>
                                    <span>Multi-platform compatibility</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-black text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Ready to Enhance Your Family's Safety?
                    </h2>
                    <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                        Join thousands of families who trust our geofencing technology to keep their loved ones safe. Start your free trial today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors">
                            Start Free 30-Day Trial
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors">
                            Contact Sales
                        </button>
                    </div>
                    <p className="text-sm text-blue-200 mt-4">
                        No credit card required • Cancel anytime • 24/7 support
                    </p>
                </div>
            </section>
        </div>
        <Footer />
            </>
    )
}

export default Geofencing