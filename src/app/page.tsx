import dynamic from "next/dynamic";
import { NavBar, Footer, WhatsAppFloat } from "@/components/layout";
import { Hero, DealsOfTheDay, BrandIntro, ShopByStyle, WhyChooseUs, ShopByRoom } from "@/components/sections";
import PopularProducts from "@/components/sections/PopularProducts";

// Below-the-fold dynamic imports for optimized initial bundle & faster First Contentful Paint
const TransformationSlider = dynamic(
  () => import("@/components/sections/TransformationSlider")
);
const RealWork = dynamic(
  () => import("@/components/sections/RealWork")
);
const SocialProof = dynamic(
  () => import("@/components/sections/SocialProof")
);
const FAQ = dynamic(
  () => import("@/components/sections/FAQ")
);

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#FAF9F5] min-h-screen">
      <NavBar />
      
      {/* 01 -- Hero Section (High-fidelity matching reference design) */}
      <Hero />

      {/* 01.5 -- Shop By Style Carousel */}
      <ShopByStyle />

      {/* 02 -- Deals of the Day (Flash Promos with Live Timer) */}
      <DealsOfTheDay />

      {/* 03 -- Handcrafted Product Section (Add to Cart & Product Details Navigation) */}
      <PopularProducts />

      {/* 04 -- Why Choose Us (The 4 Core Craftsmanship Pillars) */}
      <WhyChooseUs />

      {/* 05 -- Shop by Room (Asymmetric Grid matching reference design) */}
      <ShopByRoom />

      {/* 06 -- Before & After Room Transformation Slider */}
      <TransformationSlider />

      {/* 07 -- Enter the Studio & Brand Heritage (Founder's Vision) */}
      <BrandIntro />

      {/* 07 -- Real Client Work & Gallery */}
      <RealWork />

      {/* 09 -- Client Reviews (White/Light Luxury Theme) */}
      <SocialProof />

      {/* 10 -- Frequently Asked Questions (Premium & Lag-free Animated) */}
      <FAQ />

      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
