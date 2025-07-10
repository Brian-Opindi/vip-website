import React from 'react'
import {Button} from "@/components/ui/button";
import {ArrowUpRight} from "lucide-react";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Footer from "@/app/(marketing)/footer";
import {NavMenu} from "@/app/(marketing)/navigation-menu";

const pricingPlans = [
    {
        id: 'Individual Plan',
        name: 'Individual Plan',
        description: 'Tailored for individuals who prioritize personal safety and control. Enjoy advanced features designed to keep you secure, informed, and always connected.',
        price: '$9.99',
        period: '/month',
        features: [
            'Real-time location tracking',
            'One-slide SOS emergency alerts',
            'Daily safety check-ins',
            'Activity and incident timeline',
            'Access to VIP support channels',
        ]
    },
    {
        id: 'Family Plan',
        name: 'Family Plan',
        description: 'Tailored for individuals who prioritize personal safety and control. Enjoy advanced features designed to keep you secure, informed, and always connected.',
        price: '$19.99',
        period: '/month',
        popular: true,
        features: [
            'Add up to 5 family members',
            'Real-time location sharing\n',
            'SOS alerts for all members',
            'Family check-in notifications',
            'Shared alert history',
        ]
    },
    {
        id: 'Business Plan',
        name: 'Business Plan',
        description: 'Tailored for individuals who prioritize personal safety and control. Enjoy advanced features designed to keep you secure, informed, and always connected.',
        price: '$29.99',
        period: '/month',
        features: [
            'Admin control panel & team management',
            'Unlimited team members',
            'Real-time location & emergency alerts',
            'Safety analytics & reports',
            '24/7 priority business support',
            'Custom branding & onboarding',
        ]
    }
]

const Pricing = () => {
    return (
        <>
            {/* Navigation Menu - positioned at top and centered */}
            <div className="absolute left-0 right-0 z-10 rounded-md bg-black mx-auto max-w-6xl flex justify-center">
                <NavMenu />
            </div>
            <section className="min-h-screen py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    {/* Badge */}
                    <div className="mb-8">
                        <span className="inline-flex items-center px-4 py-2 bg-coffee text-white text-sm font-urbanist font-medium rounded-full">
                            💰 Pricing Plans
                        </span>
                    </div>

                    {/* Header Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                        {/* Left Column - Heading (1/3) */}
                        <div className="lg:col-span-1">
                            <h2 className="text-4xl md:text-4xl font-bold leading-tight font-urbanist">
                                Simple Plans.<br/>
                                Serious Protection.
                            </h2>
                        </div>

                        {/* Right Column - Paragraph and Button (2/3) */}
                        <div className="lg:col-span-2 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-20">
                            <p className="leading-relaxed font-urbanist flex-1">
                                Whether you&apos;re staying safe on your own, protecting a child, or caring for a loved one — VIP has a plan for you.
                            </p>
                            <Button variant="vipoutline" className="p-6 border-coffee text-coffee font-urbanist">
                                          <span
                                              className="
                                              shadow-lg bg-coffee flex items-center justify-center rounded-full dark:bg-white/20 w-8 h-8 -ml-4 mr-2"
                                              aria-hidden="true"
                                          >
                                            <ArrowUpRight className="text-white" size={20} />
                                          </span>
                                See more!
                            </Button>
                        </div>
                    </div>

                    {/* Pricing Row with Tabs */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <Tabs defaultValue="Family Plan" orientation="vertical" className="lg:col-span-3 flex flex-col lg:flex-row gap-8">
                            {/* Left Column - Plan Tabs (1/3) */}
                            <div className="lg:w-1/3">
                                <TabsList className="flex flex-col h-auto w-full bg-transparent space-y-4 p-0">
                                    {pricingPlans.map((plan) => (
                                        <TabsTrigger
                                            key={plan.id}
                                            value={plan.id}
                                            className="w-full h-auto min-h-[160px] p-6 rounded-xl data-[state=active]:bg-white data-[state=active]:text-coffee data-[state=active]:shadow-2xl bg-transparent text-gray-900 hover:bg-coffee/10 transition-all duration-300 flex flex-col items-start justify-start text-left overflow-hidden border-0 border-coffee data-[state=active]:border-coffee whitespace-normal"
                                        >
                                            <div className="flex items-start justify-between w-full mb-3">
                                                <h3 className="text-xl font-bold font-urbanist flex-1 mr-2 leading-tight">{plan.name}</h3>
                                                {plan.popular && (
                                                    <span className="px-2 py-1 bg-orange-500 text-white text-xs font-medium rounded-full flex-shrink-0">
                                                        Popular
                                                    </span>
                                                )}
                                            </div>
                                            <div className="w-full">
                                                <p className="text-xs font-urbanist leading-relaxed text-left data-[state=active]:text-white/90 text-gray-600 whitespace-normal word-wrap break-words max-w-full">
                                                    {plan.description}
                                                </p>
                                            </div>
                                        </TabsTrigger>
                                    ))}
                                </TabsList>
                            </div>


                            {/* Right Column - Pricing Cards (2/3) */}
                            <div className="lg:w-2/3">
                                {pricingPlans.map((plan) => (
                                    <TabsContent key={plan.id} value={plan.id} className="mt-0">
                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                            {/* Show all plans but highlight the selected one */}
                                            {pricingPlans.map((displayPlan) => (
                                                <div
                                                    key={displayPlan.id}
                                                    className={`relative p-8 rounded-2xl border-0 transition-all duration-300 ${
                                                        displayPlan.id === plan.id
                                                            ? 'border-coffee bg-gray-50 shadow-2xl scale-105'
                                                            : displayPlan.popular
                                                                ? 'border-coffee border-2 bg-gray-50 shadow-xl scale-105'
                                                                : 'bg-coffee/10 border-0  hover:shadow-lg'
                                                    }`}
                                                >
                                                    {displayPlan.popular && (
                                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                                            <span className="bg-coffee text-white px-4 py-2 rounded-full text-sm font-urbanist font-medium">
                                                                Most Popular
                                                            </span>
                                                        </div>
                                                    )}

                                                    <div className="text-center mb-8">
                                                        <h3 className="text-lg font-bold text-gray-900 mb-2 font-urbanist">
                                                            {displayPlan.name}
                                                        </h3>
                                                        <div className="flex items-baseline justify-center">
                                                            <span className="text-3xl font-bold font-urbanist text-coffee">
                                                                {displayPlan.price}
                                                            </span>
                                                            <span className="text-gray-600 font-urbanist ml-1">
                                                                {displayPlan.period}
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <ul className="space-y-4 mb-8">
                                                        {displayPlan.features.map((feature, index) => (
                                                            <li key={index} className="flex items-start">
                                                                <svg
                                                                    className="w-5 h-5 text-xs text-green-500 mr-3 mt-0.5 flex-shrink-0"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span className="text-gray-700 font-urbanist text-xs">
                                                                    {feature}
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <button
                                                        className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors font-urbanist ${
                                                            displayPlan.popular
                                                                ? 'bg-coffee text-white hover:text-coffee hover:border-1 border-coffee cursor-pointer hover:bg-transparent hover:shadow-lg'
                                                                : 'bg-coffee text-white hover:text-coffee hover:bg-white cursor-pointer hover:shadow-lg hover:border-1 hover:border-coffee transition-colors duration-500'
                                                        }`}
                                                    >
                                                        Buy Now
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </TabsContent>
                                ))}
                            </div>
                        </Tabs>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Pricing
