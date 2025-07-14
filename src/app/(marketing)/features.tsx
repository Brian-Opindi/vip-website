import React from 'react'

const Features = () => {
    const features = [
        {
            id: 1,
            icon: "📢",
            title: "One-Tap SOS",
            description: "Trigger alerts silently and instantly.",
            bgColor: "bg-vanilla",
            iconColor: "text-coffee",
            hoverBgColor: "group-hover:bg-coffee"
        },
        {
            id: 2,
            icon: "👥",
            title: "Geofencing",
            description: "Get notified when loved ones enter/leave safe zones.",
            bgColor: "bg-teal-100",
            iconColor: "text-teal-600",
            hoverBgColor: "group-hover:bg-teal-600"
        },
        {
            id: 3,
            icon: "🗺️",
            title: "Check-in Timers",
            description: "Time your commute, walk, or solo outings.",
            bgColor: "bg-green-100",
            iconColor: "text-green-600",
            hoverBgColor: "group-hover:bg-green-600"
        },
        {
            id: 4,
            icon: "💬",
            title: "Trusted Circles",
            description: "Choose who gets notified — friends, parents, partners.",
            bgColor: "bg-blue-100",
            iconColor: "text-blue-600",
            hoverBgColor: "group-hover:bg-blue-600"
        },
    ]

    return (
        <section className="py-16 h-full">
            <div className="container mx-auto px-6">
                <h2 className="text-5xl font-urbanist text-center mb-12 text-coffee">
                    Community Safety Features
                </h2>
                <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {features.map((feature) => (
                        <div key={feature.id} className="text-center p-2 relative group">
                            <div className={`w-16 h-16 ${feature.bgColor} ${feature.hoverBgColor} rounded-full mx-auto mb-4 flex items-center justify-center relative z-10 transition-all duration-500 ease-in-out group-hover:shadow-xl group-hover:shadow-black/20`}>
                                <span className={`${feature.iconColor} group-hover:text-white text-2xl transition-all duration-500 ease-in-out`}>{feature.icon}</span>
                            </div>
                            <div className="hover:bg-white bg-white rounded-2xl p-10 pt-10 -mt-12 transition-all duration-1000 ease-in-out hover:shadow-3xl hover:scale-105">
                                <h3 className="text-xl mt-5 font-semibold font-urbanist text-coffee mb-3 transition-all duration-300 ease-in-out hover:text-opacity-80">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-md font-urbanist transition-all duration-300 ease-in-out hover:text-gray-800">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features