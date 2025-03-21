import React from "react";
import { motion } from "framer-motion";
import collage from "../assets/pictures/collage_chicken.png";

const SupportSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 py-16 md:py-24"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Bagian Teks */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full flex flex-col justify-center"
        >
          <p className="text-red-500 font-semibold">Keunggulan Kami</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6 leading-snug">
            Dukungan Konsultasi Peternakan Profesional
          </h2>
          <p className="mb-5 text-gray-600 leading-relaxed">
            Kami tidak hanya menyediakan DOC ayam berkualitas, tapi juga
            memberikan dukungan penuh dalam setiap langkah peternakan Anda.
          </p>
        </motion.div>

        {/* Bagian Gambar dengan Clip Path */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full"
        >
          <img
            src={collage}
            alt="Promo Spesial DOC Ayam"
            className="w-full h-auto rounded-3xl custom-clip"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SupportSection;
