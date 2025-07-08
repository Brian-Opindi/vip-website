"use client"

import React, { useState } from 'react'
import ForgotPasswordForm from '@/components/auth/forgot-password-form'
import PasswordResetConfirmation from '@/components/auth/password-reset-confirmation'

const ForgotPasswordPage = () => {
    const [step, setStep] = useState<'input' | 'sent'>('input')
    const [email, setEmail] = useState('')

    const handleEmailSubmit = (submittedEmail: string) => {
        setEmail(submittedEmail)
        setStep('sent')
        // TODO: Add API call to send reset email
        console.log('Sending reset email to:', submittedEmail)
    }

    const handleResend = () => {
        // TODO: Add API call to resend reset email
        console.log('Resending reset email to:', email)
    }

    const handleBackToInput = () => {
        setStep('input')
    }

    return (
        <>
            {step === 'input' ? (
                <ForgotPasswordForm onSubmit={handleEmailSubmit} />
            ) : (
                <PasswordResetConfirmation
                    email={email}
                    onResend={handleResend}
                    onBackToInput={handleBackToInput}
                />
            )}
        </>
    )
}

export default ForgotPasswordPage