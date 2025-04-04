import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

const Footer = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className={`relative w-full py-10 text-center transition-colors duration-500 ${
        theme === "light" ? "bg-gray-200 text-black" : "bg-gray-900 text-white"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex justify-center gap-6 mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.a
          href="https://www.linkedin.com/in/chetana-more-7a8938278/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#0077B5" }}
          className="text-2xl transition-transform"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          href="https://github.com/chetanamore"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#333" }}
          className="text-2xl transition-transform"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="mailto:chetnamore791@gmail.com"
          whileHover={{ scale: 1.2, color: "#D44638" }}
          className="text-2xl transition-transform"
        >
          <FaEnvelope />
        </motion.a>
      </motion.div>

      <motion.p
        className="text-lg font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        © {new Date().getFullYear()} Chetana More. All Rights Reserved.
      </motion.p>

      {/* Scroll to Top Button */}
      {isVisible && (
        <motion.button
          className="fixed bottom-6 right-6 p-3 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 transition-all"
          onClick={scrollToTop}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}
    </motion.footer>
  );
};

export default Footer;
