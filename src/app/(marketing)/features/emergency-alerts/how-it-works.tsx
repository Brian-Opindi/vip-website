import React from 'react'

const HowItWorks = () => {
    return (
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
    )
}
export default HowItWorks
