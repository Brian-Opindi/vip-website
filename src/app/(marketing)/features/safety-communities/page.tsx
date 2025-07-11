import React from 'react'
import Features from "@/app/(marketing)/features/safety-communities/features";
import Benefits from "@/app/(marketing)/features/safety-communities/benefits";
import Footer from "@/app/(marketing)/footer";
import Plans from "@/app/(marketing)/plans";
import Hero from "@/app/(marketing)/features/safety-communities/hero";

const Page = () => {
    return (
        <section className="">
            <Hero />
            <Features />
            <Benefits />
            <Plans />
            <Footer />
        </section>
    )
}

export default Page