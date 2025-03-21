import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../assets/pictures/Hero_picture.png";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-30 pb-6 px-4 sm:px-6 lg:px-8 font-inter"
      id="home"
    >
      {/* Bagian Kiri - Teks */}
      <div className="w-full md:w-2/3 space-y-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex items-center py-1 gap-2 w-fit px-4 rounded-full bg-yellow-50 hover:bg-yellow-100 transition-colors cursor-pointer group"
        >
          <span className="group-hover:scale-110 transition-transform">🐥</span>
          <span className="text-sm font-medium">DOC Ayam Berkualitas Import</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Kembangkan Bisnis Peternakan Anda{" "}
          <span className="text-green-600 relative inline-block">
            Dengan DOC Ayam Lokal
          </span>{" "}
          Terbaik
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="text-gray-600 text-lg md:text-xl max-w-xl"
        >
          Dapatkan DOC ayam Kampung berkualitas tinggi untuk memastikan hasil panen maksimal dan keuntungan lebih besar.
        </motion.p>
      </div>

      {/* Bagian Kanan - Gambar */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8, type: "spring", stiffness: 100 }}
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
      >
        <div className="relative">
          <img src={HeroImage} alt="DOC Ayam Import" />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
