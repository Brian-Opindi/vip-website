import React from 'react'
import SmoothScroll from "@/components/SmoothScroll";
import {CookieConsentProvider} from "@/components/providers/cookie-consent-provider";
import {PreloaderProvider} from "@/components/providers/preloader-provider";

interface MarketingLayoutProps {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: MarketingLayoutProps) => {
    return (
            <main>
                <SmoothScroll>
                    <PreloaderProvider>
                        <CookieConsentProvider
                            config={{
                                companyName: "Your Company Name",
                                privacyPolicyUrl: "/privacy-policy",
                                cookiePolicyUrl: "/cookie-policy",
                            }}
                        >
                        {children}
                    </CookieConsentProvider>
                    </PreloaderProvider>
                </SmoothScroll>
            </main>
    )
}

export default MarketingLayout