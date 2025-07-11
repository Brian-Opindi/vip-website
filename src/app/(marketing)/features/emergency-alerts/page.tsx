import React from 'react'
import Hero from "@/app/(marketing)/features/emergency-alerts/hero";
import Features from "@/app/(marketing)/features/emergency-alerts/features";
import Footer from "@/app/(marketing)/footer";

const Page = () => {
    return (
        <div className="min-h-screen bg-white">
            <Hero />
            <Features />
            <Footer />
        </div>
    )
}

export default Page