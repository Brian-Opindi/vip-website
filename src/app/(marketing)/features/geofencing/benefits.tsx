import React from 'react'

const Benefits = () => {
    const benefits = [
        {
            id: 1,
            icon: "🛡️",
            title: "Military-grade encryption for all location data",
            description: "More eyes and ears in the neighborhood mean faster detection and response to potential threats or emergencies.",
            bgColor: "bg-blue-100",
            iconColor: "text-blue-600",
            hoverBgColor: "group-hover:bg-coffee"
        },
        {
            id: 2,
            icon: "🤝",
            title: "Battery-optimized tracking technology",
            description: "Build meaningful relationships with neighbors and create a sense of community and mutual support.",
            bgColor: "bg-teal-100",
            iconColor: "text-teal-600",
            hoverBgColor: "group-hover:bg-teal-600"
        },
        {
            id: 3,
            icon: "📈",
            title: "Works offline with cached geofence data",
            description: "Safe, well-connected communities typically see increased property values and neighborhood desirability.",
            bgColor: "bg-green-100",
            iconColor: "text-green-600",
            hoverBgColor: "group-hover:bg-green-600"
        },
        {
            id: 4,
            icon: "⚡",
            title: "24/7 monitoring and support",
            description: "Community members can respond to situations immediately while emergency services are en route.",
            bgColor: "bg-blue-100",
            iconColor: "text-blue-600",
            hoverBgColor: "group-hover:bg-blue-600"
        },
        {
            id: 5,
            icon: "🎓",
            title: "Customizable alert preferences",
            description: "Learn from neighbors' experiences and participate in safety training and awareness programs.",
            bgColor: "bg-purple-100",
            iconColor: "text-purple-600",
            hoverBgColor: "group-hover:bg-purple-600"
        },
        {
            id: 6,
            icon: "🌟",
            title: "Integration with emergency services",
            description: "Knowing your community is actively looking out for each other provides invaluable peace of mind.",
            bgColor: "bg-orange-100",
            iconColor: "text-orange-600",
            hoverBgColor: "group-hover:bg-orange-600"
        },
        {
            id: 7,
            icon: "🎓",
            title: "Historical location reporting",
            description: "Learn from neighbors' experiences and participate in safety training and awareness programs.",
            bgColor: "bg-purple-100",
            iconColor: "text-purple-600",
            hoverBgColor: "group-hover:bg-purple-600"
        },
        {
            id: 8,
            icon: "🌟",
            title: "Multi-platform compatibility",
            description: "Knowing your community is actively looking out for each other provides invaluable peace of mind.",
            bgColor: "bg-orange-100",
            iconColor: "text-orange-600",
            hoverBgColor: "group-hover:bg-orange-600"
        }
    ]

    // Split benefits into two columns
    const leftColumnBenefits = benefits.slice(0, 4)
    const rightColumnBenefits = benefits.slice(4, 8)

    const BenefitItem = ({ benefit }: { benefit: typeof benefits[0] }) => (
        <div className="flex items-start group cursor-pointer">
            <div className={`w-12 h-12 ${benefit.bgColor} ${benefit.hoverBgColor} rounded-lg flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-500 ease-in-out group-hover:shadow-xl group-hover:shadow-black/20 group-hover:scale-110`}>
                <span className={`${benefit.iconColor} group-hover:text-white text-xl transition-all duration-500 ease-in-out`}>
                    {benefit.icon}
                </span>
            </div>
            <div className="transition-all duration-300 ease-in-out group-hover:transform group-hover:translate-x-2">
                <h3 className="text-lg font-semibold mb-2 font-urbanist text-coffee transition-all duration-300 ease-in-out group-hover:text-opacity-90">
                    {benefit.title}
                </h3>
                <p className="text-gray-600 font-urbanist transition-all duration-300 ease-in-out group-hover:text-gray-800">
                    {benefit.description}
                </p>
            </div>
        </div>
    )

    return (
        <section className="py-16 bg-white h-full m-20 rounded-3xl">
            <div className="container mx-auto max-w-6xl px-6">
                <h2 className="text-3xl font-bold font-urbanist text-center mb-12 text-black">
                    Why our Geofencing Features are the Best for You?
                </h2>
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <div className="space-y-8">
                        {leftColumnBenefits.map((benefit) => (
                            <BenefitItem key={benefit.id} benefit={benefit} />
                        ))}
                    </div>
                    <div className="space-y-8">
                        {rightColumnBenefits.map((benefit) => (
                            <BenefitItem key={benefit.id} benefit={benefit} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Benefits
