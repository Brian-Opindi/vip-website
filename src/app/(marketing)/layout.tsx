import React from 'react'
import SmoothScroll from "@/components/SmoothScroll";
import {CookieConsentProvider} from "@/components/providers/cookie-consent-provider";

interface MarketingLayoutProps {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
    return (
            <main>
                <SmoothScroll>
                        <CookieConsentProvider
                            config={{
                                companyName: "Your Company Name",
                                privacyPolicyUrl: "/privacy-policy",
                                cookiePolicyUrl: "/cookie-policy",
                            }}
                        >
                        {children}
                    </CookieConsentProvider>
                </SmoothScroll>
            </main>
    )
}

export default MarketingLayout