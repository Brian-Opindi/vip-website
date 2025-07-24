import Hero from '@/app/(marketing)/hero';
import About from '@/app/(marketing)/about';
import Pricing from '@/app/(marketing)/pricing';
import Footer from '@/app/(marketing)/footer';
import Testimonials from '@/app/(marketing)/testimonials';
import MoreFeatures from '@/app/(marketing)/more-features';
import Overview from '@/app/(marketing)/overview';
import Cta from '@/app/(marketing)/cta';

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
