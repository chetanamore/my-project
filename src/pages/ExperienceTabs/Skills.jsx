import React from "react";
import { motion } from "framer-motion";
import js from "../../assets/js.png";
import react from "../../assets/reactimg.png";
import node from "../../assets/node.jpg";
import mongo from "../../assets/mongo.jpg";
import css from "../../assets/css.jpeg";
import Tailwind from "../../assets/tailwind.jpg";
import express from "../../assets/express.png";
import git from "../../assets/git.png";

const skills = [
  { name: "JavaScript", icon: js },
  { name: "React.js", icon: react },
  { name: "Node.js", icon: node },
  { name: "MongoDB", icon: mongo },
  { name: "CSS", icon: css },
  { name: "Tailwind CSS", icon: Tailwind },
  { name: "Express.js", icon: express },
  { name: "Git & GitHub", icon: git },
];

const Skills = () => {
  return (
    <div className="p-8 dark:bg-gray-900 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-6">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="relative p-6 dark:bg-gray-800 border text-white 
                      flex flex-col items-center justify-center shadow-xl 
                      cursor-pointer group transition-all duration-300 rounded-br-[50px] rounded-tl-[50px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Animated Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 
                        opacity-0 group-hover:opacity-20 transition-all duration-300 
                        rounded-xl blur-lg"
            ></motion.div>

            <img src={skill.icon} alt="" />
            <p className="mt-3 text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
