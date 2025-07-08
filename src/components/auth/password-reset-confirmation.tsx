"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { CheckCircle, Mail, Clock, AlertCircle, RefreshCw, X, HelpCircle, Shield, Zap } from "lucide-react"
import VipButton from "@/components/vip/button"

interface PasswordResetConfirmationProps {
    email: string
    onResend: () => void
    onBackToInput: () => void
}

const PasswordResetConfirmation: React.FC<PasswordResetConfirmationProps> = ({
                                                                                 email,
                                                                                 onResend,
                                                                                 onBackToInput
                                                                             }) => {
    const [showResendAlert, setShowResendAlert] = useState(false)
    const [resendCount, setResendCount] = useState(0)
    const [isResending, setIsResending] = useState(false)
    const [showFloatingBox, setShowFloatingBox] = useState(true)
    const [currentTip, setCurrentTip] = useState(0)

    const tips = [
        {
            icon: <HelpCircle className="w-5 h-5 text-blue-600" />,
            title: "Can't find the email?",
            description: "Check your spam or junk folder. Sometimes reset emails end up there.",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200"
        },
        {
            icon: <Clock className="w-5 h-5 text-amber-600" />,
            title: "Link expires soon",
            description: "Reset links are valid for 15 minutes for your security.",
            bgColor: "bg-amber-50",
            borderColor: "border-amber-200"
        },
        {
            icon: <Shield className="w-5 h-5 text-green-600" />,
            title: "Stay secure",
            description: "Never share your reset link with anyone. We'll never ask for it.",
            bgColor: "bg-green-50",
            borderColor: "border-green-200"
        },
        {
            icon: <Zap className="w-5 h-5 text-purple-600" />,
            title: "Quick tip",
            description: "Add noreply@vip-ngo.com to your contacts to avoid missing future emails.",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-200"
        }
    ]

    // Cycle through tips every 8 seconds
    useEffect(() => {
        if (!showFloatingBox) return

        const interval = setInterval(() => {
            setCurrentTip(prev => (prev + 1) % tips.length)
        }, 8000)

        return () => clearInterval(interval)
    }, [showFloatingBox, tips.length])

    const handleResend = async () => {
        setIsResending(true)

        // Simulate API call
        setTimeout(() => {
            onResend()
            setResendCount(prev => prev + 1)
            setShowResendAlert(true)
            setIsResending(false)

            // Hide alert after 5 seconds
            setTimeout(() => setShowResendAlert(false), 5000)
        }, 1000)
    }

    const handleChangeEmail = () => {
        onBackToInput()
    }

    const currentTipData = tips[currentTip]

    return (
        <section className="min-h-screen relative overflow-hidden">
            {/* Background GIF */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/vip-bg.gif"
                    alt="VIP Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Floating Confirmation - Center Left */}
            <div className="relative z-10 min-h-screen flex items-center justify-start pl-8 md:pl-16 lg:pl-24">
                <Card className="w-full max-w-lg bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-2xl p-10">
                    <CardContent className="p-6 text-center">
                        {/* Logo */}
                        <div className="flex justify-center mb-6">
                            <Image
                                src="/images/logos/VIP icon.png"
                                alt="VIP NGO Logo"
                                width={50}
                                height={50}
                                priority
                                className="object-contain"
                            />
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-600 font-urbanist mb-2 leading-relaxed">
                            We&apos;ve sent a password reset link to:
                        </p>

                        {/* Email Display */}
                        <div className="flex items-center justify-center gap-2 mb-6 p-3 bg-coffee/5 rounded-lg">
                            <Mail className="w-4 h-4 text-coffee" />
                            <span className="text-sm font-medium text-coffee font-urbanist">
                                {email}
                            </span>
                        </div>

                        {/* Resend Success Alert */}
                        {showResendAlert && (
                            <Alert className="mb-4 border-green-200 bg-green-50 py-2">
                                <CheckCircle className="h-3 w-3 text-green-600" />
                                <AlertDescription className="text-green-800 font-urbanist text-xs">
                                    Email resent successfully! Check your inbox.
                                </AlertDescription>
                            </Alert>
                        )}

                        {/* Info Alert */}
                        <Alert className="mb-4 bg-coffee/5 py-2">
                            <Clock className="h-3 w-3 text-coffee" />
                            <AlertDescription className="text-coffee font-urbanist text-xs">
                                The reset link will expire in 15 minutes. If you don&apos;t see the email, check your spam folder.
                            </AlertDescription>
                        </Alert>

                        {/* Warning Alert for Multiple Resends */}
                        {resendCount >= 2 && (
                            <Alert className="mb-4 border-amber-200 bg-amber-50 py-2">
                                <AlertCircle className="h-3 w-3 text-amber-600" />
                                <AlertDescription className="text-amber-800 font-urbanist text-xs">
                                    You&apos;ve resent the email {resendCount} times. Please wait a few minutes before trying again.
                                </AlertDescription>
                            </Alert>
                        )}

                        {/* Actions */}
                        <div className="space-y-4 mt-10">
                            {/* Resend Button with AlertDialog */}
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button
                                        variant="outline"
                                        className="w-full border-coffee text-coffee hover:bg-coffee hover:text-white font-urbanist rounded-full cursor-pointer"
                                        disabled={isResending || resendCount >= 3}
                                    >
                                        {isResending ? (
                                            <>
                                                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            `Resend Email${resendCount > 0 ? ` (${resendCount})` : ''}`
                                        )}
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent className="bg-white/95 backdrop-blur-sm">
                                    <AlertDialogHeader>
                                        <AlertDialogTitle className="font-urbanist text-coffee">
                                            Resend Reset Email?
                                        </AlertDialogTitle>
                                        <AlertDialogDescription className="font-urbanist">
                                            We&apos;ll send another password reset link to <strong>{email}</strong>.
                                            Make sure to check your spam folder if you don&apos;t see it in your inbox.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel className="font-urbanist">
                                            Cancel
                                        </AlertDialogCancel>
                                        <AlertDialogAction
                                            onClick={handleResend}
                                            className="bg-coffee hover:bg-coffee/90 font-urbanist"
                                        >
                                            Yes, Resend
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>

                            {/* Back to Login */}
                            <VipButton className="w-full">
                                <Link href="/authentication/signin">
                                    Back to Login
                                </Link>
                            </VipButton>

                            {/* Try Different Email with AlertDialog */}
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        className="w-full text-coffee hover:text-coffee/80 font-urbanist text-sm"
                                    >
                                        Try a different email address
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent className="bg-white/95 backdrop-blur-sm">
                                    <AlertDialogHeader>
                                        <AlertDialogTitle className="font-urbanist text-coffee">
                                            Change Email Address?
                                        </AlertDialogTitle>
                                        <AlertDialogDescription className="font-urbanist">
                                            You&apos;ll be taken back to the previous step to enter a different email address.
                                            Any pending reset links for <strong>{email}</strong> will still be valid.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel className="font-urbanist">
                                            Stay Here
                                        </AlertDialogCancel>
                                        <AlertDialogAction
                                            onClick={handleChangeEmail}
                                            className="bg-coffee hover:bg-coffee/90 font-urbanist"
                                        >
                                            Change Email
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>

                        {/* Horizontal Line */}
                        <hr className="border-gray-200 my-6" />

                        {/* reCAPTCHA Notice */}
                        <p className="text-xs text-gray-500 font-urbanist text-center leading-tight">
                            Protected by reCAPTCHA and subject to VIP{' '}
                            <Link href="/privacy" className="text-coffee hover:text-coffee/80">Privacy Policy</Link>
                            {' '}and{' '}
                            <Link href="/terms" className="text-coffee hover:text-coffee/80">Terms of Service</Link>.
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Floating Tips Box - Bottom Right */}
            {showFloatingBox && (
                <div className="fixed bottom-6 right-6 z-50 max-w-sm">
                    <Card className={`${currentTipData.bgColor} ${currentTipData.borderColor} border-2 shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105`}>
                        <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                                <div className="flex items-start gap-3 flex-1">
                                    <div className="flex-shrink-0 mt-0.5">
                                        {currentTipData.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold font-urbanist text-sm text-gray-800 mb-1">
                                            {currentTipData.title}
                                        </h3>
                                        <p className="text-xs font-urbanist text-gray-600 leading-relaxed">
                                            {currentTipData.description}
                                        </p>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setShowFloatingBox(false)}
                                    className="h-6 w-6 p-0 hover:bg-gray-200 flex-shrink-0 ml-2"
                                >
                                    <X className="h-3 w-3" />
                                </Button>
                            </div>

                            {/* Progress Dots */}
                            <div className="flex justify-center gap-1 mt-3">
                                {tips.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                            index === currentTip ? 'bg-gray-600' : 'bg-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}
        </section>
    )
}

export default PasswordResetConfirmation