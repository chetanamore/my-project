import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Khandesh College Institute of Management & Research, Jalgaon",
    university: "North Maharashtra University, Jalgaon",
    duration: "2023 - 2025",
    description:
      "Currently pursuing MCA with a focus on Full Stack Development and Software Engineering.",
  },
  {
    degree: "Bachelor of Computer Science (BSc CS)",
    institution: "Trimurti Education Society’s Arts & Science College, Sakri ",
    university: "North Maharashtra University, Jalgaon",
    duration: "2019 - 2022",
    description:
      "Graduated with a specialization in Computer Science, covering programming, DBMS, and Web Development.",
  },
];

const Education = () => {
  return (
    // <div className="p-8 dark:bg-gray-900 min-h-screen flex flex-col items-center">
    //   <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
    //   <div className="relative w-full max-w-4xl">
    //     {/* Vertical Timeline */}
    //     <div className="absolute left-4 md:left-1/2 w-1 bg-gradient-to-b from-primary to-blue-500 h-full"></div>

    //     {/* Education Cards */}
    //     <div className="flex flex-col gap-10">
    //       {educationData.map((edu, index) => (
    //         <motion.div
    //           key={index}
    //           className={`relative p-6 bg-gray-800 text-white rounded-lg shadow-lg md:w-1/2
    //                       ${index % 2 === 0 ? "md:ml-0 md:self-start" : "md:mr-0 md:self-end"}`}
    //           initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
    //           animate={{ opacity: 1, x: 0 }}
    //           transition={{ delay: index * 0.2, duration: 0.5 }}
    //           whileHover={{ scale: 1.05 }}
    //         >
    //           <div className={`absolute top-6 w-8 h-8 rounded-full bg-primary
    //                           ${index % 2 === 0 ? "-left-10 md:-left-12" : "-right-10 md:-right-12"}`}></div>
    //           <h3 className="text-xl font-semibold">{edu.degree}</h3>
    //           <p className="text-secondary">{edu.institution}</p>
    //           <p className="text-gray-400">{edu.duration}</p>
    //           <p className="mt-2 text-gray-300">{edu.description}</p>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="p-6 sm:p-8 dark:bg-gray-900 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
      <div className="relative w-full max-w-4xl">
        {/* Vertical Timeline */}
        <div className="hidden sm:block absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-gradient-to-b from-primary to-blue-500 h-full"></div>

        {/* Education Cards */}
        <div className="flex flex-col gap-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`relative p-6 bg-gray-800 text-white rounded-lg shadow-lg w-full sm:w-1/2 
                        ${index % 2 === 0 ? "sm:self-start" : "sm:self-end"}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`absolute top-6 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary 
                            ${
                              index % 2 === 0
                                ? "-left-6 sm:-left-10"
                                : "-right-6 sm:-right-10"
                            }`}
              ></div>
              <h3 className="text-lg sm:text-xl font-semibold">{edu.degree}</h3>
              <p className="text-secondary">{edu.institution}</p>
              <p className="text-gray-400">{edu.duration}</p>
              <p className="mt-2 text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
