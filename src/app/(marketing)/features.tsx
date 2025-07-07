import React from 'react'

const Features = () => {
    const features = [
        {
            id: 1,
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "One-Tap SOS",
            description: "Trigger alerts silently and instantly."
        },
        {
            id: 2,
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Geofencing",
            description: "Get notified when loved ones enter/leave safe zones."
        },
        {
            id: 3,
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
            ),
            title: "Check-in Timers",
            description: "Time your commute, walk, or solo outings."
        },
        {
            id: 4,
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            title: "Trusted Circles",
            description: "Choose who gets notified — friends, parents, partners."
        },
    ]

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto h-full mb-20">
            <div className="text-center mb-16">
                {/* Title */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-urbanist">
                    Your Personal Safety Toolkit
                </h2>

                {/* Paragraph */}
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-urbanist">
                    VIP is more than just an emergency app — it's a complete personal safety platform, designed for the moments you hope never happen, and the peace of mind you always deserve.
                </p>
            </div>

            {/* Features Grid - 4 top, 3 bottom */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature) => (
                    <div
                        key={feature.id}
                        className="group cursor-pointer p-8 rounded-2xl border-0 hover:bg-vanilla/20 border-gray-200 hover:border-coffee hover:shadow-lg hover:transform hover:-translate-y-2 transition-all duration-500 bg-white hover:border-1"
                    >
                        {/* Icon */}
                        <div className="w-16 h-16 bg-coffee/10 rounded-xl flex items-center justify-center text-coffee mb-6 group-hover:bg-coffee transition-colors duration-300">
                            {feature.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-coffee mb-3 font-urbanist">
                            {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-md leading-relaxed font-urbanist">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Features