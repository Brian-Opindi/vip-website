"use client"

import React, { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, Eye, EyeOff, Shield, X, Lock, Key, Zap } from "lucide-react"
import VipButton from "@/components/vip/button"

// Animated Input Component (same as other auth pages)
const AnimatedInput = ({
                           id,
                           type = "text",
                           placeholder,
                           value,
                           onChange,
                           className = "",
                           required = false,
                           showPasswordToggle = false,
                           onTogglePassword
                       }: {
    id: string
    type?: string
    placeholder: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    className?: string
    required?: boolean
    showPasswordToggle?: boolean
    onTogglePassword?: () => void
}) => {
    const [isFocused, setIsFocused] = useState(false)
    const hasValue = value.length > 0

    return (
        <div className="relative">
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`
                    w-full bg-transparent border-0 border-b border-coffee/20 
                    focus:border-coffee outline-none transition-all duration-200
                    pt-4 pb-1 px-0 pr-8 text-coffee font-urbanist text-sm
                    ${className}
                `}
                required={required}
            />
            <label
                htmlFor={id}
                className={`
                    absolute left-0 font-urbanist text-coffee/70 pointer-events-none
                    transition-all duration-200 ease-in-out
                    ${isFocused || hasValue
                    ? 'top-0 text-xs text-coffee'
                    : 'top-4 text-sm'
                }
                `}
            >
                {placeholder}
            </label>
            {showPasswordToggle && (
                <button
                    type="button"
                    onClick={onTogglePassword}
                    className="absolute right-0 top-4 text-coffee/50 hover:text-coffee transition-colors"
                >
                    {type === 'password' ? (
                        <EyeOff className="w-4 h-4" />
                    ) : (
                        <Eye className="w-4 h-4" />
                    )}
                </button>
            )}
        </div>
    )
}

const ResetPasswordPage = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [token, setToken] = useState<string | null>(null)
    const [isValidToken, setIsValidToken] = useState<boolean | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [showFloatingBox, setShowFloatingBox] = useState(true)
    const [currentTip, setCurrentTip] = useState(0)

    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({
        password: '',
        confirmPassword: '',
        general: ''
    })

    const tips = [
        {
            icon: <Lock className="w-5 h-5 text-green-600" />,
            title: "Strong Password Tips",
            description: "Use a mix of uppercase, lowercase, numbers, and special characters for maximum security.",
            bgColor: "bg-green-50",
            borderColor: "border-green-200"
        },
        {
            icon: <Key className="w-5 h-5 text-blue-600" />,
            title: "Password Manager",
            description: "Consider using a password manager to generate and store secure passwords safely.",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200"
        },
        {
            icon: <Shield className="w-5 h-5 text-purple-600" />,
            title: "Keep it Private",
            description: "Never share your password with anyone. VIP-NGO will never ask for your password.",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-200"
        },
        {
            icon: <Zap className="w-5 h-5 text-amber-600" />,
            title: "Quick Tip",
            description: "Your new password will be active immediately after successful reset.",
            bgColor: "bg-amber-50",
            borderColor: "border-amber-200"
        }
    ]

    // Cycle through tips every 8 seconds (only show on main form)
    useEffect(() => {
        if (!showFloatingBox || isLoading || !isValidToken || isSuccess) return

        const interval = setInterval(() => {
            setCurrentTip(prev => (prev + 1) % tips.length)
        }, 8000)

        return () => clearInterval(interval)
    }, [showFloatingBox, isLoading, isValidToken, isSuccess, tips.length])

    // Extract token from URL and validate
    useEffect(() => {
        const tokenParam = searchParams.get('token')
        if (tokenParam) {
            setToken(tokenParam)
            validateToken(tokenParam)
        } else {
            setIsValidToken(false)
            setIsLoading(false)
        }
    }, [searchParams])

    const validateToken = async (tokenToValidate: string) => {
        try {
            // Simulate API call to validate token
            setTimeout(() => {
                // For demo purposes, accept any token that's at least 10 characters
                const isValid = tokenToValidate.length >= 10
                setIsValidToken(isValid)
                setIsLoading(false)
            }, 1500)
        } catch (error) {
            setIsValidToken(false)
            setIsLoading(false)
        }
    }

    const validatePassword = (password: string) => {
        if (password.length < 8) {
            return "Password must be at least 8 characters long"
        }
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
            return "Password must contain at least one uppercase letter, one lowercase letter, and one number"
        }
        return ""
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setErrors({ password: '', confirmPassword: '', general: '' })

        // Validate password
        const passwordError = validatePassword(formData.password)
        if (passwordError) {
            setErrors(prev => ({ ...prev, password: passwordError }))
            return
        }

        // Validate password confirmation
        if (formData.password !== formData.confirmPassword) {
            setErrors(prev => ({ ...prev, confirmPassword: "Passwords don't match" }))
            return
        }

        setIsSubmitting(true)

        try {
            // Simulate API call to reset password
            setTimeout(() => {
                setIsSuccess(true)
                setIsSubmitting(false)

                // Redirect to login after 3 seconds
                setTimeout(() => {
                    router.push('/authentication/signin')
                }, 3000)
            }, 2000)
        } catch (error) {
            setErrors(prev => ({ ...prev, general: 'Failed to reset password. Please try again.' }))
            setIsSubmitting(false)
        }
    }

    const currentTipData = tips[currentTip]

    // Loading state
    if (isLoading) {
        return (
            <section className="min-h-screen relative overflow-hidden">
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

                <div className="relative z-10 min-h-screen flex items-center justify-start pl-8 md:pl-16 lg:pl-24">
                    <Card className="w-full max-w-lg bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-2xl p-10">
                        <CardContent className="p-6 text-center">
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
                            <h1 className="text-xl font-bold font-urbanist text-coffee mb-4">
                                Validating Reset Link...
                            </h1>
                            <div className="flex justify-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-coffee"></div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        )
    }

    // Invalid token state
    if (!isValidToken) {
        return (
            <section className="min-h-screen relative overflow-hidden">
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

                <div className="relative z-10 min-h-screen flex items-center justify-start pl-8 md:pl-16 lg:pl-24">
                    <Card className="w-full max-w-lg bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-2xl p-10">
                        <CardContent className="p-6 text-center">
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

                            <h1 className="text-xl font-bold font-urbanist text-coffee mb-4">
                                Invalid Reset Link
                            </h1>

                            <Alert className="mb-6 border-red-200 bg-red-50 py-3">
                                <AlertCircle className="h-4 w-4 text-red-600" />
                                <AlertDescription className="text-red-800 font-urbanist text-sm">
                                    This password reset link is invalid or has expired. Please request a new one to continue.
                                </AlertDescription>
                            </Alert>

                            <VipButton className="w-full mb-4">
                                <Link href="/authentication/forgot-password">
                                    Request New Reset Link
                                </Link>
                            </VipButton>

                            <Link
                                href="/authentication/signin"
                                className="text-sm text-coffee hover:text-coffee/80 font-urbanist"
                            >
                                Back to Login
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </section>
        )
    }

    // Success state
    if (isSuccess) {
        return (
            <section className="min-h-screen relative overflow-hidden">
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

                <div className="relative z-10 min-h-screen flex items-center justify-start pl-8 md:pl-16 lg:pl-24">
                    <Card className="w-full max-w-lg bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-2xl p-10">
                        <CardContent className="p-6 text-center">
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

                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                            </div>

                            <h1 className="text-xl font-bold font-urbanist text-coffee mb-4">
                                Password Reset Successful!
                            </h1>

                            <p className="text-sm text-gray-600 font-urbanist mb-6 leading-relaxed">
                                Your password has been successfully updated. You can now sign in with your new password.
                            </p>

                            <Alert className="mb-6 bg-green-50 border-green-200">
                                <Shield className="h-4 w-4 text-green-600" />
                                <AlertDescription className="text-green-800 font-urbanist text-xs">
                                    Redirecting to login page in a few seconds...
                                </AlertDescription>
                            </Alert>

                            <VipButton className="w-full">
                                <Link href="/authentication/signin">
                                    Continue to Login
                                </Link>
                            </VipButton>
                        </CardContent>
                    </Card>
                </div>
            </section>
        )
    }

    // Main reset password form
    return (
        <section className="min-h-screen relative overflow-hidden">
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

            <div className="relative z-10 min-h-screen flex items-center justify-start pl-8 md:pl-16 lg:pl-24">
                <Card className="w-full max-w-lg bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-2xl p-10">
                    <CardContent className="p-6">
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

                        <h1 className="text-xl font-bold font-urbanist text-coffee text-left mb-2">
                            Create New Password
                        </h1>

                        <p className="text-left text-sm text-gray-600 font-urbanist mb-6 leading-relaxed">
                            Enter your new password below. Make sure it's strong and secure.
                        </p>

                        {errors.general && (
                            <Alert className="mb-4 border-red-200 bg-red-50 py-2">
                                <AlertCircle className="h-3 w-3 text-red-600" />
                                <AlertDescription className="text-red-800 font-urbanist text-xs">
                                    {errors.general}
                                </AlertDescription>
                            </Alert>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* New Password */}
                            <div>
                                <AnimatedInput
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="New Password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                                    required
                                    showPasswordToggle={true}
                                    onTogglePassword={() => setShowPassword(!showPassword)}
                                />
                                {errors.password && (
                                    <p className="text-xs text-red-600 font-urbanist mt-1">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <AnimatedInput
                                    id="confirmPassword"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Confirm New Password"
                                    value={formData.confirmPassword}
                                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                                    required
                                    showPasswordToggle={true}
                                    onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
                                />
                                {errors.confirmPassword && (
                                    <p className="text-xs text-red-600 font-urbanist mt-1">
                                        {errors.confirmPassword}
                                    </p>
                                )}
                            </div>

                            {/* Password Requirements */}
                            <Alert className="border-blue-200 bg-blue-50 py-2">
                                <Shield className="h-3 w-3 text-blue-600" />
                                <AlertDescription className="text-blue-800 font-urbanist text-xs">
                                    Password must be at least 8 characters with uppercase, lowercase, and number.
                                </AlertDescription>
                            </Alert>

                            {/* Submit Button */}
                            <div className="w-full mt-8">
                                <VipButton
                                    className="w-full"
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                            Updating Password...
                                        </>
                                    ) : (
                                        'Update Password'
                                    )}
                                </VipButton>
                            </div>

                            {/* Back to Login Link */}
                            <div className="text-center mt-6">
                                <Link
                                    href="/authentication/signin"
                                    className="text-sm text-coffee hover:text-coffee/80 font-urbanist"
                                >
                                    Back to Login
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

            {/* Floating Tips Box - Bottom Right (only show on main form) */}
            {showFloatingBox && isValidToken && !isLoading && !isSuccess && (
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

export default ResetPasswordPage