"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import VipButton from "@/components/vip/button"

// Enhanced Animated Input Component with error states
const AnimatedInput = ({
                           id,
                           type = "text",
                           placeholder,
                           value,
                           onChange,
                           className = "",
                           required = false,
                           error = "",
                           disabled = false
                       }: {
    id: string
    type?: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
    required?: boolean
    error?: string
    disabled?: boolean
}) => {
    const [isFocused, setIsFocused] = useState(false)
    const hasValue = value.length > 0
    const hasError = error.length > 0

    return (
        <div className="relative">
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                disabled={disabled}
                className={`
                    w-full bg-transparent border-0 border-b transition-all duration-200
                    focus:outline-none pt-4 pb-1 px-0 text-coffee font-urbanist text-sm
                    ${hasError
                    ? 'border-red-500 focus:border-red-500'
                    : 'border-coffee/20 focus:border-coffee'
                }
                    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                    ${className}
                `}
                required={required}
                aria-invalid={hasError}
                aria-describedby={hasError ? `${id}-error` : undefined}
            />
            <label
                htmlFor={id}
                className={`
                    absolute left-0 font-urbanist pointer-events-none
                    transition-all duration-200 ease-in-out
                    ${hasError ? 'text-red-500' : 'text-coffee/70'}
                    ${isFocused || hasValue
                    ? 'top-0 text-xs text-coffee'
                    : 'top-4 text-sm'
                }
                `}
            >
                {placeholder}
            </label>
            {hasError && (
                <p id={`${id}-error`} className="text-red-500 text-xs mt-1 font-urbanist">
                    {error}
                </p>
            )}
        </div>
    )
}

interface ForgotPasswordFormProps {
    onSubmit: (email: string) => void
    isLoading?: boolean
    error?: string
    onClearError?: () => void
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
                                                                   onSubmit,
                                                                   isLoading = false,
                                                                   error = "",
                                                                   onClearError
                                                               }) => {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    const validateEmail = (email: string) => {
        if (!email.trim()) {
            return "Email is required"
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            return "Please enter a valid email address"
        }
        return ""
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = e.target.value
        setEmail(newEmail)

        // Clear errors when user starts typing
        if (emailError) {
            setEmailError('')
        }
        if (error && onClearError) {
            onClearError()
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const trimmedEmail = email.trim()
        const validationError = validateEmail(trimmedEmail)

        if (validationError) {
            setEmailError(validationError)
            return
        }

        onSubmit(trimmedEmail)
    }

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
                {/* Optional overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Floating Form - Center Left */}
            <div className="relative z-10 min-h-screen flex items-center justify-start pl-8 md:pl-16 lg:pl-24">
                <Card className="w-full max-w-lg bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-2xl p-10">
                    <CardContent className="p-6">
                        {/* Logo */}
                        <div className="text-left mb-4">
                            <Image
                                src="/images/logos/VIP icon.png"
                                alt="VIP NGO Logo"
                                width={50}
                                height={50}
                                priority
                                className="object-contain"
                            />
                        </div>

                        {/* Title */}
                        <h1 className="text-xl font-bold font-urbanist text-coffee text-left mb-2">
                            Reset Your Password
                        </h1>

                        {/* Description */}
                        <p className="text-left text-sm text-gray-600 font-urbanist mb-6 leading-relaxed">
                            Enter your email address and we&apos;ll send you a link to reset your password.
                        </p>

                        {/* General Error Alert */}
                        {error && (
                            <Alert className="border-red-200 bg-red-50 mb-4">
                                <AlertCircle className="h-4 w-4 text-red-600" />
                                <AlertDescription className="text-red-800 font-urbanist text-sm">
                                    {error}
                                </AlertDescription>
                            </Alert>
                        )}

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email */}
                            <AnimatedInput
                                id="email"
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={handleEmailChange}
                                error={emailError}
                                disabled={isLoading}
                                required
                            />

                            {/* Send Reset Link Button */}
                            <div className="w-full mt-8">
                                <VipButton
                                    className="w-full"
                                    onClick={handleSubmit}
                                    disabled={isLoading || !email.trim()}
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                            Sending Reset Link...
                                        </>
                                    ) : (
                                        'Send Reset Link'
                                    )}
                                </VipButton>
                            </div>

                            {/* Back to Login Link */}
                            <div className="text-center mt-6">
                                <Link
                                    href="/authentication/signin"
                                    className="text-sm text-coffee hover:text-coffee/80 font-urbanist"
                                >
                                    Remember your password? Sign in
                                </Link>
                            </div>

                            {/* Horizontal Line */}
                            <hr className="border-gray-200 my-6" />

                            {/* reCAPTCHA Notice */}
                            <p className="text-xs text-gray-500 font-urbanist text-left leading-tight">
                                Protected by reCAPTCHA and subject to VIP{' '}
                                <Link href="/privacy" className="text-coffee hover:text-coffee/80">Privacy Policy</Link>
                                {' '}and{' '}
                                <Link href="/terms" className="text-coffee hover:text-coffee/80">Terms of Service</Link>.
                            </p>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}

export default ForgotPasswordForm