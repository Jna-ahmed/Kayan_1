import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import CTASection from "@/components/cta-section"
import GallerySection from "@/components/gallery-section"
import PartnershipsSection from "@/components/partnerships-section"
import PartnershipForm from "@/components/partnership-form"
import RegistrationForm from "@/components/registration-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white overflow-y-auto">
      <Header />
      
    
      
      <HeroSection />
      
      <div className="flex flex-col">
        <AboutSection />
        <CTASection />
        <GallerySection />
        <PartnershipsSection />
        <PartnershipForm />
        <RegistrationForm />
      </div>
      
      <Footer />
    </main>
  )
}
