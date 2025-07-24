import React from 'react'

const MoreFeatures = () => {
    return (
        <section className="py-16 px-4 h-screen">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-12 h-full">
                    {/* Column 1 - Icon section top, content bottom */}
                    <div className="flex-1 flex flex-col justify-center">
                        {/* Icon Section */}
                        <div className="relative mb-8">
                            <div className="bg-vanilla rounded-2xl p-8 relative">
                                {/* Corner Circle Icon */}
                                <div className="absolute -top-3 -left-3 w-12 h-12 bg-coffee rounded-full flex items-center justify-center shadow-lg z-10">
                                    <span className="text-white text-xl">🔒</span>
                                </div>
                                {/* Main Icon/GIF */}
                                <div className="flex items-center justify-center h-32">
                                    <div className="w-20 h-20 bg-coffee/10 rounded-full flex items-center justify-center">
                                        <span className="text-4xl">🛡️</span>
                                    </div>
                                </div>
                                <p className="text-center text-sm text-coffee/70 mt-4">Security First</p>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="space-y-4">
                            <h3 className="text-2xl text-center font-semibold font-wix-madefor-display text-coffee dark:text-vanilla">
                                Advanced Protection
                            </h3>
                            <p className="text-gray-600 text-center dark:text-white text-md font-urbanist leading-relaxed">
                                Safety with real-time monitoring, instant alerts, and comprehensive protection protocols.
                            </p>
                        </div>
                    </div>

                    {/* Separator 1 */}
                    <div className="hidden lg:flex items-center">
                        <div className="w-px h-150 bg-coffee/20"></div>
                    </div>

                    {/* Column 2 - Content top, icon section bottom */}
                    <div className="flex-1 flex flex-col justify-center">
                        {/* Content Section */}
                        <div className="space-y-4 mb-8">
                            <h3 className="text-2xl text-center font-semibold font-wix-madefor-display text-coffee dark:text-vanilla">
                                Smart Connectivity
                            </h3>
                            <p className="text-gray-600 text-center dark:text-white text-md font-urbanist leading-relaxed">
                                Intelligent communication systems that keep everyone informed and coordinated.
                            </p>
                        </div>

                        {/* Icon Section */}
                        <div className="relative flex-1">
                            <div className="bg-teal-100 rounded-2xl p-8 relative h-full">
                                {/* Corner Circle Icon */}
                                <div className="absolute -top-3 -left-3 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center shadow-lg z-10">
                                    <span className="text-white text-xl">📡</span>
                                </div>
                                {/* Main Icon/GIF */}
                                <div className="flex items-center justify-center h-32">
                                    <div className="w-20 h-20 bg-teal-600/10 rounded-full flex items-center justify-center">
                                        <span className="text-4xl">🌐</span>
                                    </div>
                                </div>
                                <p className="text-center text-sm text-teal-600/70 mt-4">Always Connected</p>
                            </div>
                        </div>
                    </div>

                    {/* Separator 2 */}
                    <div className="hidden lg:flex items-center">
                        <div className="w-px h-150 bg-coffee/20"></div>
                    </div>

                    {/* Column 3 - Two rows with gif left, content right */}
                    <div className="flex-1 flex flex-col justify-center space-y-8">
                        {/* Row 1 */}
                        <div className="flex items-center space-x-6">
                            {/* GIF Section */}
                            <div className="flex-shrink-0">
                                <div className="bg-green-100 rounded-xl p-4 relative">
                                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center shadow-md z-10">
                                        <span className="text-white text-sm">⚡</span>
                                    </div>
                                    <div className="w-16 h-16 bg-green-600/10 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">🚀</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-2">
                                <h4 className="text-lg font-semibold font-urbanist text-coffee dark:text-vanilla">
                                    Instant Response
                                </h4>
                                <p className="text-gray-600 dark:text-white font-urbanist text-sm leading-relaxed">
                                    Lightning-fast emergency response with automated protocols that activate
                                    within seconds of threat detection.
                                </p>
                            </div>
                        </div>

                        {/* Horizontal Separator */}
                        <div className="w-full h-px bg-coffee/20"></div>

                        {/* Row 2 */}
                        <div className="flex items-center space-x-6">
                            {/* GIF Section */}
                            <div className="flex-shrink-0">
                                <div className="bg-blue-100 rounded-xl p-4 relative">
                                    <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-md z-10">
                                        <span className="text-white text-sm">🎯</span>
                                    </div>
                                    <div className="w-16 h-16 bg-blue-600/10 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">📍</span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 space-y-2">
                                <h4 className="text-lg font-semibold font-urbanist text-coffee dark:text-vanilla">
                                    Precise Location
                                </h4>
                                <p className="text-gray-600 dark:text-white font-urbanist text-sm leading-relaxed">
                                    Advanced GPS tracking with indoor positioning capabilities for
                                    accurate location sharing when it matters most.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MoreFeatures