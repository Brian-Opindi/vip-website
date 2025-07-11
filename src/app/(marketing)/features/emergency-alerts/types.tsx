import React from 'react'

const Types = () => {
    return (
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
                            Hands-free emergency activation using voice commands. Works even when you can&apos;t reach your device.
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
    )
}
export default Types