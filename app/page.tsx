import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import Team from "@/components/home/Team";
import CTASection from "@/components/home/CTASection";
import ScrollTransformSection from '@/components/home/ScrollTransformSection';
import SDLCSection from '@/components/home/SDLCSection';

export default function Home() {
  return (
    <div className="lg:px-4 ">
      <ScrollTransformSection>
        <Hero />
      </ScrollTransformSection>
      {/* <Stats /> */}
      <Services />
      <SDLCSection />
      <Testimonials />
      <Team />
      <CTASection />
    </div>
  );
}