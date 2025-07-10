import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail } from 'lucide-react'
import Image from "next/image";

const Footer = () => {
    return (
        <section className="bg-black p-4 md:p-8 mb-5 ml-5 mr-5 rounded-2xl mx-auto">
            <div className="bg-black">
                {/* Main Footer Content */}
                <div className="px-8 py-12">
                    {/* First Row - 4 Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        {/* Column 1 - Logo and Description */}
                        <div className="space-y-4 relative pr-6">
                            <div className="flex items-center space-x-2">
                                <Image
                                    src="/images/logos/VIP Logo.png"
                                    alt="Logo"
                                    width="2994"
                                    height="1150"
                                    className="w-[120px]"
                                />
                            </div>
                            <p className="text-gray-300 text-sm leading-relaxed font-jost">
                                Your personal safety companion. One tap emergency response that connects you to help when you need it most. Stay safe, stay connected.
                            </p>

                            <div className="hidden lg:block absolute -right-0 top-0 bottom-0 w-px bg-vanilla/20"></div>
                        </div>

                        {/* Column 2 - Company */}
                        <div className="space-y-4 relative px-6">
                            <h3 className="text-white font-bold text-lg font-urbanist">Company</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/about" className="text-gray-300 hover:text-white transition-colors font-jost">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/careers" className="text-gray-300 hover:text-white transition-colors font-jost">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/partner" className="text-gray-300 hover:text-white transition-colors font-jost">
                                        Partner with us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/learn" className="text-gray-300 hover:text-white transition-colors font-jost">
                                        Learn
                                    </Link>
                                </li>
                            </ul>

                            <div className="hidden lg:block absolute -right-0 top-0 bottom-0 w-px bg-vanilla/20"></div>
                        </div>

                        {/* Column 3 - Solutions */}
                        <div className="space-y-4 relative px-6">
                            <h3 className="text-white font-bold text-lg font-urbanist">Solutions</h3>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/solutions/ngo" className="text-gray-300 hover:text-white transition-colors font-jost">
                                        VIP NGO
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/solutions/ai" className="text-gray-300 hover:text-white transition-colors font-jost">
                                        VIP AI
                                    </Link>
                                </li>
                            </ul>

                            {/* Divider 3 */}
                            <div className="hidden lg:block absolute -right-0 top-0 bottom-0 w-px bg-vanilla/20"></div>
                        </div>

                        {/* Column 4 - Contact Us */}
                        <div className="space-y-6 pl-6">
                            <div className="space-y-4">
                                <h3 className="text-white font-bold text-lg font-urbanist">Contact us</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors font-jost flex items-center space-x-2">
                                            <Phone size={16} />
                                            <span>+1 (234) 567-890</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:hello@vip.com" className="text-gray-300 hover:text-white transition-colors font-jost flex items-center space-x-2">
                                            <Mail size={16} />
                                            <span>hello@vip.com</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Follow Us */}
                            <div className="space-y-4">
                                <h3 className="text-white font-bold text-lg font-urbanist">Follow us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                        <Facebook size={20} />
                                    </a>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                        <Twitter size={20} />
                                    </a>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                        <Instagram size={20} />
                                    </a>
                                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Row - Bottom Footer */}
                <div className="bg-white rounded-b-2xl px-8 py-2 -mx-8 -mb-10 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Left - Copyright */}
                        <p className="text-gray-700 text-xs font-urbanist">
                            Copyright © Very Individual Protection Services 2025. All rights reserved.
                        </p>

                        {/* Right - Language Dropdown */}
                        <div className="relative">
                            <select className="bg-transparent border border-white rounded-lg px-4 py-2 text-gray-700 font-jost focus:outline-none focus:ring-2 focus:ring-vanilla focus:border-transparent">
                                <option value="en">English</option>
                                <option value="es">Español</option>
                                <option value="fr">Français</option>
                                <option value="de">Deutsch</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer