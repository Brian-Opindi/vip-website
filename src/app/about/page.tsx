"use client"

import React, { useState, useEffect, useRef } from 'react'
import {NavMenu} from "@/app/(marketing)/navigation-menu";
import Footer from '../(marketing)/footer';

const File = () => {
    const [openSections, setOpenSections] = useState({
        location: false,
        driving: false,
        digital: true, // Digital Safety starts open
        emergency: false
    });

    const [isVisible, setIsVisible] = useState(false);
    const [isTimelineVisible, setIsTimelineVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    const timelineData = [
        { year: "2005", text: "VIP was conceived in the aftermath of Hurricane Katrina" },
        { year: "2008", text: "VIP launches its first mobile app for family location sharing" },
        { year: "2012", text: "VIP reaches 1 million active users worldwide" },
        { year: "2015", text: "Introduction of driving safety features and crash detection" },
        { year: "2018", text: "VIP expands to include digital safety and cybersecurity features" },
        { year: "2020", text: "VIP expands membership with Identity Theft Protection" },
        { year: "2021", text: "Families in 195 countries rely on VIP to keep their loved ones safe" },
        { year: "2023", text: "VIP introduces AI-powered safety recommendations" },
        { year: "2024", text: "Partnership with emergency services in major cities" }
    ];

    const cardsPerView = 3;
    const maxSlide = Math.max(0, timelineData.length - cardsPerView);

    const nextSlide = () => {
        setCurrentSlide(prev => (prev >= maxSlide ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide(prev => (prev <= 0 ? maxSlide : prev - 1));
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1, // Trigger when 10% of the section is visible
                rootMargin: '-50px 0px', // Start animation 50px before the section comes into view
            }
        );

        const timelineObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsTimelineVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '-50px 0px',
            }
        );

        const currentRef = sectionRef.current;
        const currentTimelineRef = timelineRef.current;
        
        if (currentRef) {
            observer.observe(currentRef);
        }
        
        if (currentTimelineRef) {
            timelineObserver.observe(currentTimelineRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            if (currentTimelineRef) {
                timelineObserver.unobserve(currentTimelineRef);
            }
        };
    }, []);

    const toggleSection = (section: keyof typeof openSections) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };
    return (
        <>
           <div className="absolute left-0 right-0 z-10 rounded-md bg-black mx-auto max-w-6xl flex justify-center">
                          <NavMenu />
                      </div>
        <div className="min-h-screen bg-vanilla">
           

 

            {/* Main Content */}
            <main className="bg-stone-100 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mt-24">
                        {/* Main Heading */}
                        <h1 className="text-6xl md:text-8xl font-bold mb-8">
                            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-700 bg-clip-text text-transparent">
                                WHY VIP
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-12 max-w-4xl mx-auto leading-tight">
                            Community safety through location sharing. Live fully with VIP.
                        </h2>

                        {/* CTA Button */}
                        <button className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-purple-700 transition-colors">
                            Get started
                        </button>
                    </div>

                    {/* Safety Features Section */}
                    <div 
                        ref={sectionRef}
                        className={`mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-stone-200 bg-opacity-30 p-12 rounded-3xl transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`} 
                    >
                        {/* Left Side - Features List */}
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold text-gray-800 mb-12">
                                All of our safety features and services included in one membership:
                            </h2>

                            {/* Location Safety */}
                            <div className="border-b border-gray-200 pb-4" >
                                <button 
                                    className="w-full flex justify-between items-center text-left"
                                    onClick={() => toggleSection('location')}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-lg font-semibold text-gray-800">Location Safety</span>
                                    </div>
                                    <svg 
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openSections.location ? 'transform rotate-180' : ''}`} 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {openSections.location && (
                                    <div className="mt-4 ml-9">
                                        <p className="text-gray-600">Real-time location sharing and check-ins to keep your family connected and informed about each other&apos;s whereabouts.</p>
                                    </div>
                                )}
                            </div>

                            {/* Driving Safety */}
                            <div className="border-b border-gray-200 pb-4">
                                <button 
                                    className="w-full flex justify-between items-center text-left"
                                    onClick={() => toggleSection('driving')}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                                            </svg>
                                        </div>
                                        <span className="text-lg font-semibold text-gray-800">Driving Safety</span>
                                    </div>
                                    <svg 
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openSections.driving ? 'transform rotate-180' : ''}`} 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {openSections.driving && (
                                    <div className="mt-4 ml-9">
                                        <p className="text-gray-600">Monitor driving behavior, speed alerts, and crash detection to help ensure safe driving habits for the whole family.</p>
                                    </div>
                                )}
                            </div>

                            {/* Digital Safety - Expanded */}
                            <div className="border-b border-gray-200 pb-6">
                                <button 
                                    className="w-full flex justify-between items-center text-left mb-4"
                                    onClick={() => toggleSection('digital')}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-lg font-semibold text-gray-800">Digital Safety</span>
                                    </div>
                                    <svg 
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openSections.digital ? 'transform rotate-180' : ''}`} 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {openSections.digital && (
                                    <p className="text-gray-600 text-left ml-9">
                                        Protection and prevention for each family member.
                                    </p>
                                )}
                            </div>

                            {/* Emergency Assistance */}
                            <div className="pb-4">
                                <button 
                                    className="w-full flex justify-between items-center text-left"
                                    onClick={() => toggleSection('emergency')}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-lg font-semibold text-gray-800">Emergency Assistance</span>
                                    </div>
                                    <svg 
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${openSections.emergency ? 'transform rotate-180' : ''}`} 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {openSections.emergency && (
                                    <div className="mt-4 ml-9">
                                        <p className="text-gray-600">24/7 emergency response service with one-tap SOS alerts that connect you to professional assistance when you need help most.</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Side - Illustration */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="relative">
                                {/* Main illustration - simplified version */}
                                <div className="w-96 h-96 relative">
                                    {/* Person surfing */}
                                    <div className="absolute inset-0">
                                        <svg viewBox="0 0 400 400" className="w-full h-full">
                                            {/* Wave background */}
                                            <path d="M50 200 Q150 150 250 200 T450 200 L450 400 L50 400 Z" fill="#f3f4f6" stroke="none"/>
                                            
                                            {/* Person figure */}
                                            <circle cx="200" cy="120" r="15" fill="#6b7280"/>
                                            <path d="M200 135 L200 180 M180 150 L220 150 M200 180 L185 220 M200 180 L215 220" stroke="#6b7280" strokeWidth="3" fill="none" strokeLinecap="round"/>
                                            
                                            {/* Phone/device */}
                                            <rect x="180" y="280" width="40" height="60" rx="8" fill="#f97316" stroke="#ea580c" strokeWidth="2"/>
                                            <circle cx="200" cy="310" r="8" fill="#fff"/>
                                            <text x="200" y="315" textAnchor="middle" className="text-xs fill-white font-bold">SOS</text>
                                            
                                            {/* Wave lines */}
                                            <path d="M50 180 Q150 160 250 180 T450 180" stroke="#d1d5db" strokeWidth="2" fill="none"/>
                                            <path d="M50 220 Q150 200 250 220 T450 220" stroke="#e5e7eb" strokeWidth="2" fill="none"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Section */}
                    <div 
                        ref={timelineRef}
                        className={`mt-32 transition-all duration-1000 ease-out ${isTimelineVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
                    >
                        {/* Our Story Header */}
                        <div className="text-center mb-16">
                            <p className="text-gray-600 text-lg mb-4">Our story</p>
                            <h2 className="text-5xl md:text-6xl font-bold text-gray-800">
                                How we got here.
                            </h2>
                        </div>

                        {/* Timeline Container */}
                        <div className="relative">
                            {/* Navigation Arrows */}
                            <button 
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button 
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Timeline Cards Container */}
                            <div className="overflow-hidden mx-16">
                                <div 
                                    className="flex space-x-8 py-8 transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${currentSlide * (320 + 32)}px)` }}
                                >
                                    {timelineData.map((item, index) => (
                                        <div key={index} className="flex-shrink-0 w-80 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                                            <h3 className="text-3xl font-bold text-gray-800 mb-4">{item.year}</h3>
                                            <p className="text-gray-600 text-lg leading-relaxed">
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Pagination Dots */}
                            <div className="flex justify-center mt-8 space-x-2">
                                {Array.from({ length: maxSlide + 1 }, (_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-colors ${
                                            currentSlide === index ? 'bg-gray-600' : 'bg-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* Footer */}
           
        </div>
          <Footer />
        </>
        
    )
}

export default File