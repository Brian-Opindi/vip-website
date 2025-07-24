import React from 'react';

const pricingPlans = [
  {
    id: 'individual',
    name: 'Individual Plan',
    description:
      'Tailored for individuals who prioritize personal safety and control. Enjoy advanced features designed to keep you secure, informed, and always connected.',
    price: '$9.99',
    period: '/month',
    features: [
      'Real-time location tracking',
      'One-slide SOS emergency alerts',
      'Daily safety check-ins',
      'Activity and incident timeline',
      'Access to VIP support channels',
    ],
  },
  {
    id: 'family',
    name: 'Family Plan',
    description:
      'Perfect for families who want to stay connected and protected. Share locations, coordinate safety, and ensure everyone stays secure.',
    price: '$19.99',
    period: '/month',
    popular: true,
    features: [
      'Add up to 5 family members',
      'Real-time location sharing',
      'SOS alerts for all members',
      'Family check-in notifications',
      'Shared alert history',
      'Family safety dashboard',
    ],
  },
  {
    id: 'business',
    name: 'Business Plan',
    description:
      'Comprehensive protection for teams and organizations. Advanced management tools, analytics, and enterprise-grade security features.',
    price: '$29.99',
    period: '/month',
    features: [
      'Admin control panel & team management',
      'Unlimited team members',
      'Real-time location & emergency alerts',
      'Safety analytics & reports',
      '24/7 priority business support',
      'Custom branding & onboarding',
    ],
  },
];

const Plans = () => {
  return (
    <section className="min-h-screen h-full py-20 px-4 bg-gradient-to-br from-vanilla/10 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-urbanist text-coffee mb-4">
            Simple Plans. Serious Protection.
          </h2>
          <p className="text-gray-600 font-urbanist text-md max-w-2xl mx-auto">
            All plans include a 30-day free trial • No setup fees • Cancel
            anytime
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20 mb-20">
          {pricingPlans.map(plan => (
            <div
              key={plan.id}
              className={`relative p-8 rounded-3xl border transition-all duration-500 ease-in-out hover:scale-102 group cursor-pointer ${
                plan.popular
                  ? 'border-coffee border-2 bg-white shadow-xl scale-105'
                  : 'border-0 hover:border-2 bg-coffee/5 hover:border-coffee/50 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-6 py-2 rounded-full text-sm font-urbanist font-medium shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-coffee mb-3 font-urbanist group-hover:text-coffee/80 transition-colors duration-300">
                  {plan.name}
                </h3>
                <p className="text-gray-600 font-urbanist text-xs mb-6 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start group-hover:translate-x-1 transition-transform duration-300"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700 font-urbanist text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-coffee/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          {/* Android Download Button */}
          <button className="flex items-center bg-black text-white px-6 py-3 rounded-xl font-urbanist font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-lg">
            <svg
              className="w-6 h-6 mr-3"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1518-.5703.416.416 0 00-.5703.1518l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5703-.1518.4161.4161 0 00-.1518.5703l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
            </svg>
            <div className="text-left">
              <div className="text-xs text-gray-300">Download VIP</div>
              <div className="text-sm font-semibold">Android</div>
            </div>
          </button>

          {/* iOS Download Button */}
          <button className="flex items-center bg-black text-white px-6 py-3 rounded-xl font-urbanist font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-lg">
            <svg
              className="w-6 h-6 mr-3"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-xs text-gray-300">Download VIP</div>
              <div className="text-sm font-semibold">iOS</div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Plans;
