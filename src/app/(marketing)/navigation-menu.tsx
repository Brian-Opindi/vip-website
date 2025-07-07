"use client"

import * as React from "react"
import Link from "next/link"
import {CircleIcon, Moon, Sun} from "lucide-react"
import { useTheme } from "next-themes"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from "next/image";
import { Button } from "@/components/ui/button"

const features: { title: string; href: string; description: string }[] = [
    {
        title: "Emergency alerts",
        href: "/why/vip-for-late-night-workers",
        description:
            "Instantly notify your trusted contacts and emergency services with one tap when you need help most.",
    },
    {
        title: "Geofencing",
        href: "/why/vip-for-students",
        description:
            "Set safe zones and get automatic alerts when you enter or leave designated areas for added peace of mind.",
    },
    {
        title: "Safety communities",
        href: "/why/vip-for-travelers",
        description:
            "Connect with verified local safety networks and community responders in your area for immediate assistance.",
    },
    {
        title: "Live tracking",
        href: "/why/vip-for-families",
        description:
            "Share your real-time location with trusted contacts so they always know you're safe and can find you quickly.",
    },
]

const learn: { title: string; href: string; description: string }[] = [
    {
        title: "VIP for late night workers",
        href: "/why/vip-for-late-night-workers",
        description:
            "How VIP can protect you after a late-night shift",
    },
    {
        title: "VIP for Students",
        href: "/why/vip-for-students",
        description:
            "Campus safety and emergency response for students",
    },
    {
        title: "VIP for Travelers",
        href: "/why/vip-for-travelers",
        description:
            "Stay safe while exploring new places and destinations",
    },
    {
        title: "VIP for Families",
        href: "/why/vip-for-families",
        description:
            "Keep your loved ones protected with instant alerts",
    },
    {
        title: "Emergency Response",
        href: "/learn/emergency-response",
        description:
            "Understanding how VIP's emergency system works",
    },
    {
        title: "Safety Tips",
        href: "/learn/safety-tips",
        description:
            "Best practices for personal safety and security",
    },
]

export function NavMenu() {
    const { theme, setTheme } = useTheme()
    return (
        <div className="w-full flex items-center justify-between px-6 py-4">
            {/* Logo - Left Column */}
            <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/images/logos/VIP Logo.png"
                        alt="Logo"
                        width="2994"
                        height="1150"
                        className="w-[120px]"
                    />
                </Link>
            </div>

            {/* Navigation Items - Center Column */}
            <div className="flex-1 flex justify-center">
                <NavigationMenu viewport={false}>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    {features.map((feature) => (
                                        <ListItem
                                            key={feature.title}
                                            title={feature.title}
                                            href={feature.href}
                                        >
                                            {feature.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <div className="flex w-[600px] p-6 gap-6">
                                    {/* Left Side - VIP Background Item */}
                                    <div className="w-1/3">
                                        <NavigationMenuLink asChild>
                                            <Link
                                                className="flex h-full w-full flex-col justify-end rounded-md p-6 no-underline outline-hidden select-none focus:shadow-md bg-cover bg-center bg-no-repeat relative overflow-hidden min-h-[200px]"
                                                style={{ backgroundImage: 'url(/images/vip2.gif)' }}
                                                href="/"
                                            >
                                                {/* Dark Overlay */}
                                                <div className="absolute inset-0 bg-black/50 rounded-md"></div>

                                                {/* Content */}
                                                <div className="relative z-10">
                                                    <CircleIcon className="h-6 w-6 text-white" />
                                                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                                                        VIP
                                                    </div>
                                                    <p className="text-sm leading-tight text-white/80">
                                                        Personal safety at your fingertips. One tap emergency response.
                                                    </p>
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                    </div>

                                    {/* Right Side - Learn Items */}
                                    <div className="w-2/3">
                                        <ul className="grid grid-cols-1 gap-3">
                                            {learn.map((item) => (
                                                <ListItem
                                                    key={item.title}
                                                    title={item.title}
                                                    href={item.href}
                                                >
                                                    {item.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/solutions">Solutions</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/pricing">Pricing</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Buttons - Right Column */}
            <div className="flex items-center space-x-3">
                <Link
                    href="/login"
                    className="text-sm px-4 py-2 text-white font-medium hover:text-gray-300 transition-colors font-urbanist"
                >
                    Sign In
                </Link>
                <Link
                    href="/signup"
                    className="text-sm px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors font-urbanist"
                >
                    Get Started
                </Link>
                <Button
                    variant="outline"
                    className="rounded-full cursor-pointer"
                    size="icon"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </div>
        </div>
    )
}

function ListItem({
                      title,
                      children,
                      href,
                      ...props
                  }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}