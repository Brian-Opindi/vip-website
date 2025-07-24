import React from 'react';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: '📢',
      title: 'Real-Time Alerts',
      description:
        'Share and receive instant notifications about safety concerns, suspicious activities, or emergencies in your area.',
      bgColor: 'bg-vanilla',
      iconColor: 'text-coffee',
      hoverBgColor: 'group-hover:bg-coffee',
    },
    {
      id: 2,
      icon: '👥',
      title: 'Neighborhood Watch',
      description:
        'Organize and coordinate neighborhood watch groups with scheduling, communication, and patrol tracking tools.',
      bgColor: 'bg-teal-100',
      iconColor: 'text-teal-600',
      hoverBgColor: 'group-hover:bg-teal-600',
    },
    {
      id: 3,
      icon: '🗺️',
      title: 'Safety Mapping',
      description:
        'Interactive community maps showing safety incidents, well-lit areas, emergency services, and safe routes.',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600',
      hoverBgColor: 'group-hover:bg-green-600',
    },
    {
      id: 4,
      icon: '💬',
      title: 'Community Chat',
      description:
        'Secure messaging platform for neighbors to communicate, share information, and coordinate safety activities.',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
      hoverBgColor: 'group-hover:bg-blue-600',
    },
    {
      id: 5,
      icon: '📅',
      title: 'Safety Events',
      description:
        'Organize community safety meetings, training sessions, and emergency preparedness workshops.',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
      hoverBgColor: 'group-hover:bg-purple-600',
    },
    {
      id: 6,
      icon: '🏆',
      title: 'Recognition System',
      description:
        'Acknowledge active community members and celebrate safety achievements with badges and recognition.',
      bgColor: 'bg-orange-100',
      iconColor: 'text-orange-600',
      hoverBgColor: 'group-hover:bg-orange-600',
    },
  ];

  return (
    <section className="py-16 h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-urbanist text-center mb-12 text-coffee">
          Community Safety Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map(feature => (
            <div key={feature.id} className="text-center p-6 relative group">
              <div
                className={`w-16 h-16 ${feature.bgColor} ${feature.hoverBgColor} rounded-full mx-auto mb-4 flex items-center justify-center relative z-10 transition-all duration-500 ease-in-out group-hover:shadow-xl group-hover:shadow-black/20`}
              >
                <span
                  className={`${feature.iconColor} group-hover:text-white text-2xl transition-all duration-500 ease-in-out`}
                >
                  {feature.icon}
                </span>
              </div>
              <div className="hover:bg-white rounded-4xl p-10 pt-10 -mt-12 transition-all duration-1000 ease-in-out hover:shadow-3xl hover:scale-105">
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
  );
};

export default Features;
