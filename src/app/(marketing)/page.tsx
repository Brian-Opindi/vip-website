import Hero from "@/app/(marketing)/hero";
import About from "@/app/(marketing)/about";
import Pricing from "@/app/(marketing)/pricing";
import Footer from "@/app/(marketing)/footer";
import Launch from "@/app/(marketing)/launch";
import Testimonials from "@/app/(marketing)/testimonials";
import Features from "@/app/(marketing)/features";

export default function Home() {
  return (
      <>
        <Hero />
        <About />
        <Features />
        <Testimonials />
        <Launch />
        <Pricing />
        <Footer />
      </>
  );
}
