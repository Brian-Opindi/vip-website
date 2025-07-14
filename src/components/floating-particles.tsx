"use client"

import React, { useEffect, useRef } from 'react'

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    opacity: number
    pulseOffset: number
}

const FloatingParticles = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const particlesRef = useRef<Particle[]>([])
    const animationRef = useRef<number>()

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        resizeCanvas()
        window.addEventListener('resize', resizeCanvas)

        // Particle configuration - REDUCED COUNT
        const PARTICLE_COUNT = 50 // Reduced from 200 to 50

        // Create particles
        const createParticles = () => {
            particlesRef.current = []
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                particlesRef.current.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5, // Reduced velocity
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.6 + 0.2,
                    pulseOffset: Math.random() * Math.PI * 2
                })
            }
        }

        // Animation loop - OPTIMIZED
        let lastTime = 0
        const animate = (currentTime: number) => {
            // Throttle to ~30fps instead of 60fps for better performance
            if (currentTime - lastTime < 33) {
                animationRef.current = requestAnimationFrame(animate)
                return
            }
            lastTime = currentTime

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update and draw particles
            particlesRef.current.forEach((particle) => {
                // Add random drift movement - REDUCED
                particle.vx += (Math.random() - 0.5) * 0.02
                particle.vy += (Math.random() - 0.5) * 0.02

                // Update position
                particle.x += particle.vx
                particle.y += particle.vy

                // Apply friction
                particle.vx *= 0.99
                particle.vy *= 0.99

                // Boundary wrapping
                if (particle.x < -10) particle.x = canvas.width + 10
                if (particle.x > canvas.width + 10) particle.x = -10
                if (particle.y < -10) particle.y = canvas.height + 10
                if (particle.y > canvas.height + 10) particle.y = -10

                // Calculate pulse effect - OPTIMIZED
                const pulseScale = 1 + Math.sin(currentTime * 0.001 + particle.pulseOffset) * 0.1
                const currentSize = particle.size * pulseScale

                // Draw particle
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
                ctx.fill()

                // Add glow effect
                ctx.beginPath()
                ctx.arc(particle.x, particle.y, currentSize * 2, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.2})`
                ctx.fill()
            })

            animationRef.current = requestAnimationFrame(animate)
        }

        // Initialize
        createParticles()
        animate(0)

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas)
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 1 }}
        />
    )
}

export default FloatingParticles