import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      number: '1',
      title: 'Join Your Area',
      description:
        'Find and join your neighborhood community or create a new one for your area.',
      bgColor: 'bg-coffee',
      hoverBgColor: 'group-hover:bg-vanilla',
      textColor: 'text-white',
      hoverTextColor: 'group-hover:text-coffee',
    },
    {
      id: 2,
      number: '2',
      title: 'Connect & Verify',
      description:
        'Verify your address and connect with verified neighbors in your immediate area.',
      bgColor: 'bg-coffee',
      hoverBgColor: 'group-hover:bg-vanilla',
      textColor: 'text-white',
      hoverTextColor: 'group-hover:text-coffee',
    },
    {
      id: 3,
      number: '3',
      title: 'Share & Participate',
      description:
        'Share safety information, participate in discussions, and join community activities.',
      bgColor: 'bg-coffee',
      hoverBgColor: 'group-hover:bg-vanilla',
      textColor: 'text-white',
      hoverTextColor: 'group-hover:text-coffee',
    },
    {
      id: 4,
      number: '4',
      title: 'Stay Safe Together',
      description:
        'Enjoy the benefits of a connected, safer community with ongoing support and protection.',
      bgColor: 'bg-coffee',
      hoverBgColor: 'group-hover:bg-vanilla',
      textColor: 'text-white',
      hoverTextColor: 'group-hover:text-coffee',
    },
  ];

  const StepItem = ({ step }: { step: (typeof steps)[0] }) => (
    <div className="text-center group cursor-pointer">
      <div
        className={`w-16 h-16 ${step.bgColor} ${step.hoverBgColor} ${step.textColor} ${step.hoverTextColor} rounded-full mx-auto mb-4 flex items-center justify-center font-bold text-xl transition-all duration-500 ease-in-out group-hover:shadow-xl group-hover:shadow-coffee/30 group-hover:scale-110 group-hover:rotate-3`}
      >
        {step.number}
      </div>
      <div className="transition-all duration-300 ease-in-out group-hover:transform group-hover:translate-y-1">
        <h3 className="text-lg font-semibold font-urbanist mb-3 text-coffee transition-all duration-300 ease-in-out group-hover:text-opacity-80">
          {step.title}
        </h3>
        <p className="text-gray-600 text-sm font-urbanist transition-all duration-300 ease-in-out group-hover:text-gray-800">
          {step.description}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-br from-vanilla/20 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold font-urbanist text-center mb-12 text-coffee">
          How Safety Communities Work
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map(step => (
              <StepItem key={step.id} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
