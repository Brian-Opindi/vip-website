
import React, { ReactNode, useMemo } from 'react';
import { ReactLenis } from 'lenis/react';
import type { LenisOptions } from 'lenis';

/**
 * Props for the SmoothScroll component.
 */
export interface SmoothScrollProps {
    /** Children to be wrapped with smooth scrolling */
    children: ReactNode;
    /** Additional Lenis options to override defaults */
    options?: Partial<LenisOptions>;
    /** Optional className for styling the root element */
    className?: string;
}

/**
 * SmoothScroll wraps its children with Lenis-powered smooth scrolling.
 *
 * @param children - React children to render inside the scroll container.
 * @param options - Optional Lenis options to override defaults.
 * @param className - Optional className for the root element.
 */
const SmoothScroll: React.FC<SmoothScrollProps> = ({
                                                       children,
                                                       options,
                                                       className,
                                                   }) => {
    // Memoize options to prevent unnecessary re-renders
    const mergedOptions = useMemo<LenisOptions>(
        () => ({
            duration: 3.0,
            gestureOrientation: 'vertical',
            touchMultiplier: 2,
            infinite: false,
            ...options,
        }),
        [options]
    );

    return (
        <ReactLenis root options={mergedOptions} className={className}>
            {children}
        </ReactLenis>
    );
};

export default SmoothScroll;