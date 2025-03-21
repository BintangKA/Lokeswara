import React from "react";
import { motion } from "framer-motion";
import service_bg from "../assets/pictures/Service_bg.png";

// Data layanan
const services = [
  {
    icon: "🛠️",
    title: "Persiapan Kandang",
    description:
      "Kami selalu menjaga agar kandang bersih, memiliki ventilasi baik, dan suhu yang sesuai agar DOC ayam nyaman.",
  },
  {
    icon: "🥚",
    title: "Pemberian Pakan",
    description:
      "Kami menggunakan pakan bernutrisi tinggi sesuai usia ayam untuk mendukung pertumbuhan maksimal.",
  },
  {
    icon: "💧",
    title: "Manajemen Air Minum",
    description:
      "Kami memastikan ayam mendapatkan air bersih dan cukup untuk menjaga kesehatan dan daya tahan tubuh.",
  },
  {
    icon: "🩺",
    title: "Pemantauan Kesehatan",
    description:
      "Kami melakukan vaksinasi dan cek rutin agar ayam terhindar dari penyakit serta tumbuh optimal.",
  },
];

const ServicesSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full relative shadow-lg"
    >
      {/* Background Layanan */}
      <img
        src={service_bg}
        alt="Background Layanan"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 lg:object-center sm:object-top"
      />

      {/* Konten Layanan */}
      <section className="py-20 container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
          {/* Bagian Kiri */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/3 w-full text-center md:text-left"
          >
            <h2 className="font-bold text-3xl md:text-4xl mb-6 text-gray-700 leading-snug">
              Proses Kami Melakukan Pemeliharaan DOC Ayam
            </h2>
            <p className="text-gray-600 text-lg mb-4 md:w-4/5">
              Cara pemeliharaan kami agar DOC ayam tumbuh sehat, cepat besar,
              dan siap panen lebih cepat.
            </p>
          </motion.div>

          {/* Bagian Kanan - Kartu Layanan */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 grid-cols-1 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-200"
              >
                <div className="text-4xl mb-3 animate-bounce-slow">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesSection;
