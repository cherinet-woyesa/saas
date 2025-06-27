// src/app/page.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Pricing from "@/components/Pricing";
import Footer from '@/components/Footer';
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";



export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />    
      <Testimonials />
      <Pricing />
      <Blog />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
