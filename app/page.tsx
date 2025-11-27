
import EventPromo from "./components/EventPromo";
import Footer from "./components/Footer";
import HeroSection from "./components/Herosection";
import NavBar from "./components/Navbar";
import PromoMenuGallery from "./components/PromoMenuGallery";
import ServingCountySection from "./components/ServingCountySection";
import StorySection from "./components/StorySection";
import TripleInfoSection from "./components/TripleInfoSection";


export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-black">
      <NavBar />

      <HeroSection />
      <StorySection />
      <PromoMenuGallery />
      


      <ServingCountySection />
      <TripleInfoSection />
      <Footer />


    </div>
  );
}
