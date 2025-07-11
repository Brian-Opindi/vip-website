import React from 'react'

const Hero = () => {
    return (
        <section className="bg-coffee text-white py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-wix-madefor-display font-bold mb-6">
                        Safety Communities Network
                    </h1>
                    <p className="text-lg mb-8 text-white font-urbanist">
                        Connect with neighbors, share safety information, and build stronger, more secure communities. Together, we create safer neighborhoods for everyone.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-coffee px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors">
                            Join Your Community
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-coffee transition-colors">
                            Explore Features
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero
