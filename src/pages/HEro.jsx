import { useRef, useContext } from "react";
// import VariableProximity from "./VariableProximity";
import sejal from "../assets/avtar.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import chetana from "../assets/chetu.jpg";
import WhatIDo from "./WhatIDo";
import Experience from "./Experience";
import { motion } from "framer-motion";
import Projects from "./Projects";
import { useTheme } from "../context/ThemeProvider";
import Certifications from "./ExperienceTabs/Certificates";
import { Link } from "react-router-dom";


const HEro = () => {
  const containerRef = useRef(null);
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-20 py-28">
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
          {/* <div className="flex flex-row gap-5 items-center">
            <div className="text-black bg-black w-[50px] h-[3px]"></div> 
          </div> */}
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
              <button className="btn">Let's Talk</button>
            </Link>
          </div>
          <div className="sm:w-[100%] sm:h-[50%] flex flex-col items-center justify-center">
            <img
              src={sejal}
              alt=""
              srcset=""
              className="w-[304px] h-[304px] "
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
        {/* <div className="flex flex-col gap-1 justify-between items-center">
          <h1 className="text-5xl">Who am I?</h1>
          <div className="w-[220px] h-[2px] text-black bg-black"></div>
        </div> */}
        <div className="flex flex-col sm:flex-row items-center gap-20 text-start">
          <div className="flex flex-col justify-center items-center gap-5">
            <img
              src={chetana}
              alt=""
              srcset=""
              className="w-[50%] rounded-lg"
            />
          </div>

          <div className="w-full flex flex-col justify-center text-start items-start gap-10 p-5">
            <div className="relative flex flex-col gap-5">
              <div>
                <h2 className="text-4xl font-bold">
                  What I<span className="font-normal italic"> Bring</span> to
                  the table
                </h2>

                {/* <h1 className="text-3xl font-bold mt-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent transition-transform duration-500 ease-in-out hover:skew-x-6">
                  Chetana More Details
                </h1> */}

                <p className="mt-4 transition-all duration-500 ease-in-out hover:tracking-wide hover:text-blue-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quidem voluptatem tempore possimus, saepe magni dicta
                  explicabo aliquam officiis odio facilis quae fugit inventore?
                  Nesciunt amet necessitatibus dignissimos praesentium
                  temporibus et!
                </p>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="relative p-4 border-l-4 border-primary overflow-hidden group">
                    <div className="absolute inset-0 bg-primary scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                    <div className="relative z-10 light:text-blackk group-hover:text-white transition-colors duration-500">
                      <h1 className="text-lg font-semibold">
                        Passion for Learining
                      </h1>
                      <p className="text-base">
                        Building, innovating, and learning every day.
                      </p>
                    </div>
                  </div>
                  <div className="relative p-4 border-l-4 border-primary overflow-hidden group">
                    <div className="absolute inset-0 bg-primary scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                    <div className="relative z-10 light:text-black group-hover:text-white transition-colors duration-500">
                      <h1 className="text-lg font-semibold">
                        Collabration & Teamwork
                      </h1>
                      <p className="text-base">
                        Believing in teamwork to turn ideas into reality.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="relative p-4 border-l-4 border-primary overflow-hidden group">
                    <div className="absolute inset-0 bg-primary scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                    <div className="relative z-10 light:text-black group-hover:text-white transition-colors duration-500">
                      <h1 className="text-lg font-semibold">
                        Problem Solving Mindset
                      </h1>
                      <p className="text-base">
                        Every problem is a puzzle waiting to be solved.
                      </p>
                    </div>
                  </div>
                  <div className="relative p-4 border-l-4 border-primary overflow-hidden group">
                    <div className="absolute inset-0 bg-primary scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                    <div className="relative z-10 light:text-black group-hover:text-white transition-colors duration-500">
                      <h1 className="text-lg font-semibold">
                        Hands on Expereince
                      </h1>
                      <p className="text-base">
                        Strong hands-on expertise in full-stack development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center gap-5">
                <button className="flex flex-row gap-4 items-center justify-center text-lg">
                  Browse my work
                </button>
                <FaArrowRightLong />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <Experience />
      </div> */}

      <div>
        <Certifications />
      </div>

      <div>
        <WhatIDo />
      </div>

      <div>
        <Projects />
      </div>
    </div>
  );
};

export default HEro;
