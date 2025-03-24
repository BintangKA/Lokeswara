import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiSolidPackage } from "react-icons/bi";
import PackingImg from "../assets/pictures/collase_antar.png";
import { motion } from "framer-motion";

// Variasi animasi untuk elemen
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const DeliverySection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Bagian Kiri */}
        <motion.div className="md:w-3/5" variants={fadeInUp} custom={0}>
          <h1 className="font-bold text-3xl md:text-4xl mb-4">
            Packing & Pengiriman Aman
          </h1>
          <p className="text-gray-600">
            Kami memastikan DOC sampai ke tangan Anda dalam kondisi sehat dan
            selamat.
          </p>

          {/* Ikon dan Deskripsi */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 mt-10 md:mt-20 max-w-lg">
            {/* Card 1 */}
            <motion.div
              variants={fadeInUp}
              custom={1}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full shadow-md">
                <BiSolidPackage className="size-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold">Packing Aman</h1>
              <p className="text-sm text-gray-600">
                Setiap DOC dikemas dengan standar keamanan tinggi agar tetap
                sehat.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeInUp}
              custom={2}
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full shadow-md">
                <CiDeliveryTruck className="size-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold">Pengiriman Cepat</h1>
              <p className="text-sm text-gray-600">
                Armada khusus memastikan pengiriman DOC tepat waktu dan aman.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bagian Kanan - Gambar */}
        <motion.div
          className="md:w-2/5"
          variants={fadeInUp}
          custom={3}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={PackingImg}
            alt="Proses Penetasan DOC"
            className="w-full rounded-lg shadow-md transition-transform duration-300"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default DeliverySection;
