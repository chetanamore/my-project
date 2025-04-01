import React from "react";
import { motion } from "framer-motion";
import osumare from "../../assets/Osumare.webp";

const internships = [
  {
    company: osumare,
    title: "Osumare Marketing Solutions",
    // role: "Full-Stack Developer Intern",
    // duration: "Jan 2025 - Present",
    // description:
    //   "Developed a recruiter and job seeker dashboard using React & Vite, improving UI/UX and backend integrations.",
  },
  {
    // title: "Osumare Marketing Solutions",
    role: "MERN Stack Developer Intern",
    duration: "July 2024 - Dec 2025",
    description:
      "Worked on frontend and backend development for a job search platform, implementing authentication, APIs, and database operations.",
  },
];

const InternshipExperience = () => {
  return (
    <div className="p-8 dark:bg-gray-900 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-6">
        Internship Experience
      </h2>
      <div className="relative w-full max-w-4xl">
        {/* Vertical Timeline */}
        <div className="absolute left-4 md:left-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 h-full"></div>

        {/* Internship Cards */}
        <div className="flex flex-col gap-10">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              className={`relative p-6 bg-gray-800 text-white rounded-lg shadow-lg md:w-5/12
                          ${
                            index % 2 === 0
                              ? "ml-10 md:ml-0 md:self-start"
                              : "mr-10 md:mr-0 md:self-end"
                          }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute top-6 w-8 h-8 rounded-full bg-blue-500 
                              ${
                                index % 2 === 0
                                  ? "-left-10 md:-left-12"
                                  : "-right-10 md:-right-12"
                              }`}
              ></div>

              <h3 className="text-xl font-semibold">{internship.role}</h3>
              <div className="flex flex-col items-center gap-5">
                <img src={internship.company} alt="" />
                <p className="text-xl font-semibold">{internship.title}</p>
              </div>
              <p className="text-gray-400">{internship.duration}</p>
              <p className="mt-2 text-gray-300">{internship.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipExperience;
