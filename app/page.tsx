import { HeroSection } from "@/components/layout/sections/hero";
import { Sponsors } from "@/components/layout/sections/sponsors";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { FeaturesSection } from "@/components/layout/sections/features";
import { TestimonialsSection } from "@/components/layout/sections/testimonials";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FooterSection } from "@/components/layout/sections/footer";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <Sponsors/>
      <BenefitsSection/>
      <FeaturesSection/>
      <TestimonialsSection/>
      <ContactSection/>
      <FAQSection/>
      <FooterSection/>
    </>
  );
}
