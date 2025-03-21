import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiX, HiMenu } from "react-icons/hi";
import NavbarLogo from "../assets/pictures/lokeswara_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Daftar menu
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Tujuan", href: "#tujuan" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Testimoni", href: "#testimoni" },
  ];

  // Tutup menu saat klik link di mobile
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm"
    >
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1 cursor-pointer">
          <img src={NavbarLogo} alt="Logo Lokeswara Unggas" className="size-20" />
          <p className="text-2xl font-bold">
            Lokeswara<span className="text-green-700">Unggas</span>
          </p>
        </a>

        {/* Tombol Menu Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <HiX className="size-6" /> : <HiMenu className="size-6" />}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1 }}
              className="list-none"
            >
              <a
                href={link.href}
                className="relative hover:text-blue-600 after:block after:h-0.5 after:bg-blue-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Menu Mobile */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden bg-white border-t border-gray-100 py-4 shadow-md ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="container mx-auto px-4 space-y-3">
          {navLinks.map((link, index) => (
            <motion.li
              key={index}
              whileHover={{ x: 10 }}
              className="list-none"
            >
              <a
                href={link.href}
                className="block text-left px-4 hover:text-blue-600"
                onClick={handleLinkClick} // Nutup menu pas klik
              >
                {link.name}
              </a>
            </motion.li>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
