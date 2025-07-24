"use client"

import {TestimonialMovingCards} from "@/components/vip/testimonial-moving-cards";

const testimonials = [
    {
        quote:
            "The idea of a personal safety app that alerts me to local dangers in real time? That's a game-changer. I've already signed up for early access.",
        name: "Jordan Smith",
        title: "Teacher, Atlanta GA",
        image: "/images/user 1.jpg",
    },
    {
        quote:
            "As a college student who often walks home at night, VIP gives me the kind of peace of mind I didn't know I needed. This is going to be huge.",
        name: "Emily Rodriguez",
        title: "Student, Austin TX",
        image: "/images/user 2.jpg",
    },
    {
        quote:
            "The geofencing feature alone sold me. I want to know when my kids enter or leave high-risk areas. Can't wait for full release.",
        name: "Brandon Lee",
        title: "Father of Two, Los Angeles CA",
        image: "/images/user 3.jpg",
    },
    {
        quote:
            "I work in community outreach, and we've been waiting for a tool like VIP. This will revolutionize how neighborhoods stay informed and protected.",
        name: "Angela Carter",
        title: "Community Organizer, Chicago IL",
        image: "/images/user 4.jpg",
    },
    {
        quote:
            "I joined the VIP presale because safety should be smart and accessible. The early features look promising — I'm excited to see the full app in action.",
        name: "Mike Evans",
        title: "Freelancer, New York NY",
        image: "/images/user 5.jpg",
    },
];


const ClientTestimonials = () => {
    return (
        <section className="h-full" id="testimonials">
            <div className="flex items-center justify-center h-full relative z-10 mt-20 mb-20">
                <div className="mt-5">

                    <TestimonialMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                        className="font-urbanist mt-20"
                    />
                </div>
            </div>
        </section>
    )
}
export default ClientTestimonials