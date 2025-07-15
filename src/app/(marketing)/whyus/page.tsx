"use client"

import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Footer from '../footer';
import { NavMenu } from '../navigation-menu';

const WhyUsPage = () => {
    return (
        <>
        <div className="absolute left-0 right-0 z-10 rounded-md bg-black mx-auto max-w-6xl flex justify-center">
                                  <NavMenu />
                              </div>
        <div className="min-h-screen" style={{ backgroundColor: '#F5F1E8' }}>
        <section className="min-h-screen bg-[#F5F1E8] dark:bg-black">
            <div className="container mx-auto px-4 py-16" >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mt-30">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white leading-tight font-wix-madefor-display">
                                <span className="text-orange-500">🚀 More than a platform—a</span>
                                <br />
                                partner you can trust
                            </h1>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-urbanist max-w-lg">
                                VIP is award-winning safety tech plus unmatched emergency response plus decades of personal 
                                security experience. It all works together so your family can stay safe and connected 
                                every day.
                            </p>
                        </div>
                        
                        <Button 
                            className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-lg font-urbanist text-lg transition-all duration-300 hover:scale-105"
                        >
                            Get a demo
                            <span className="ml-2">
                                <ArrowUpRight size={20} />
                            </span>
                        </Button>
                    </div>

                    {/* Right Column - Image and Stats */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="relative rounded-2xl overflow-hidden">
                            <Image
                                src="/images/user 1.jpg"
                                alt="Two people working together on a device"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                            <div className="text-center space-y-4">
                                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 font-urbanist">
                                    Average Lead Score
                                </h3>
                                
                                {/* Circular Progress */}
                                <div className="relative w-24 h-24 mx-auto">
                                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                                        {/* Background Circle */}
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            stroke="#e5e7eb"
                                            strokeWidth="8"
                                            fill="none"
                                            className="dark:stroke-gray-700"
                                        />
                                        {/* Progress Circle */}
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            stroke="url(#gradient)"
                                            strokeWidth="8"
                                            fill="none"
                                            strokeDasharray={`${(4.8 / 5) * 251.2} 251.2`}
                                            strokeLinecap="round"
                                            className="transition-all duration-1000"
                                        />
                                        {/* Gradient Definition */}
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#3b82f6" />
                                                <stop offset="100%" stopColor="#8b5cf6" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    
                                    {/* Score Text */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white font-wix-madefor-display">
                                            4.8
                                        </span>
                                        <span className="text-sm text-green-500 font-urbanist flex items-center">
                                            <span className="mr-1">↗</span>
                                            2%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Innovation Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white font-wix-madefor-display mb-4">
                        Innovation powered by AI and deep expertise
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Card 1 - All-in-one Safety Platform */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="mb-6">
                            <div className="grid grid-cols-3 gap-2 mb-4">
                                <div className="bg-red-100 rounded-lg p-2 flex items-center justify-center">
                                    <span className="text-red-600 text-xl">🚨</span>
                                </div>
                                <div className="bg-blue-100 rounded-lg p-2 flex items-center justify-center">
                                    <span className="text-blue-600 text-xl">🛡️</span>
                                </div>
                                <div className="bg-green-100 rounded-lg p-2 flex items-center justify-center">
                                    <span className="text-green-600 text-xl">📱</span>
                                </div>
                                <div className="bg-purple-100 rounded-lg p-2 flex items-center justify-center">
                                    <span className="text-purple-600 text-xl">🌐</span>
                                </div>
                                <div className="bg-orange-100 rounded-lg p-2 flex items-center justify-center">
                                    <span className="text-orange-600 text-xl">👥</span>
                                </div>
                                <div className="bg-teal-100 rounded-lg p-2 flex items-center justify-center">
                                    <span className="text-teal-600 text-xl">⚡</span>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-wix-madefor-display">
                            An all-in-one safety platform
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 font-urbanist leading-relaxed">
                            From emergency alerts to family tracking, get everything you need to keep your loved ones safe and connected in one comprehensive platform.
                        </p>
                    </div>

                    {/* Card 2 - AI-Powered Emergency Response */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="mb-6">
                            <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-6">
                                <div className="text-center">
                                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Response Time</h4>
                                    <div className="flex items-center justify-center space-x-4">
                                        <div className="text-center">
                                            <div className="w-12 h-2 bg-blue-500 rounded-full mb-1"></div>
                                            <span className="text-xs text-gray-600">Instant</span>
                                        </div>
                                        <div className="text-center">
                                            <div className="w-12 h-2 bg-orange-500 rounded-full mb-1"></div>
                                            <span className="text-xs text-gray-600">&lt; 30 sec</span>
                                        </div>
                                        <div className="text-center">
                                            <div className="w-12 h-2 bg-green-500 rounded-full mb-1"></div>
                                            <span className="text-xs text-gray-600">Active</span>
                                        </div>
                                    </div>
                                    <div className="mt-4 text-2xl font-bold text-green-600">⬆ 95%</div>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-wix-madefor-display">
                            AI-powered emergency response
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 font-urbanist leading-relaxed">
                            With AI technology that automatically detects emergencies and alerts your network, you can focus on staying safe while we handle the communication.
                        </p>
                    </div>

                    {/* Card 3 - Family Safety Management */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="mb-6">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                        <span className="text-sm font-medium">Emergency Alert</span>
                                    </div>
                                    <span className="text-xs text-gray-500">🔔 New Contact</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-sm font-medium">Location Share</span>
                                    </div>
                                    <span className="text-xs text-gray-500">🗺️ Family</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="text-sm font-medium">Safe Check-in</span>
                                    </div>
                                    <span className="text-xs text-gray-500">✅ Family</span>
                                </div>
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-wix-madefor-display">
                            Family safety management made easy
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 font-urbanist leading-relaxed">
                            Monitor your family&apos;s safety from every angle and keep everyone connected, all from one simple and intuitive dashboard.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Support Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Left Column - Image and Rating */}
                    <div className="relative">
                        {/* Main Image */}
                        <div className="relative rounded-2xl overflow-hidden">
                            <Image
                                src="/images/user 2.jpg"
                                alt="VIP support team members working together"
                                width={400}
                                height={280}
                                className="w-full h-auto object-cover max-w-md"
                            />
                        </div>

                        {/* Floating Rating Card */}
                        <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 max-w-xs">
                            <div className="space-y-4">
                                {/* 5 Star Rating */}
                                <div className="flex space-x-1 justify-center">
                                    <span className="text-yellow-400 text-xl">⭐</span>
                                    <span className="text-yellow-400 text-xl">⭐</span>
                                    <span className="text-yellow-400 text-xl">⭐</span>
                                    <span className="text-yellow-400 text-xl">⭐</span>
                                    <span className="text-yellow-400 text-xl">⭐</span>
                                </div>
                                
                                {/* Rating Score */}
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-orange-500 font-wix-madefor-display">
                                        4.92
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 font-urbanist mt-2">
                                        out of 5 on<br />
                                        our customer<br />
                                        satisfaction score
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight font-wix-madefor-display">
                                Supported by people who thrive on your safety
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-urbanist">
                                You care deeply about your family&apos;s safety, and our team does too. VIP is 
                                an extension of your own protection network, and we&apos;re here to help you build the 
                                right safety strategy and meet your peace of mind goals.
                            </p>
                        </div>

                        {/* Support Features */}
                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white font-urbanist">
                                        24/7 Emergency Support
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 font-urbanist">
                                        Our dedicated safety team is available around the clock when you need help most.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white font-urbanist">
                                        Personal Safety Consultations
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 font-urbanist">
                                        Get personalized advice on optimizing your family&apos;s safety protocols and emergency plans.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 dark:text-white font-urbanist">
                                        Continuous Safety Monitoring
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400 font-urbanist">
                                        We continuously monitor and improve our systems to ensure your family stays protected.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight font-wix-madefor-display mb-16">
                        Trusted by 150K+ families—with results that speak for themselves
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Stat 1 - Emergency Alerts Sent */}
                        <div className="text-center">
                            <div className="text-6xl md:text-7xl font-bold text-orange-500 font-wix-madefor-display mb-4">
                                2.3M
                            </div>
                            <p className="text-lg text-gray-600 dark:text-gray-300 font-urbanist">
                                emergency alerts sent
                            </p>
                        </div>

                        {/* Stat 2 - Lives Protected */}
                        <div className="text-center">
                            <div className="text-6xl md:text-7xl font-bold text-orange-500 font-wix-madefor-display mb-4">
                                500K+
                            </div>
                            <p className="text-lg text-gray-600 dark:text-gray-300 font-urbanist">
                                lives actively protected
                            </p>
                        </div>

                        {/* Stat 3 - Response Time */}
                        <div className="text-center">
                            <div className="text-6xl md:text-7xl font-bold text-orange-500 font-wix-madefor-display mb-4">
                                &lt;15s
                            </div>
                            <p className="text-lg text-gray-600 dark:text-gray-300 font-urbanist">
                                average emergency response time
                            </p>
                        </div>
                    </div>

                    {/* Bottom Border Line */}
                    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">                    </div>
                </div>
            </div>
        </section>

        {/* Network Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight font-wix-madefor-display">
                                Personal safety powered by a nationwide network
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-urbanist">
                                VIP and our trusted partner network, as part of the global safety community, 
                                provide families of all sizes with access to immediate emergency response, 
                                plus the digital safety solutions they need to reach help when it matters most 
                                with a message that resonates and drives real protection.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden">
                            <Image
                                src="/images/user 3.jpg"
                                alt="Person using VIP safety app in a comfortable home setting"
                                width={400}
                                height={280}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 bg-gradient-to-r from-amber-800 to-amber-900 relative overflow-hidden">
            {/* Background Geometric Shapes */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-700 opacity-20 rounded-full transform translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-600 opacity-20 rounded-full transform -translate-x-24 translate-y-24"></div>
                <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-amber-500 opacity-15 transform rotate-45"></div>
                <div className="absolute top-1/4 left-1/3 w-24 h-24 bg-amber-600 opacity-15 transform rotate-12"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-wix-madefor-display mb-6">
                        Accelerate your family&apos;s safety
                    </h2>
                    <p className="text-xl text-amber-100 font-urbanist mb-8 max-w-2xl mx-auto">
                        Talk to a safety expert and learn how VIP can keep your family protected and connected.
                    </p>
                    
                    <Button 
                        className="bg-vanilla hover:bg-white text-amber-900 px-8 py-4 rounded-lg font-urbanist text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                        Get a demo
                        <span className="ml-2">
                            <ArrowUpRight size={20} />
                        </span>
                    </Button>
                </div>
            </div>
        </section>
        </div>
                <Footer />
        </>
    )
}

export default WhyUsPage