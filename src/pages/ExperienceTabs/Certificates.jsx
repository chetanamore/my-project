import React from "react";
import { motion } from "framer-motion";
import frontend from "../../assets/Front-End-Certificated.jpg";
import java from "../../assets/java.png";
import py from "../../assets/py.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import sql from "../../assets/sql1.png";

const certificationsData = [
  {
    title: "Front-End Development",
    platform: "Simplilearn",
    year: "2024",
    description:
      "Completed a Front-End course, covering React, Node.js, Express, and MongoDB.",
    img: frontend, // Replace with actual image path
  },
  {
    title: "JavaScript",
    platform: "Great Learning",
    year: "2021",
    description:
      "This certification focuses on JavaScript fundamentals, data structures, and algorithms. It helps you develop problem-solving skills for technical interviews and real-world applications.",
    img: javascript,
  },
  {
    title: "JavaScript (Basic)",
    platform: "HackerRank",
    year: "2023",
    description:
      "In-depth learning of ES6+, async programming, and advanced JavaScript concepts. Completed a Javascript course with HTML, CSS, and JavaScript fundamentals.",
    img: java,
  },

  {
    title: "CSS(Basic)",
    platform: "HakerRank",
    year: "2021",
    description:
      "This certification validates proficiency in CSS3, including responsive design, animations, flexbox, grid, and best practices for modern web development.",
    img: css,
  },
  {
    title: "Python",
    platform: "hakerRank",
    year: "2022",
    description:
      "This certification covers the fundamentals of Python programming, including data structures, object-oriented programming, and working with web APIs. It is designed for beginners to gain hands-on experience in solving real-world problems using Python.",
    img: py,
  },

  {
    title: "Database Management (DBMS)",
    platform: "hakerRank",
    year: "2021",
    description:
      "Learned SQL, NoSQL, and relational database management systems.",
    img: sql,
  },
];

const Certifications = () => {
  return (
    <div className="p-8 bg-gray-900 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-6">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {certificationsData.map((cert, index) => (
          <motion.div
            key={index}
            className="relative w-80 h-52 rounded-xl shadow-xl cursor-pointer"
            whileHover={{ scale: 1.05, rotateY: 10 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            {/* Card Front - Certificate Image */}
            <div className="absolute inset-0 bg-white text-white rounded-xl flex justify-center items-center overflow-hidden">
              <motion.img
                src={cert.img}
                alt={cert.title}
                className="w-full h-full object-cover rounded-xl"
                whileHover={{ scale: 1.1 }}
              />
            </div>

            {/* Card Back - Details */}
            <motion.div
              className="absolute inset-0 bg-gray-800 text-white rounded-xl p-6 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500"
              whileHover={{ opacity: 1, rotateY: 1 }}
            >
              <h3 className="text-xl font-bold">{cert.title}</h3>
              <p className="text-sm">
                {cert.platform} | {cert.year}
              </p>
              <p className="text-sm text-center mt-2">{cert.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
