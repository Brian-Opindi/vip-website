import React from 'react'

const HowItWorks = () => {
    return (
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
    )
}
export default HowItWorks
