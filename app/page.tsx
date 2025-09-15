import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import BulkOrdersSection from "../components/BulkOrdersSection";
import ProductsSection from "../components/ProductsSection";
import DomeGallery from "../components/DomeGallery";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ParallaxBackground from "../components/ParallaxBackground";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <ParallaxBackground />

      <div className='relative z-10'>
        <HeroSection />
        <AboutSection />
        <BulkOrdersSection />
        <ProductsSection />
        <div style={{ width: "100vw", height: "100vh" }} className='bg-white'>
          <DomeGallery />
        </div>
        <ContactSection />
        <Footer />
      </div>

      {/* WhatsApp Floating Button */}
      <WhatsAppFloat
        phoneNumber='918449431638'
        message="Hello! I'm interested in your school uniforms. Can you please provide more information about bulk orders and pricing?"
      />
    </>
  );
}
