import React from 'react'
import SmoothScroll from "@/components/SmoothScroll";

interface MarketingLayoutProps {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
    return (
            <main>
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </main>
    )
}

export default MarketingLayout