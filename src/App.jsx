import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import PurposeSection from "./Components/PurposeSection";
import WhySection from "./Components/WhySection";
import PrimarcySection from "./Components/PrimarcySection";
import SupportSection from "./Components/SupportSection ";
import ServicesSection from "./Components/ServiceSection";
import HatcherySection from "./Components/HatcherySection";
import DeliverySection from "./Components/DeliverySection";
import TestimonialSection from "./Components/TestimonialSection";
import Footer from "./Components/Footer";
import Whatsapp from "./Components/Whatsapp";
import "./App.css";

function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div
        className="absolute -top-28 -right-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full
      blur-[80px] -z-10"
      ></div>
      <div className="overflow-hidden">
        <Whatsapp />
        <Navbar />
        <Hero />
        <PurposeSection />
        <WhySection />
        <PrimarcySection />
        <SupportSection />
        <ServicesSection />
        <HatcherySection />
        <DeliverySection/>
        <TestimonialSection />
        <Footer />
      </div>
    </main>
  );
}

export default App;
