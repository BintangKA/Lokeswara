import React from "react";
import { motion } from "framer-motion";
import PurposeImg from "../assets/pictures/PurposeImg.png";

const PurposeSection = () => {
  return (
    <section className="w-full bg-yellow-50 py-16 px-4 sm:px-6 mt-5 lg:px-8" id="tujuan">
      <div className="max-w-6xl mx-auto">
        {/* Flex Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:justify-between md:items-start gap-10"
        >
          {/* Left Section */}
          <div className="md:w-1/3">
            <p className="text-sm text-green-600 font-medium mb-2">TUJUAN KAMI</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Meningkatkan Kualitas Peternakan Dengan Ayam Lokal
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Kami berkomitmen menyediakan ayam kampung berkualitas untuk meningkatkan hasil panen dan mendukung peternak lokal agar lebih berkembang.
            </p>
          </div>

          {/* Right Section with Cards and Image */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:gap-6">
              {/* Card 1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-4 flex-1 p-4 rounded-xl transition-all"
              >
                <p className="text-3xl animate-pulse">🐔</p>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Ayam Berkualitas Tinggi</h3>
                  <p className="text-gray-600">
                    Kami menyediakan ayam kampung dengan kualitas terbaik untuk hasil ternak yang lebih sehat dan produktif.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-start gap-4 flex-1 p-4 rounded-xl transition-all"
              >
                <p className="text-3xl animate-pulse">🌍</p>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Adaptasi Global</h3>
                  <p className="text-gray-600">
                    Ayam kampung kami sudah terbukti mampu beradaptasi dengan iklim lokal, sehingga cocok untuk peternakan Anda.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <img
                src={PurposeImg}
                alt="Tujuan Peternakan"
                className="w-full rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Back to Top Link */}
        <div className="text-center mt-8">
          <a
            href="#top"
            className="text-green-700 font-semibold hover:underline"
          >
            Kembali ke Atas ↑
          </a>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
