import React from 'react'
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

interface VipButtonProps {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
}

const VipButton: React.FC<VipButtonProps> = ({
                                                 children = "Download VIP app",
                                                 className = "",
                                                 onClick,
                                                 href,
                                                 disabled = false
                                             }) => {
    const buttonContent = (
        <>
            <span
                className="
                    shadow-lg bg-black/60 hover:bg-coffee hover:translate-x-0.5 duration-500
                    flex items-center justify-center rounded-full dark:bg-white/20
                    w-8 h-8 -ml-4 mr-2 transition-all
                "
                aria-hidden="true"
            >
                <ArrowUpRight
                    className="text-vanilla hover:text-vanilla hover:-translate-y-0.5 duration-500 transition-transform"
                    size={20}
                />
            </span>
            {children}
        </>
    );

    if (href) {
        return (
            <Button
                variant="vip"
                className={`p-6 bg-coffee hover:bg-black/60 text-white hover:text-vanilla ${className}`}
                asChild
            >
                <a href={href} target="_blank" rel="noopener noreferrer">
                    {buttonContent}
                </a>
            </Button>
        );
    }

    return (
        <Button
            variant="vip"
            className={`p-6 bg-coffee hover:bg-black/60 text-white hover:text-vanilla ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {buttonContent}
        </Button>
    );
};

export default VipButton;