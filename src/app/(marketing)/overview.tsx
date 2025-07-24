import React from 'react';
import Image from 'next/image';

const Overview = () => {
  const stats = [
    {
      number: '24/7',
      label: 'Emergency Response',
      description: 'Round-the-clock safety monitoring',
    },
    {
      number: '< 30s',
      label: 'Alert Response Time',
      description: 'Lightning-fast emergency alerts',
    },
    {
      number: '99.9%',
      label: 'Uptime Reliability',
      description: 'Always there when you need us',
    },
    {
      number: '50K+',
      label: 'Lives Protected',
      description: 'Growing community of safety',
    },
  ];

  const values = [
    {
      icon: '🛡️',
      title: 'Safety First',
      description:
        'Your security is our top priority. Every feature is designed with your protection in mind.',
    },
    {
      icon: '🤝',
      title: 'Community Driven',
      description:
        'Building stronger, safer communities through connected protection networks.',
    },
    {
      icon: '⚡',
      title: 'Instant Response',
      description:
        'When seconds matter, our technology ensures help arrives as fast as possible.',
    },
    {
      icon: '🔒',
      title: 'Privacy Protected',
      description:
        'Your data is encrypted and secure. We protect your privacy as much as your safety.',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold font-wix-madefor-display text-coffee dark:text-vanilla">
                Redefining personal safety standards.
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-white font-urbanist leading-relaxed">
                <p>
                  Born from a simple yet powerful belief: everyone deserves to
                  feel safe, no matter where they are or what they&apos;re
                  doing. VIP was created by a team of safety experts,
                  technologists, and everyday people who understood that
                  traditional emergency systems weren&apos;t keeping up with
                  modern life.
                </p>
                <p>
                  We&apos;ve reimagined personal safety from the ground up,
                  creating an intelligent platform that learns, adapts, and
                  responds to your unique safety needs. From late-night commutes
                  to family adventures, VIP is your invisible guardian.
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

        {/* Stats Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold font-wix-madefor-display text-coffee dark:text-vanilla mb-4">
              Trusted by Thousands
            </h3>
            <p className="text-gray-600 dark:text-white font-urbanist max-w-2xl mx-auto">
              Our commitment to safety excellence is reflected in our
              performance metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-3xl font-bold font-wix-madefor-display text-coffee dark:text-vanilla mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold font-urbanist text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-urbanist">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold font-wix-madefor-display text-coffee dark:text-vanilla mb-4">
              Our Core Values
            </h3>
            <p className="text-gray-600 dark:text-white font-urbanist max-w-2xl mx-auto">
              The principles that guide everything we do at VIP
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl mb-4 flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-wix-madefor-display text-coffee dark:text-vanilla mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 dark:text-white font-urbanist leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
