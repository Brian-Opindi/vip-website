import React from 'react'

const Overview = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold font-urbanist text-center mb-12 text-gray-900">
                        Building Safer Communities Together
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg font-urbanist text-gray-700 mb-6">
                                Safety Communities brings neighbors together through technology to create a network of protection and awareness. Share real-time safety information, coordinate neighborhood watch activities, and build lasting connections with those around you.
                            </p>
                            <p className="text-lg font-urbanist text-gray-700 mb-6">
                                From reporting suspicious activities to organizing community safety events, our platform empowers residents to take an active role in keeping their neighborhoods secure and welcoming.
                            </p>
                            <div className="bg-vanilla/20 border-l-4 border-coffee p-4 rounded">
                                <p className="text-coffee font-urbanist font-semibold">
                                    Communities using our platform report 40% fewer security incidents
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg">
                            <div className="w-full h-64 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-lg flex items-center justify-center relative">
                                <div className="absolute top-4 left-4 w-4 h-4 bg-emerald-500 rounded-full"></div>
                                <div className="absolute top-8 right-6 w-3 h-3 bg-teal-500 rounded-full"></div>
                                <div className="absolute bottom-6 left-8 w-3 h-3 bg-emerald-600 rounded-full"></div>
                                <div className="absolute bottom-4 right-4 w-4 h-4 bg-teal-600 rounded-full"></div>
                                <div className="text-center">
                                    <div className="w-32 h-32 bg-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                                        <span className="text-white text-3xl">🏘️</span>
                                    </div>
                                    <p className="text-coffee font-semibold">Connected Community</p>
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
