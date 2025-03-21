import React from "react";
import { motion } from "framer-motion";
import ScheduleImage from "../assets/pictures/image.svg";

const PrimarcySection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 py-16 md:py-24"
      id="keunggulan"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Gambar Kiri */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full"
        >
          <img
            src={ScheduleImage}
            alt="DOC Ayam Import"
            className="w-full h-auto "
          />
        </motion.div>

        {/* Teks Kanan */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full flex flex-col justify-center"
        >
          <p className="text-orange-500 font-semibold">Keunggulan Kami</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6 leading-snug">
            Optimalkan Peternakan Anda dengan{" "}
            <span className="text-green-600">DOC Ayam Lokal Unggulan</span>
          </h2>
          <p className="mb-5 text-gray-600 leading-relaxed">
            DOC ayam Kampung kami menghadirkan solusi modern bagi peternakan
            Anda. Dengan daya tahan yang lebih baik, pertumbuhan lebih cepat,
            dan adaptasi sempurna terhadap berbagai kondisi lingkungan, kami
            siap mendukung bisnis peternakan Anda lebih sukses.
          </p>

          {/* Tombol CTA */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.facebook.com/profile.php?id=100077995201697&sk=photos"
            target="_blank"
            className="font-semibold text-lg"
          >
            Lihat Produk Kami →
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PrimarcySection;
