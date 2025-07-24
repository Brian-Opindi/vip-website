"use client"

import React, { useState } from 'react'
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    AlertDialogPortal,
    AlertDialogOverlay,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowUpRight, CheckCircle } from "lucide-react"
import FloatingParticles from "@/components/floating-particles"

interface WaitlistModalProps {
    children: React.ReactNode
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            // Simulate API call - replace with your actual API endpoint
            await new Promise(resolve => setTimeout(resolve, 2000))

            // Here you would typically send the data to your backend
            console.log('Waitlist submission:', formData)

            setIsSuccess(true)

            // Reset form after success
            setTimeout(() => {
                setFormData({ name: '', email: '' })
                setIsSuccess(false)
                setIsOpen(false)
            }, 3000)

        } catch (error) {
            console.error('Error submitting waitlist:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const resetModal = () => {
        setFormData({ name: '', email: '' })
        setIsSuccess(false)
        setIsSubmitting(false)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    return (
        <AlertDialog open={isOpen} onOpenChange={(open) => {
            setIsOpen(open)
            if (!open) resetModal()
        }}>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogPortal>
                {/* Custom Black Overlay with Floating Particles */}
                <AlertDialogOverlay className="fixed inset-0 z-50 bg-black data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
                    <FloatingParticles />
                </AlertDialogOverlay>

                {/* Modal Content */}
                <AlertDialogContent className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] border-0 bg-transparent p-0 shadow-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
                    <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-8 relative w-full max-w-md mx-auto border border-gray-200 dark:border-gray-700 shadow-2xl">
                        {!isSuccess ? (
                            <>
                                {/* Header */}
                                <div className="text-center mb-6">
                                    <h2 className="text-xl sm:text-2xl font-bold font-wix-madefor-display text-coffee dark:text-vanilla mb-2">
                                        Join the VIP Waitlist
                                    </h2>
                                    <p className="text-sm text-gray-600 dark:text-neutral-400 font-urbanist">
                                        Be the first to experience the future of personal safety.
                                        Get early access and exclusive updates.
                                    </p>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <Input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your full name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="font-urbanist text-sm"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email address"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="font-urbanist text-sm"
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        variant="vip"
                                        className="w-full p-4 font-wix-madefor-display text-sm mt-6"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center space-x-2">
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>Joining...</span>
                                            </div>
                                        ) : (
                                            <>
                                                <span className="shadow-lg bg-coffee flex items-center justify-center rounded-full dark:bg-white/20 w-6 h-6 -ml-2 mr-2">
                                                    <ArrowUpRight className="text-white" size={14} />
                                                </span>
                                                Join the Waitlist
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </>
                        ) : (
                            /* Success State */
                            <>
                                <div className="text-center py-6">
                                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                    <h2 className="text-xl sm:text-2xl font-bold font-wix-madefor-display text-coffee dark:text-vanilla mb-2">
                                        Welcome to VIP!
                                    </h2>
                                    <p className="text-sm text-gray-600 dark:text-neutral-400 font-urbanist">
                                        You're now on the waitlist. We'll notify you as soon as VIP is available.
                                    </p>
                                </div>

                                {/* Close Button for Success State */}
                                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={handleClose}
                                        className="w-full font-wix-madefor-display text-sm"
                                    >
                                        Close
                                    </Button>
                                </div>
                            </>
                        )}
                    </div>
                </AlertDialogContent>
            </AlertDialogPortal>
        </AlertDialog>
    )
}

export default WaitlistModal