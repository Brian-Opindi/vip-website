"use client"

import React, { useState, useEffect, useRef } from 'react'
import {NavMenu} from "@/app/(marketing)/navigation-menu";
import Footer from '../(marketing)/footer';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const File = () => {
    const router = useRouter();
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
        <div className="min-h-screen" style={{ backgroundColor: '#F5F1E8' }}>
           

 

            {/* Main Content */}
            <main style={{ backgroundColor: '#F5F1E8' }} className="min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="text-center mt-24">
                        {/* Main Heading */}
                        <h1 className="text-6xl md:text-8xl font-bold mb-8">
                            <span className="bg-gradient-to-r from-amber-800 via-yellow-900 to-amber-900 bg-clip-text text-transparent">
                                WHY VIP
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-12 max-w-4xl mx-auto leading-tight">
                            Community safety through location sharing. Live fully with VIP.
                        </h2>

                        {/* CTA Button */}
                        <button 
                            onClick={() => router.push('/pricing')}
                            className="bg-amber-800 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-amber-900 transition-colors"
                        >
                            Get started
                        </button>
                    </div>

                    {/* Safety Features Section */}
                    <div 
                        ref={sectionRef}
                        className={`mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center p-12 rounded-3xl transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                        style={{ backgroundColor: '#F0EBE0' }}
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
                                        <span className="text-lg font-semibold text-gray-800">Community Safety</span>
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
                                        <span className="text-lg font-semibold text-gray-800">Old fork security</span>
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
                                        <span className="text-lg font-semibold text-gray-800">SOS alert</span>
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

                    {/* Company Mission, Vision & Values Section */}
                    <div className="mt-32">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                                About VIP
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Founded on the belief that safety should never limit freedom, VIP has been empowering families to live boldly while staying connected.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                            {/* Mission Card */}
                            <div 
                                className="p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                style={{ backgroundColor: '#F0EBE0' }}
                            >
                                <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mb-6 mx-auto">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414-1.414L9 5.586 7.707 4.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414L10 4.586z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Mission</h3>
                                <p className="text-gray-600 text-center leading-relaxed">
                                    To create a world where families can live fully and freely, knowing they&apos;re always connected to the people who matter most. We believe safety should empower, not restrict.
                                </p>
                            </div>

                            {/* Vision Card */}
                            <div 
                                className="p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                style={{ backgroundColor: '#F0EBE0' }}
                            >
                                <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mb-6 mx-auto">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Vision</h3>
                                <p className="text-gray-600 text-center leading-relaxed">
                                    To be the global leader in family safety technology, building communities where independence and security coexist seamlessly in every corner of the world.
                                </p>
                            </div>

                            {/* Values Card */}
                            <div 
                                className="p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                                style={{ backgroundColor: '#F0EBE0' }}
                            >
                                <div className="w-16 h-16 bg-amber-800 rounded-full flex items-center justify-center mb-6 mx-auto">
                                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Values</h3>
                                <p className="text-gray-600 text-center leading-relaxed">
                                    Trust, innovation, and family connection guide everything we do. We&apos;re committed to protecting what matters most while respecting privacy and promoting freedom.
                                </p>
                            </div>
                        </div>

                        {/* Company Story Section */}
                        <div 
                            className="p-12 rounded-3xl shadow-lg"
                            style={{ backgroundColor: '#F8F8F8' }}
                        >
                            <div className="max-w-4xl mx-auto text-center">
                                <h3 className="text-3xl font-bold text-gray-800 mb-8">Why We Started VIP</h3>
                                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                    <p>
                                        VIP was born from a simple yet powerful realization: in an increasingly connected world, families were somehow becoming more disconnected from each other&apos;s daily lives and safety.
                                    </p>
                                    <p>
                                        After Hurricane Katrina in 2005, our founders witnessed firsthand how traditional communication methods failed when families needed them most. They envisioned a solution that would keep families connected not just during emergencies, but in their everyday adventures.
                                    </p>
                                    <p>
                                        Today, VIP serves over 10 million families across 195 countries, proving that when safety and freedom work together, families can achieve incredible things. We&apos;re not just a safety app – we&apos;re a movement toward fearless living.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Leadership Principles */}
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="text-center p-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">Trust First</h4>
                                <p className="text-sm text-gray-600">Privacy and security are never compromised</p>
                            </div>

                            <div className="text-center p-6">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">Innovation</h4>
                                <p className="text-sm text-gray-600">Constantly evolving to meet modern needs</p>
                            </div>

                            <div className="text-center p-6">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">Community</h4>
                                <p className="text-sm text-gray-600">Building stronger connections worldwide</p>
                            </div>

                            <div className="text-center p-6">
                                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                    <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-gray-800 mb-2">Freedom</h4>
                                <p className="text-sm text-gray-600">Enabling fearless exploration of life</p>
                            </div>
                        </div>
                    </div>

                    {/* Safety and Independence Section */}
                    <div className="mt-32 space-y-32">
                        {/* Section Header */}
                        <div className="text-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                                We believe safety and independence can go hand-in-hand.
                            </h2>
                        </div>

                        {/* Independence for Families - Image Left */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <Image 
                                    src="/images/user 1.jpg" 
                                    alt="Family enjoying independence" 
                                    width={500}
                                    height={384}
                                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                                />
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold text-gray-800">Independence for families</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Because we offer such a comprehensive range of safety features, families can feel free 
                                    of daily worry. Free to explore, adventure, try new things, and trust themselves and one 
                                    another.
                                </p>
                            </div>
                        </div>

                        {/* Peace of Mind - Image Right */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6 lg:order-1">
                                <h3 className="text-3xl font-bold text-gray-800">Peace of mind for parents</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    With real-time location sharing, driving safety monitoring, and emergency alerts, 
                                    parents can give their children the freedom they crave while staying connected and 
                                    informed about their safety.
                                </p>
                            </div>
                            <div className="relative lg:order-2">
                                <Image 
                                    src="/images/user 2.jpg" 
                                    alt="Parent and child connection" 
                                    width={500}
                                    height={384}
                                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                                />
                            </div>
                        </div>

                        {/* Community Safety - Image Left */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <Image 
                                    src="/images/user 3.jpg" 
                                    alt="Community safety network" 
                                    width={500}
                                    height={384}
                                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                                />
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-3xl font-bold text-gray-800">Building safer communities</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    VIP creates networks of safety that extend beyond individual families. When communities 
                                    are connected and informed, everyone benefits from increased security and mutual support 
                                    in times of need.
                                </p>
                            </div>
                        </div>

                        {/* Emergency Response - Image Right */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6 lg:order-1">
                                <h3 className="text-3xl font-bold text-gray-800">Instant emergency response</h3>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    Our 24/7 emergency assistance service ensures that help is always just one tap away. 
                                    Whether it&apos;s a medical emergency, car trouble, or safety concern, VIP connects you to 
                                    professional assistance instantly.
                                </p>
                            </div>
                            <div className="relative lg:order-2">
                                <Image 
                                    src="/images/user 4.jpg" 
                                    alt="Emergency response" 
                                    width={500}
                                    height={384}
                                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                                />
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
                                Our Jouney
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
                                        <div 
                                            key={index} 
                                            className="flex-shrink-0 w-80 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                                            style={{ backgroundColor: '#F8F8F8' }}
                                        >
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

                    {/* Call to Action Section */}
                    <div className="mt-32 text-center">
                        <div className="max-w-4xl mx-auto space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                                Ready to experience safety without limits?
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Join millions of families worldwide who trust VIP to keep their loved ones safe while living life to the fullest. 
                                Start your journey with comprehensive safety features designed for modern families.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                                <button 
                                    onClick={() => router.push('/pricing')}
                                    className="bg-amber-800 text-white px-12 py-4 rounded-lg text-lg font-medium hover:bg-amber-900 transition-colors shadow-lg hover:shadow-xl"
                                >
                                    Get Started Today
                                </button>
                                <button 
                                    onClick={() => router.push('/features')}
                                    className="border-2 border-amber-800 text-amber-800 px-12 py-4 rounded-lg text-lg font-medium hover:bg-amber-800 hover:text-white transition-colors"
                                >
                                    Explore Features
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="mt-32">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            <div 
                                className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                                style={{ backgroundColor: '#F0EBE0' }}
                            >
                                <h3 className="text-4xl font-bold text-amber-800 mb-4">10M+</h3>
                                <p className="text-lg text-gray-700 font-semibold">Families Protected</p>
                                <p className="text-gray-600 mt-2">Trusted by families worldwide</p>
                            </div>
                            <div 
                                className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                                style={{ backgroundColor: '#F0EBE0' }}
                            >
                                <h3 className="text-4xl font-bold text-amber-800 mb-4">195</h3>
                                <p className="text-lg text-gray-700 font-semibold">Countries Served</p>
                                <p className="text-gray-600 mt-2">Global safety network</p>
                            </div>
                            <div 
                                className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                                style={{ backgroundColor: '#F0EBE0' }}
                            >
                                <h3 className="text-4xl font-bold text-amber-800 mb-4">24/7</h3>
                                <p className="text-lg text-gray-700 font-semibold">Emergency Support</p>
                                <p className="text-gray-600 mt-2">Always here when you need us</p>
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