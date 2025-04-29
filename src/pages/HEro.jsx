import { useRef, useContext, useState } from "react";
// import VariableProximity from "./VariableProximity";
import sejal from "../assets/avtar.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import chetana from "../assets/chetu.jpg";
import WhatIDo from "./WhatIDo";
import Experience from "./Experience";
import { AnimatePresence, motion } from "framer-motion";
import Projects from "./Projects";
import { useTheme } from "../context/ThemeProvider";
import Certifications from "./ExperienceTabs/Certificates";
import { Link } from "react-router-dom";
import Skills from "./ExperienceTabs/Skills";

const HEro = () => {
  const containerRef = useRef(null);
  const { theme } = useTheme();
  const [showWorkPage, setShowWorkPage] = useState(false);

  return (
    <div className="flex flex-col gap-20 py-28 pt-36">
      <div className="flex flex-col justify-between items-center">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10">
            <h1 className="text-center font-[Poppins] text-[32px] sm:text-[71px] not-italic font-normal leading-[23px] tracking-[-1.42px]">
              Hello..
            </h1>
            <h3 className="text-center font-[Poppins] text-[32px] sm:text-[71px] not-italic font-normal leading-[23px] tracking-[-1.42px]">
              I am Chetana More
            </h3>
            <h2 className="text-center font-[Poppins] text-[32px] sm:text-[71px] not-italic font-normal leading-[23px] tracking-[-1.42px]">
              Full Stack Developer
            </h2>
          </div>
          <div className="w-[300px] sm:w-[900px]">
            <h1 className="p-2 text-lgsm:text-xl text-center font-normal">
              I am Chetana Ravindra More, a skilled Full Stack Developer with
              expertise in MERN Stack and a passion for building scalable,
              high-performance web applications. With a strong foundation in
              HTML, CSS, JavaScript, React.js, Angular.js, Node.js, Express.js,
              and MongoDB, I have hands-on experience in both frontend and
              backend development.
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Link to="/contact">
              <motion.button
                initial={{ scale: 1 }} // Start at normal size
                whileHover={{ scale: 1.1 }} // Scale up on hover
                transition={{ duration: 0.3 }}
                className="btn"
              >
                Let's Talk
              </motion.button>
            </Link>
          </div>
          <div className="sm:w-[100%] sm:h-[50%] flex flex-col items-center justify-center">
            <motion.img
              src={sejal}
              alt="Sejal"
              initial={{ scale: 1 }} // Start at normal size
              whileHover={{ scale: 1.1 }} // Scale up on hover
              transition={{ duration: 0.3 }} // Quick animation duration
              className="w-[304px] h-[304px] object-cover"
            />
          </div>
        </div>
      </div>
      {/* <motion.div
        className={`flex flex-col lg:flex-row justify-between items-center w-full min-h-screen px-10 py-20 transition-colors duration-500 ${
          theme === "light"
            ? "bg-gray-100 text-gray-900"
            : "bg-gray-900 text-white"
        }`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
       
        <motion.div
          className="flex flex-col gap-6 w-full lg:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl font-extrabold"
            whileHover={{ scale: 1.05 }}
          >
            Hello<span className="text-emerald-500">..</span>
          </motion.h1>

          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-emerald-500 w-12 h-1"></div>
            <p className="text-2xl font-medium">I am Chetana More</p>
          </motion.div>

          <motion.h2
            className="text-5xl font-bold text-emerald-500"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.button
            className="flex items-center gap-3 text-lg px-6 py-3 border-2 rounded-full shadow-lg relative overflow-hidden transition-all duration-500 group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundColor: theme === "light" ? "white" : "#1e293b",
              borderColor: theme === "light" ? "black" : "white",
            }}
          >
            Download CV
            <MdDownload className="text-xl" />
            <span className="absolute inset-0 bg-emerald-500 scale-0 group-hover:scale-150 transition-transform duration-500 z-[-1] rounded-full"></span>
          </motion.button>
        </motion.div>

        
        <motion.div
          className="w-full lg:w-1/3 flex justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={chetana}
            alt="Profile"
            className="rounded-full object-cover w-72 h-72 border-4 border-emerald-500 shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

      
        <motion.div
          className="flex flex-col justify-start items-start gap-5 w-full lg:w-1/3"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p className="text-lg leading-relaxed">
            I am <span className="font-bold">Chetana Ravindra More</span>, a
            skilled Full Stack Developer specializing in the **MERN Stack**. I
            have a strong foundation in frontend and backend technologies,
            building **scalable and high-performance web applications**.
          </motion.p>

          <motion.button
            className="flex items-center gap-3 text-2xl font-medium px-6 py-3 border-2 rounded-full shadow-lg relative overflow-hidden transition-all duration-500 group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundColor: theme === "light" ? "white" : "#1e293b",
              borderColor: theme === "light" ? "black" : "white",
            }}
          >
            Let’s Talk <FaArrowRightLong />
            <span className="absolute inset-0 bg-emerald-500 scale-0 group-hover:scale-150 transition-transform duration-500 z-[-1] rounded-full"></span>
          </motion.button>
        </motion.div>
      </motion.div> */}

      <div className="flex flex-col gap-20 justify-between">
        <AnimatePresence mode="wait">
          {!showWorkPage ? (
            <motion.div
              key="main"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col sm:flex-row items-center gap-20 text-start"
            >
              <div className="flex flex-col justify-center items-center gap-5">
                <img
                  src={chetana} // Replace with actual image
                  alt=""
                  className="w-[50%] rounded-lg"
                />
              </div>

              <div className="w-full flex flex-col justify-center text-start items-start gap-10 p-5">
                <div className="relative flex flex-col gap-5">
                  <h2 className="text-4xl font-bold">
                    What I<span className="font-normal italic"> Bring</span> to
                    the table
                  </h2>
                  <p className="mt-4 hover:tracking-wide hover:text-blue-500">
                    I am passionate about building and innovating in the tech
                    space.
                  </p>
                </div>

                {/* Skills Section */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {[
                    {
                      title: "Passion for Learning",
                      desc: "Building, innovating, and learning every day.",
                    },
                    {
                      title: "Collaboration & Teamwork",
                      desc: "Believing in teamwork to turn ideas into reality.",
                    },
                    {
                      title: "Problem-Solving Mindset",
                      desc: "Every problem is a puzzle waiting to be solved.",
                    },
                    {
                      title: "Hands-on Experience",
                      desc: "Strong hands-on expertise in full-stack development.",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="relative p-4 border-l-4 border-primary overflow-hidden group"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.5 }}
                    >
                      <div className="absolute inset-0 bg-primary scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                      <div className="relative z-10 group-hover:text-white transition-colors duration-500">
                        <h1 className="text-lg font-semibold">{item.title}</h1>
                        <p className="text-base">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Button to Toggle Page */}
                <motion.div
                  className="flex justify-center items-center gap-5 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowWorkPage(true)}
                >
                  <span className="text-lg">Browse My Work</span>
                  <FaArrowRightLong />
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="work"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center gap-10"
            >
              <WhatIDo />
              <motion.button
                className="text-lg text-blue-500 underline"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowWorkPage(false)}
              >
                Go Back
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* <div>
        <Experience />
      </div> */}

      <div>
        <Skills />
      </div>

      <div>
        <Projects />
      </div>
    </div>
  );
};

export default HEro;
