"use client"

import React from 'react'
import Image from "next/image";
import {NavMenu} from "@/app/(marketing)/navigation-menu";
import {Button} from "@/components/ui/button";
import {ArrowUpRight} from "lucide-react";
import {FloatingNavDemo} from "@/app/(marketing)/floating-nav";
import WaitlistModal from "@/components/vip/waitlist-modal";

const Hero = () => {
    return (
        <section className="h-screen bg-black relative">
            {/* Navigation Menu - positioned at top and centered */}
            <div className="absolute top-0 left-0 right-0 z-10 mx-auto max-w-6xl flex justify-center">
                <NavMenu />
            </div>
            <FloatingNavDemo />

            {/* Hero Content */}
            <div className="container mx-auto px-4 h-full">
                <div className="flex items-center justify-center h-full pt-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl">
                        {/* Left Column */}
                        <div className="flex flex-col justify-center space-y-6">
                            <h1 className="text-7xl md:text-7xl font-bold text-white leading-tight font-wix-madefor-display">
                                One Slide.<br/>Total Backup.
                            </h1>
                            <div className="flex items-start space-x-8">
                                {/* Vertical Line */}
                                <div className="w-1 h-16 bg-vanilla/60 mt-1 flex-shrink-0"></div>
                                {/* Paragraph */}
                                <p className="text-lg md:text-md text-gray-300 leading-relaxed font-urbanist">
                                    Wherever you are, feel safe, connected, and in control. VIP alerts your trusted circle in seconds.
                                </p>
                            </div>
                            <div className="flex flex-row gap-2 sm:gap-4 mb-10">
                                <WaitlistModal>
                                    <Button variant="vip" className="p-4 sm:p-6 font-wix-madefor-display text-sm sm:text-base">
                                        <span
                                            className="
                                            shadow-lg bg-coffee flex items-center justify-center rounded-full dark:bg-white/20 w-6 h-6 sm:w-8 sm:h-8 -ml-2 sm:-ml-4 mr-1 sm:mr-2"
                                            aria-hidden="true"
                                        >
                                            <ArrowUpRight className="text-white" size={16} />
                                        </span>
                                        Join the waitlist!
                                    </Button>
                                </WaitlistModal>
                                {/*<Button variant="vipoutline" className="p-4 sm:p-6 font-wix-madefor-display text-sm sm:text-base">
                                  <span
                                      className="
                                      shadow-lg bg-coffee flex items-center justify-center rounded-full dark:bg-white/20 w-6 h-6 sm:w-8 sm:h-8 -ml-2 sm:-ml-4 mr-1 sm:mr-2"
                                      aria-hidden="true"
                                  >
                                    <ArrowUpRight className="text-white" size={16} />
                                  </span>
                                    Join our community!
                                </Button>*/}
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex items-center justify-center">
                            <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                                <Image
                                    src="/images/app/mockup.png"
                                    alt="hero image"
                                    width={4000}
                                    height={3000}
                                    className="w-full h-auto object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero