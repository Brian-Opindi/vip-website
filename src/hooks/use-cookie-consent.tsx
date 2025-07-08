// app/layout.tsx
import { CookieConsentProvider } from "@/components/providers/cookie-consent-provider";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <CookieConsentProvider
            config={{
                companyName: "Your Company Name",
                privacyPolicyUrl: "/privacy-policy",
                cookiePolicyUrl: "/cookie-policy",
                contactUrl: "/contact",
                logoUrl: "/your-logo.png", // Add your logo path here
            }}
        >
            {children}
        </CookieConsentProvider>
        </body>
        </html>
    );
}