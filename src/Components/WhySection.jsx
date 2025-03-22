import React from "react";
import { motion } from "framer-motion";
import Feature_background from "/src/assets/pictures/feature_bg.png";
import quality_icon from "../assets/pictures/quality_icon.jpg";
import productivity_icon from "../assets/pictures/productivy_icon.jpg";
import weather_icon from "../assets/pictures/weather_icon.png";

// Variasi animasi untuk card
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

const WhySection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 py-16 relative"
    >
      {/* Background Image */}
      <img
        src={Feature_background}
        alt="Background Feature"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 lg:object-center sm:object-top"
      />

      {/* Title Section */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Kenapa Memilih DOC Ayam Lokal Kami?
        </h2>
        <p className="text-sm text-gray-600">
          Kami menghadirkan solusi unggul bagi peternakan Anda dengan kualitas
          ayam yang lebih sehat, adaptif, dan produktif.
        </p>
      </div>

      {/* Features Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {/* Feature 1 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
          className="flex flex-col p-4 md:p-6 items-center bg-white rounded-xl shadow-lg transition-transform cursor-pointer"
        >
          <div className="w-32 h-32 mb-4 flex items-center justify-center bg-blue-400 rounded-full shadow-md">
            <img
              src={quality_icon}
              alt="Kualitas Ayam"
              className="w-24 h-24 rounded-full"
            />
          </div>
          <h2 className="text-xl font-medium mb-2">Kualitas Unggul</h2>
          <p className="text-gray-500 text-center">
            DOC ayam kampung kami dipilih dari bibit unggul dengan daya tahan
            tubuh lebih kuat dan pertumbuhan optimal.
          </p>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
          className="flex flex-col p-4 md:p-6 items-center bg-white rounded-xl shadow-lg transition-transform cursor-pointer"
        >
          <div className="w-32 h-32 mb-4 flex items-center justify-center bg-blue-400 rounded-full shadow-md">
            <img
              src={productivity_icon}
              alt="Produktivitas Tinggi"
              className="w-24 h-24 rounded-full"
            />
          </div>
          <h2 className="text-xl font-medium mb-2">Produktivitas Tinggi</h2>
          <p className="text-gray-500 text-center">
            Ayam kami mampu tumbuh lebih cepat dan menghasilkan daging
            berkualitas tinggi dengan efisiensi pakan yang lebih baik.
          </p>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
          className="flex flex-col p-4 md:p-6 items-center bg-white rounded-xl shadow-lg transition-transform cursor-pointer"
        >
          <div className="w-32 h-32 mb-4 flex items-center justify-center bg-blue-400 rounded-full shadow-md">
            <img
              src={weather_icon}
              alt="Adaptasi Cuaca"
              className="w-24 h-24 rounded-full"
            />
          </div>
          <h2 className="text-xl font-medium mb-2">Adaptasi Cuaca</h2>
          <p className="text-gray-500 text-center">
            DOC ayam kami mampu beradaptasi dengan iklim lokal, cocok untuk
            segala kondisi cuaca.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhySection;
