import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import PurposeSection from "./Components/PurposeSection";
import WhySection from "./Components/WhySection";
import PrimarcySection from "./Components/PrimarcySection";
import SupportSection  from "./Components/SupportSection ";
import ServicesSection from "./Components/ServiceSection";
import TestimonialSection from "./Components/TestimonialSection";
import Footer from "./Components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import "./App.css";


function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div
        className="absolute -top-28 -right-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 rounded-full
      blur-[80px] -z-10"
      ></div>
      <div class="fixed bottom-5 right-5 z-50">
        <a
          href="https://wa.me/6283145541070"
          target="_blank"
          className="flex justify-center items-center bg-green-500 rounded-full size-15 text-white hover:shadow-2xl hover:bg-gray-100 hover:text-green-600 transition-all duration-200"
        >
          <FaWhatsapp className="size-8" />
        </a>
      </div>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <PurposeSection />
        <WhySection />
        <PrimarcySection />
        <SupportSection />
        <ServicesSection />
        <TestimonialSection />
        <Footer />
      </div>
    </main>
  );
}

export default App;
