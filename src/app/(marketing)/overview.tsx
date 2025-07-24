import React from 'react'
import Image from 'next/image'

const Overview = () => {
    const stats = [
        {
            number: "24/7",
            label: "Emergency Response",
            description: "Round-the-clock safety monitoring"
        },
        {
            number: "< 30s",
            label: "Alert Response Time",
            description: "Lightning-fast emergency alerts"
        },
        {
            number: "99.9%",
            label: "Uptime Reliability",
            description: "Always there when you need us"
        },
        {
            number: "50K+",
            label: "Lives Protected",
            description: "Growing community of safety"
        }
    ]

    const values = [
        {
            icon: "🛡️",
            title: "Safety First",
            description: "Your security is our top priority. Every feature is designed with your protection in mind."
        },
        {
            icon: "🤝",
            title: "Community Driven",
            description: "Building stronger, safer communities through connected protection networks."
        },
        {
            icon: "⚡",
            title: "Instant Response",
            description: "When seconds matter, our technology ensures help arrives as fast as possible."
        },
        {
            icon: "🔒",
            title: "Privacy Protected",
            description: "Your data is encrypted and secure. We protect your privacy as much as your safety."
        }
    ]

    return (
        <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left Column - Story */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold font-wix-madefor-display text-coffee dark:text-vanilla">
                                Redifining personal safety standards.
                            </h3>
                            <div className="space-y-4 text-gray-600 dark:text-white font-urbanist leading-relaxed">
                                <p>
                                    Born from a simple yet powerful belief: everyone deserves to feel safe,
                                    no matter where they are or what they're doing. VIP was created by a team
                                    of safety experts, technologists, and everyday people who understood that
                                    traditional emergency systems weren't keeping up with modern life.
                                </p>
                                <p>
                                    We've reimagined personal safety from the ground up, creating an intelligent
                                    platform that learns, adapts, and responds to your unique safety needs.
                                    From late-night commutes to family adventures, VIP is your invisible guardian.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/why.png"
                                alt="VIP Team and Technology"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-8 -left-8 bg-white dark:bg-black rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-800">
                            <div className="text-center">
                                <div className="text-3xl font-bold font-wix-madefor-display text-coffee dark:text-vanilla mb-1">
                                    2019
                                </div>
                                <div className="text-sm text-gray-600 dark:text-white font-urbanist">
                                    Founded
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