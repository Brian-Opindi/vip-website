import React from 'react'

const Statistics = () => {
    return (
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
    )
}
export default Statistics
