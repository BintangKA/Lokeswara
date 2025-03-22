import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-5 right-5 z-50"
    >
      <motion.a
        href="https://wa.me/6283145541070"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center bg-green-500 rounded-full size-16 text-white hover:bg-green-600 transition-all duration-300"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -10, 0, -5, 0] }} // Efek bounce lebih realistis
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "easeInOut",
        }}
      >
        <FaWhatsapp className="size-8" />
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppButton;
