import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";
import FooterLogo from "../assets/pictures/lokeswara_logo.png";
import footerBackground from "../assets/pictures/Feature_bg.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 relative z-10">
      {/* Background Footer */}
      <img
        src={footerBackground}
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-20 lg:object-center sm:object-top"
      />

      {/* Konten Footer */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-15 py-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo dan Deskripsi */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:max-w-md"
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={FooterLogo}
                alt="Logo Lokeswara Unggas"
                className="size-20"
              />
              <p className="text-2xl font-bold">
                Lokeswara<span className="text-green-700">Unggas</span>
              </p>
            </div>
            <p className="text-gray-600 mb-5 leading-relaxed">
              Kami menyediakan DOC ayam berkualitas tinggi dengan dukungan
              konsultasi peternakan profesional.
            </p>

            {/* Sosial Media Icon */}
            <div className="flex gap-3">
              {[
                {
                  link: "https://www.facebook.com/profile.php?id=100077995201697",
                  icon: <FaFacebook />,
                  color: "hover:bg-blue-600",
                },
                {
                  link: "https://www.instagram.com/lokeswara_unggas_pertama",
                  icon: <FaInstagram />,
                  color: "hover:bg-pink-600",
                },
                {
                  link: "https://www.tiktok.com/@lokeswaraunggas?is_from_webapp=1&sender_device=pc",
                  icon: <FaTiktok />,
                  color: "hover:bg-black",
                },
                {
                  link: "https://wa.me/6283145541070",
                  icon: <FaWhatsapp />,
                  color: "hover:bg-green-600",
                },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`flex justify-center items-center bg-gray-200 rounded-full size-10 text-gray-600 ${item.color} hover:text-white transition-all duration-300`}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigasi Footer */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row flex-wrap gap-10 md:gap-16"
          >
            <div>
              <p className="text-md font-semibold mb-3">Perusahaan</p>
              <ul className="flex flex-col gap-2 text-gray-600 hover:cursor-pointer">
                <li className="hover:text-blue-600 transition-all duration-200">
                  Tentang Kami
                </li>
                <li className="hover:text-blue-600 transition-all duration-200">
                  Hubungi Kami
                </li>
              </ul>
            </div>
            <div>
              <p className="text-md font-semibold mb-3">Media Sosial</p>
              <ul className="flex flex-col gap-2 text-gray-600 hover:cursor-pointer">
                <li className="hover:text-green-600 transition-all duration-200">
                  <a href="https://wa.me/6283145541070">WhatsApp</a>
                </li>
                <li className="hover:text-blue-600 transition-all duration-200">
                  <a href="https://www.facebook.com">Facebook</a>
                </li>
                <li className="hover:text-pink-600 transition-all duration-200">
                  <a href="https://www.instagram.com">Instagram</a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 mt-3 text-sm">
          © {new Date().getFullYear()} Lokeswara Unggas. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
