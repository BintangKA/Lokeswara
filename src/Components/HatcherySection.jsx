import React from "react";
import { motion } from "framer-motion";
import HatcheryImg from "../assets/pictures/hatchery.PNG";

const HatcherySection = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Kiri - Gambar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <img
            src={HatcheryImg}
            alt="Proses Penetasan DOC"
            className="w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
        {/* Kanan - Deskripsi */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
            Proses Penetasan dan Kualitas DOC
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Kami memastikan setiap DOC menetas dalam kondisi optimal. Setiap
            tahap diawasi ketat, memastikan kesehatan dan daya tahan DOC agar
            tumbuh dengan produktif.
          </p>
          <ul className="text-gray-600 space-y-2">
            <li>✅ Pemantauan suhu dan kelembaban otomatis</li>
            <li>✅ Telur berkualitas dari indukan pilihan</li>
            <li>✅ DOC sehat, lincah, dan siap budidaya</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default HatcherySection;
