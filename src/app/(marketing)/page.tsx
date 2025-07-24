import Hero from "@/app/(marketing)/hero";
import About from "@/app/(marketing)/about";
import Pricing from "@/app/(marketing)/pricing";
import Footer from "@/app/(marketing)/footer";
import Launch from "@/app/(marketing)/launch";
import Testimonials from "@/app/(marketing)/testimonials";
import Features from "@/app/(marketing)/features";
import Why from "@/app/(marketing)/why";
import MoreFeatures from "@/app/(marketing)/more-features";
import HowItWorks from "@/app/(marketing)/how-it-works";
import Overview from "@/app/(marketing)/overview";
import Cta from "@/app/(marketing)/cta";

export default function Home() {
  return (
      <>
        <Hero />
        <About />
          <Overview />
          <Cta />
          <MoreFeatures />
        <Testimonials />
        <Pricing />
        <Footer />
      </>
  );
}
