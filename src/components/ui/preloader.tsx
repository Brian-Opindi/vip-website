"use client"

import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import Image from 'next/image'

interface PreloaderProps {
    isLoading: boolean
    onComplete?: () => void
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading, onComplete }) => {
    const [isVisible, setIsVisible] = useState(isLoading)

    const containerRef = useRef<HTMLDivElement>(null)
    const logoRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const timelineRef = useRef<gsap.core.Timeline | null>(null)

    useEffect(() => {
        if (isLoading) {
            setIsVisible(true)

            // Create GSAP timeline
            const tl = gsap.timeline({
                onComplete: () => {
                    // Start the glowing animation for VIP text
                    gsap.to(textRef.current, {
                        textShadow: "0 0 20px #ffffff, 0 0 40px #ffffff, 0 0 60px #ffffff",
                        duration: 1.5,
                        ease: "power2.inOut",
                        yoyo: true,
                        repeat: -1
                    })

                    // Complete preloader after some time
                    setTimeout(() => {
                        setIsVisible(false)
                        onComplete?.()
                    }, 4000) // 4 seconds total
                }
            })

            timelineRef.current = tl

            // Animation sequence
            tl.set([logoRef.current, textRef.current], {
                opacity: 0,
                scale: 0.8
            })

                // 1. Fade in logo
                .to(logoRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "back.out(1.7)"
                })

                // 2. Fade in VIP text with slight delay
                .to(textRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "back.out(1.7)"
                }, "-=0.5")

            return () => {
                if (timelineRef.current) {
                    timelineRef.current.kill()
                }
            }
        }
    }, [isLoading, onComplete])

    useEffect(() => {
        if (!isLoading) {
            setIsVisible(false)
        }
    }, [isLoading])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    ref={containerRef}
                    className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <div className="flex items-center space-x-8">
                        {/* VIP Logo */}
                        <div
                            ref={logoRef}
                            className="opacity-0"
                        >
                            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative">
                                <Image
                                    src="/images/logos/VIP icon.png"
                                    alt="VIP Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>

                        {/* VIP Text */}
                        <div
                            ref={textRef}
                            className="text-vanilla text-6xl md:text-8xl lg:text-9xl font-bold font-wix-madefor-display opacity-0"
                            style={{
                                textShadow: "0 0 5px #ffffff"
                            }}
                        >
                            VIP
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Preloader