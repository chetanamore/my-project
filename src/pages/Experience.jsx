import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Skills from "./ExperienceTabs/Skills";
import InternshipExperience from "./ExperienceTabs/InternshipExperience";
import Education from "./ExperienceTabs/Education";
import Certifications from "./ExperienceTabs/Certificates";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("certifications");

  const tabs = [
    // { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "education", label: "Education" },
    { id: "internship", label: "Internship Experience" },
    
  ];

  // Content Data
  const tabContent = {
    // skills: (
    //   <motion.div
    //     key="skills"
    //     initial={{ opacity: 0, x: -50 }}
    //     animate={{ opacity: 1, x: 0 }}
    //     exit={{ opacity: 0, x: 50 }}
    //     transition={{ duration: 0.5 }}
    //   >
    //     <div>
    //         <Skills/>
    //     </div>
    //   </motion.div>
    // ),
    education: (
      <motion.div
        key="education"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >

        <div>
            <Education/>
        </div>
        
      </motion.div>
    ),
    internship: (
      <motion.div
        key="internship"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <div>
            <InternshipExperience/>
        </div>
      </motion.div>
    ),
    certifications: (
      <motion.div
        key="certifications"
        initial={{ opacity: 0, rotateX: 90 }}
        animate={{ opacity: 1, rotateX: 0 }}
        exit={{ opacity: 0, rotateX: 90 }}
        transition={{ duration: 0.5 }}
      >
        <div>
            <Certifications/>
        </div>
      </motion.div>
    ),
  };

  return (
    <div className="py-24 px-6">
     

      {/* Tabs */}
      <div className="relative justify-center items-center grid grid-cols-2 sm:flex gap-4 sm:border-b-2 mt-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="relative px-4 py-2 text-lg font-semibold transition-all duration-300 
              dark:text-gray-600 hover:text-primary focus:outline-none"
          >
            {tab.label}
            {/* Active Tab Indicator */}
            {activeTab === tab.id && (
              <motion.div
                layoutId="underline"
                className="hidden sm:block absolute left-0 right-0 -bottom-1 h-1 bg-primary rounded-full"
              />
            )}
          </button>
        ))}
      </div>
       {/* Animated Content Section */}
       <AnimatePresence mode="wait">
        {tabContent[activeTab]}
      </AnimatePresence>
    </div>
  );
};

export default Experience;
