import React from 'react'

const Features = () => {
    const features = [
        {
            id: 1,
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            ),
            title: "One-Tap SOS",
            description: "Trigger alerts silently and instantly."
        },
        {
            id: 2,
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Geofencing",
            description: "Get notified when loved ones enter/leave safe zones."
        },
        {
            id: 3,
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Check-in Timers",
            description: "Time your commute, walk, or solo outings."
        },
        {
            id: 4,
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
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
                <h2 className="text-3xl dark:text-vanilla sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-wix-madefor-display">
                    Your Personal Safety Toolkit
                </h2>

                {/* Paragraph */}
                <p className="text-md text-gray-600 dark:text-white max-w-3xl mx-auto leading-relaxed font-wix-madefor-display">
                    VIP is more than just an emergency app — it&apos;s a complete personal safety platform, designed for the moments you hope never happen, and the peace of mind you always deserve.
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
                        <div className="w-16 h-16 bg-coffee/10 rounded-xl flex items-center justify-center text-coffee mb-6 group-hover:bg-coffee group-hover:text-vanilla transition-colors duration-300">
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