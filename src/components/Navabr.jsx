// import React from "react";
// import { Menubar } from "primereact/menubar";
// import { Link } from "react-router-dom"; // Import Link for navigation
// import "primereact/resources/themes/lara-light-blue/theme.css"; // Theme
// import "primereact/resources/primereact.min.css"; // Core CSS
// import "primeicons/primeicons.css"; // Icons

// export default function BasicDemo() {
//   const items = [
//     {
//       label: <Link to="/" style={{ color: "#191817", textDecoration: "none" }}>Home</Link>,
//     },
//     {
//       label: <Link to="/about" style={{ color: "#191817", textDecoration: "none" }}>About Me</Link>,
//     },
//     {
//       label: <Link to="/projects" style={{ color: "#191817", textDecoration: "none" }}>Projects</Link>,
//       items: [
//         {
//           label: <Link to="/projects/components" style={{ textDecoration: "none" }}>Components</Link>,
//           icon: "pi pi-bolt",
//         },
//         {
//           label: <Link to="/projects/blocks" style={{ textDecoration: "none" }}>Blocks</Link>,
//           icon: "pi pi-server",
//         },
//         {
//           label: <Link to="/projects/ui-kit" style={{ textDecoration: "none" }}>UI Kit</Link>,
//           icon: "pi pi-pencil",
//         },
//         {
//           label: "Templates",
//           icon: "pi pi-palette",
//           items: [
//             {
//               label: <Link to="/projects/templates/apollo" style={{ textDecoration: "none" }}>Apollo</Link>,
//               icon: "pi pi-palette",
//             },
//             {
//               label: <Link to="/projects/templates/ultima" style={{ textDecoration: "none" }}>Ultima</Link>,
//               icon: "pi pi-palette",
//             },
//           ],
//         },
//       ],
//     },
//     {
//       label: <Link to="/contact" style={{ color: "#191817", textDecoration: "none" }}>Contact</Link>,
//     },
//   ];

//   return (
//     <div className="card">
//       <Menubar
//         model={items}
//         style={{
//           backgroundColor: "#e0deda",
//           borderRadius: "8px",
//           padding: "10px",
//           color: "#191817",
//           fontFamily: "Arial, sans-serif",
//           fontSize: "16px",
//         }}
//       />
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { Sun, Moon } from "lucide-react";
import { MdOutlineWbSunny } from "react-icons/md";
import { GoMoon } from "react-icons/go";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );

  // Toggle Theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    // <motion.nav
    //   className="fixed w-full sm:w-[80%] left-10 sm:left-40 top-10 flex gap-5 sm:gap-24 justify-center items-center py-2 sm:py-5
    //           bg-white dark:bg-opacity-100
    //          shadow-md z-50 sm:px-96 border rounded-full"
    //   initial={{ y: -100 }}
    //   animate={{ y: 0 }}
    //   transition={{ type: "spring", stiffness: 100 }}
    // >
    //   {/* Logo */}
    //   <motion.div
    //     className="text-2xl font-bold text-gray-900 dark:text-white"
    //     whileHover={{ scale: 1.1 }}
    //   >
    //     Chetana.dev
    //   </motion.div>

    //   {/* Nav Links */}
    //   <ul className="hidden md:flex gap-8 text-black text-lg">
    //     {[
    //       { name: "Home", path: "/" },
    //       { name: "Projects", path: "/project" },
    //       { name: "Experience", path: "/experience" },
    //       { name: "Contact", path: "/contact" },
    //     ].map((item, index) => (
    //       <motion.li
    //         key={index}
    //         className="cursor-pointer hover:text-blue-500 dark:hover:text-yellow-400 transition-colors duration-300"
    //         whileHover={{ scale: 1.1 }}
    //         transition={{ type: "spring", stiffness: 200 }}
    //       >
    //         <Link to={item.path}>{item.name}</Link>
    //       </motion.li>
    //     ))}
    //   </ul>

    //   {/* Theme Toggle Button */}
    //   <button
    //     onClick={toggleTheme}
    //     className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
    //   >
    //     {theme === "light" ? (
    //       <GoMoon size={24} />
    //     ) : (
    //       <MdOutlineWbSunny size={24} />
    //     )}
    //   </button>

    //   {/* Mobile Menu Button */}
    //   <motion.div
    //     className="md:hidden cursor-pointer text-gray-700 dark:text-gray-300"
    //     whileTap={{ scale: 0.9 }}
    //   >
    //     ☰
    //   </motion.div>
    // </motion.nav>
    <motion.nav
      className="fixed w-full sm:w-[80%] left-5 sm:left-40 top-5 flex justify-between items-center py-3 px-5 sm:px-20 
      bg-white dark:bg-gray-900 shadow-md z-50 border rounded-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {/* Logo */}
      <motion.div
        className="text-2xl font-bold text-gray-900 dark:text-white"
        whileHover={{ scale: 1.1 }}
      >
        Chetana.dev
      </motion.div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-8 text-lg">
        {[
          { name: "Home", path: "/" },
          { name: "Projects", path: "/project" },
          { name: "Experience", path: "/experience" },
          { name: "Contact", path: "/contact" },
        ].map((item, index) => (
          <motion.li
            key={index}
            className="cursor-pointer hover:text-blue-500 dark:hover:text-yellow-400 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Link to={item.path}>{item.name}</Link>
          </motion.li>
        ))}
      </ul>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
      >
        {theme === "light" ? (
          <GoMoon size={24} />
        ) : (
          <MdOutlineWbSunny size={24} />
        )}
      </button>

      {/* Mobile Menu Button */}
      <motion.div
        className="md:hidden cursor-pointer text-gray-700 dark:text-gray-300"
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </motion.div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 right-5 bg-white dark:bg-gray-900 shadow-lg rounded-lg p-5 w-40 flex flex-col gap-3 md:hidden"
        >
          {[
            { name: "Home", path: "/" },
            { name: "Projects", path: "/project" },
            { name: "Experience", path: "/experience" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-yellow-400"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

// import React, { useState, useEffect, useContext } from "react";
// import { motion } from "framer-motion";
// import  ThemeContext from "../context/ThemeContext";
// import { MdOutlineWbSunny } from "react-icons/md";
// import { GoMoon } from "react-icons/go";

// const Navbar = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <motion.nav
//       className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-4 shadow-md z-50
//                  bg-white dark:bg-gray-900 transition-colors duration-500"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", stiffness: 100 }}
//     >
//       <motion.div className="text-2xl font-bold text-gray-900 dark:text-white" whileHover={{ scale: 1.1 }}>
//         Chetana.dev 🚀
//       </motion.div>

//       <ul className="hidden md:flex gap-8 text-gray-700 dark:text-gray-300 text-lg">
//         {["Home", "About", "Projects", "Experience", "Contact"].map((item, index) => (
//           <motion.li key={index} className="cursor-pointer hover:text-blue-500 dark:hover:text-yellow-400 transition duration-300" whileHover={{ scale: 1.1 }}>
//             {item}
//           </motion.li>
//         ))}
//       </ul>

//       {/* Theme Toggle Button */}
//       <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
//         {theme === "light" ? <GoMoon size={24} /> : <MdOutlineWbSunny size={24} />}
//       </button>
//     </motion.nav>
//   );
// };

// export default Navbar;
