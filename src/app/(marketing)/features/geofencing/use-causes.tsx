import React from 'react'

const UseCauses = () => {
    return (
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
    )
}
export default UseCauses
