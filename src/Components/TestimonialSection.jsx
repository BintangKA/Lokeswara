import React from "react";
import { motion } from "framer-motion";
import testi1 from "../assets/pictures/testi 1.png";
import testi2 from "../assets/pictures/testi 2.png";
import testi3 from "../assets/pictures/testi 3.png";

// Data testimoni
const testimonials = [
  {
    name: "Joni",
    role: "Peternak ayam kampung",
    image: testi2,
    review:
      "DOC ayam Kampung dari sini benar-benar berkualitas! Pertumbuhan lebih cepat dan daya tahan kuat. Panen saya naik tahun ini.",
  },
  {
    name: "Ranu",
    role: "Pengusaha ayam pedaging dan indukan",
    image: testi1,
    review:
      "Saya sempat ragu, tapi setelah mencoba, hasilnya luar biasa. Ayam lebih sehat dan produktivitas peternakan meningkat pesat.",
  },
  {
    name: "Adi",
    role: "Peternak Pemula",
    image: testi3,
    review:
      "Sebagai pemula, saya merasa sangat terbantu. DOC ayamnya mudah dirawat, tumbuh cepat, dan hasil panennya memuaskan.",
  },
];

const TestimonialSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-16 px-4 max-w-7xl mx-auto"
      id="testimoni"
    >
      {/* Judul Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold md:text-4xl mb-4 text-gray-900">
          Apa Kata Pelanggan DOC Kami
        </h2>
      </div>

      {/* Card Testimoni */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-6 max-w-sm text-center hover:shadow-xl transition-all duration-300"
          >
            <motion.img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <h3 className="text-xl font-semibold text-gray-800">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
            <p className="text-gray-600 italic">"{testimonial.review}"</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default TestimonialSection;
