import React from 'react'

const Why = () => {
    return (
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
    )
}
export default Why
