import React from 'react'

const Overview = () => {
    return (
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
    )
}
export default Overview
