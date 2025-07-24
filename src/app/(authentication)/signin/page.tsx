'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Enhanced Animated Input Component with error states
const AnimatedInput = ({
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  required = false,
  error = '',
}: {
  id: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  error?: string;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;
  const hasError = error.length > 0;

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
                    w-full bg-transparent border-0 border-b transition-all duration-200
                    focus:outline-none pt-4 pb-1 px-0 text-coffee font-urbanist text-sm
                    ${
                      hasError
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-coffee/20 focus:border-coffee'
                    }
                    ${className}
                `}
        required={required}
      />
      <label
        htmlFor={id}
        className={`
                    absolute left-0 font-urbanist pointer-events-none
                    transition-all duration-200 ease-in-out
                    ${hasError ? 'text-red-500' : 'text-coffee/70'}
                    ${isFocused || hasValue ? 'top-0 text-xs' : 'top-4 text-sm'}
                `}
      >
        {placeholder}
      </label>
      {hasError && (
        <p className="text-red-500 text-xs mt-1 font-urbanist">{error}</p>
      )}
    </div>
  );
};

const SigninPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  // Debug logging helper
  const debugLog = (message: string, data?: unknown) => {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log(`[SignIn] ${message}`, data || '');
    }
  };

  // Error handling helper
  const handleError = (error: unknown, context: string) => {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error';

    // Log error in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error(`[SignIn Error] ${context}:`, error);
    }

    // In production, you might want to send this to an error tracking service
    // Example: Sentry.captureException(error, { extra: { context } });

    return errorMessage;
  };

  const validateForm = () => {
    const newErrors = { email: '', password: '', general: '' };

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({ email: '', password: '', general: '' });

    try {
      // Debug log for development
      debugLog('User signin attempt', { email: formData.email });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // TODO: Implement actual authentication logic
      // const response = await signIn(formData)
      // if (response.success) {
      //     debugLog('Signin successful', { userType: response.user.type });
      //     // Redirect based on user type
      //     router.push(response.user.type === 'ngo' ? '/dashboard/ngo' : '/dashboard/donor')
      // } else {
      //     setErrors(prev => ({
      //         ...prev,
      //         general: response.message || 'Invalid email or password. Please try again.',
      //     }));
      // }

      // For now, simulate a successful login
      debugLog('Signin simulation completed');
    } catch (error) {
      // Handle and log the error
      handleError(error, 'signin process');

      setErrors(prev => ({
        ...prev,
        general: 'Invalid email or password. Please try again.',
      }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background GIF */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/vip2.gif"
          alt="VIP Background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Floating Signin Form - Center Left */}
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
            <h1 className="text-xl font-bold font-urbanist text-coffee text-left mb-1">
              Login to your VIP account
            </h1>

            {/* Signup Link */}
            <p className="text-left text-xs text-gray-600 font-urbanist mb-6">
              Don&apos;t have an account?{' '}
              <Link
                href="/authentication/get-started"
                className="text-coffee hover:text-coffee/80 font-medium"
              >
                Sign up
              </Link>
            </p>

            {/* General Error Message */}
            {errors.general && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm font-urbanist">
                  {errors.general}
                </p>
              </div>
            )}

            {/* Signin Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <AnimatedInput
                id="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={e =>
                  setFormData({ ...formData, email: e.target.value })
                }
                error={errors.email}
                required
              />

              {/* Password */}
              <AnimatedInput
                id="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={e =>
                  setFormData({ ...formData, password: e.target.value })
                }
                error={errors.password}
                required
              />

              {/* Forgot Password Link */}
              <div className="text-right">
                <Link
                  href="/authentication/forgot-password"
                  className="text-xs text-coffee hover:text-coffee/80 font-urbanist"
                >
                  Forgot your password?
                </Link>
              </div>

              {/* Login Button */}
              <div className="w-full mt-6">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Signing in...' : 'Login'}
                </Button>
              </div>

              {/* Horizontal Line */}
              <hr className="border-gray-200 my-6" />

              {/* reCAPTCHA Notice */}
              <p className="text-xs text-gray-500 font-urbanist text-left leading-tight">
                Protected by reCAPTCHA and subject to VIP{' '}
                <Link
                  href="/privacy"
                  className="text-coffee hover:text-coffee/80"
                >
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link
                  href="/terms"
                  className="text-coffee hover:text-coffee/80"
                >
                  Terms of Service
                </Link>
                .
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SigninPage;
