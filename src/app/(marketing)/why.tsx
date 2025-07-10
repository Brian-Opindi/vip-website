'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const cardData = [
    {
        id: 1,
        subtitle: "Why VIP",
        title: "VIP for Families",
        description:
            "Keep your loved ones safe and connected. With real-time tracking, panic alerts, and secure check-ins, families can stay informed about each member’s safety. Parents receive instant updates and can monitor movements, giving peace of mind at all times.",
        image: "/images/why.png",
        alt: "VIP for families",
    },
    {
        id: 2,
        subtitle: "Why VIP",
        title: "VIP for Late-Night Workers",
        description:
            "Whether commuting home or working odd hours, our 24/7 safety support has your back. Use safe route planning, emergency alerts, and our built-in panic button to instantly notify responders or your community when you feel unsafe—day or night.",
        image: "/images/why.png",
        alt: "VIP for late night workers",
    },
    {
        id: 3,
        subtitle: "Why VIP",
        title: "VIP for Students",
        description:
            "Stay safe on and off campus. VIP helps students check in with guardians, find the safest paths to their dorms or classes, and connect with peers through community watch. Our discreet panic button ensures help is just a tap away in emergencies.",
        image: "/images/why.png",
        alt: "VIP for students",
    },
    {
        id: 4,
        subtitle: "Why VIP",
        title: "VIP for Travelers",
        description:
            "Navigate unfamiliar places confidently. Our location-sharing, travel alerts, and emergency access features ensure you're never alone. Whether you're exploring or on a business trip, VIP keeps you connected to safety and support wherever you go.",
        image: "/images/why.png",
        alt: "VIP for travelers",
    }
];


const Why = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])
    const [isLoaded, setIsLoaded] = useState(false)

    // Initialize refs array
    useEffect(() => {
        cardsRef.current = cardsRef.current.slice(0, cardData.length)
    }, [])

    useEffect(() => {
        // Register plugin and wait for component to be fully loaded
        gsap.registerPlugin(ScrollTrigger)
        setIsLoaded(true)
    }, [])

    useEffect(() => {
        if (!isLoaded || !containerRef.current) return

        const container = containerRef.current
        const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[]

        if (cards.length !== cardData.length) return

        // Clear any existing ScrollTriggers
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())

        // Set initial positions with a small delay to ensure DOM is ready
        const initAnimation = () => {
            cards.forEach((card, index) => {
                gsap.set(card, {
                    zIndex: cardData.length - index,
                    y: index === 0 ? 0 : 60,
                    scale: index === 0 ? 1 : 0.9,
                    opacity: index === 0 ? 1 : index === 1 ? 1 : 0,
                    transformOrigin: "center center"
                })
            })

            // Create scroll triggers for each transition
            cards.forEach((card, index) => {
                if (index < cards.length - 1) {
                    ScrollTrigger.create({
                        trigger: container,
                        start: `10%+=${index * window.innerHeight} center`,
                        end: `top+=${(index + 1) * window.innerHeight} center`,
                        scrub: 1,
                        invalidateOnRefresh: true,
                        onUpdate: (self) => {
                            const progress = self.progress

                            // Current active card moves up
                            gsap.to(card, {
                                y: -progress * 200,
                                scale: 1,
                                opacity: 1 - progress * 1,
                                duration: 0.1,
                                ease: "none"
                            })

                            // Next card becomes active
                            const nextCard = cards[index + 1]
                            if (nextCard) {
                                gsap.to(nextCard, {
                                    y: 60 - progress * 60,
                                    scale: 0.9 + progress * 0.1,
                                    opacity: 0 + progress * 1,
                                    duration: 0.1,
                                    ease: "none"
                                })
                            }

                            // Show next upcoming card
                            const cardAfterNext = cards[index + 2]
                            if (cardAfterNext) {
                                gsap.to(cardAfterNext, {
                                    opacity: progress * 1,
                                    y: 60,
                                    scale: 0.9,
                                    duration: 0.1,
                                    ease: "none"
                                })
                            }
                        }
                    })
                }
            })

            // Refresh ScrollTrigger to recalculate positions
            ScrollTrigger.refresh()
        }

        // Small delay to ensure everything is rendered
        const timer = setTimeout(initAnimation, 100)

        return () => {
            clearTimeout(timer)
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        }
    }, [isLoaded])

    const setCardRef = (el: HTMLDivElement | null, index: number) => {
        cardsRef.current[index] = el
    }

    if (!isLoaded) {
        return <div className="h-screen" /> // Loading placeholder
    }

    return (
        <section className="relative bg-background" ref={containerRef}>
            <div
                className="relative w-full"
                style={{ height: `${cardData.length * 100}vh` }}
            >
                <div className="sticky top-0 h-screen flex items-center justify-center px-4">
                    <div className="relative w-full max-w-6xl h-[600px]">
                        {cardData.map((cardInfo, index) => (
                            <div
                                key={cardInfo.id}
                                ref={(el) => setCardRef(el, index)}
                                className="absolute inset-0 w-full flex items-center justify-center"
                            >
                                <Card className="w-full rounded-3xl border-coffee dark:border-vanilla bg-white dark:bg-black shadow-2xl overflow-hidden">
                                    <CardContent className="p-8 md:p-12 lg:p-20 bg-white dark:bg-black">
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                            {/* Left Column - Text Content */}
                                            <div className="space-y-6">
                                                <div className="space-y-4">
                                                    <p className="text-sm font-medium font-wix-madefor-display text-accent-foreground tracking-wider">
                                                        {cardInfo.subtitle}
                                                    </p>
                                                    <h2 className="text-2xl font-wix-madefor-display md:text-4xl lg:text-5xl font-medium text-coffee dark:text-vanilla leading-tight">
                                                        {cardInfo.title}
                                                    </h2>
                                                    <p className="text-sm text-muted-foreground dark:text-white font-wix-madefor-display leading-relaxed">
                                                        {cardInfo.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Right Column - Image */}
                                            <div className="relative">
                                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                                                    <Image
                                                        src={cardInfo.image}
                                                        alt={cardInfo.alt}
                                                        fill
                                                        className="object-cover h-full"
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Why