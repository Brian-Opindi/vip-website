import React from 'react'
import Footer from "@/app/(marketing)/footer";
import Hero from "@/app/(marketing)/features/geofencing/hero";
import Features from "@/app/(marketing)/features/geofencing/features";
import Plans from "@/app/(marketing)/plans";
import Benefits from "@/app/(marketing)/features/geofencing/benefits";

const Geofencing = () => {
    return (
        <>
        <div className="min-h-screen">
            <Hero />
            <Features />
            <Benefits />
            <Plans />
        </div>
        <Footer />
            </>
    )
}

export default Geofencing