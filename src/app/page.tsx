import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WebProjectsSection from '@/components/WebProjectsSection';
import MobileAppsSection from '@/components/MobileAppsSection';
import TechStackSection from '@/components/TechStackSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-sky-500 selection:text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WebProjectsSection />
      <MobileAppsSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
