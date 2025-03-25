import { useRef, useContext } from "react";
// import VariableProximity from "./VariableProximity";
import sejal from "../assets/photo.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import chetana from "../assets/chetu.jpg";
import WhatIDo from "./WhatIDo";
import Experience from "./Experience";
import { motion } from "framer-motion";
import Projects from "./Projects";
import { useTheme } from "../context/ThemeProvider";

const HEro = () => {
  const containerRef = useRef(null);
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-20 justify-between">
      <div className="flex flex-row justify-between items-center">
        <div className="flex text-start w-full flex-col gap-5">
          <h1 className="text-4xl font-semibold">Hello..</h1>
          <div className="flex flex-row gap-5 items-center">
            <div className="text-black bg-black w-[50px] h-[3px]"></div>
            <p className="text-2xl">I am Chetana More</p>
          </div>
          <h2 className="text-[48px]">Full Stack Developer</h2>
          <a target="_blank" href="https://drive.google.com/file/d/1rzk4cknVtGRGaj0qc-dMgTUWuFseKb5S/view" download="Chetana_Resume.pdf">
            <button
              type="button"
              className="flex justify-start w-[40%] gap-2 items-center shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            >
              Download CV
              <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </button>
          </a>
        </div>
        <div className="w-[100%] h-[50%]">
          <img src={sejal} alt="" srcset="" className="object-contain " />
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-5">
          <h1 className="text-xl font-normal text-start">
            I am Chetana Ravindra More, a skilled Full Stack Developer with
            expertise in MERN Stack and a passion for building scalable,
            high-performance web applications. With a strong foundation in HTML,
            CSS, JavaScript, React.js, Angular.js, Node.js, Express.js, and
            MongoDB, I have hands-on experience in both frontend and backend
            development.
          </h1>
          <button className=" flex flex-row gap-2 justify-start text-4xl">
            Lets Talk <FaArrowRightLong />
          </button>
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
        <div className="flex flex-col gap-1 justify-between items-center">
          <h1 className="text-5xl">Who am I?</h1>
          <div className="w-[220px] h-[2px] text-black bg-black"></div>
        </div>
        <div className="flex flex-row items-start gap-20 text-start">
          <div className="flex flex-col justify-center items-center gap-5">
            <img src={chetana} alt="" srcset="" className="w-[70%]" />
          </div>

          <div className="w-full flex flex-col justify-center text-start items-start gap-10">
            <div className="relative flex flex-col gap-5">
              <div>
                <h2 className="text-xl font-semibold">About Me</h2>

                <h1 className="text-3xl font-bold mt-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent transition-transform duration-500 ease-in-out hover:skew-x-6">
                  Chetana More Details
                </h1>

                <p className="mt-4 transition-all duration-500 ease-in-out hover:tracking-wide hover:text-blue-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quidem voluptatem tempore possimus, saepe magni dicta
                  explicabo aliquam officiis odio facilis quae fugit inventore?
                  Nesciunt amet necessitatibus dignissimos praesentium
                  temporibus et!
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="relative p-4 border-l-4 border-blue-500 overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-500 scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                  <div className="relative z-10 text-black group-hover:text-white transition-colors duration-500">
                    <h1 className="text-lg font-semibold">Name</h1>
                    <p className="text-base">Chetana More</p>
                  </div>
                </div>
                <div className="relative p-4 border-l-4 border-blue-500 overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-500 scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                  <div className="relative z-10 text-black group-hover:text-white transition-colors duration-500">
                    <h1 className="text-lg font-semibold">Email</h1>
                    <p className="text-base">chetnamore791@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="relative p-4 border-l-4 border-blue-500 overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-500 scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                  <div className="relative z-10 text-black group-hover:text-white transition-colors duration-500">
                    <h1 className="text-lg font-semibold">Address</h1>
                    <p className="text-base">Kharadi, Pune</p>
                  </div>
                </div>
                <div className="relative p-4 border-l-4 border-blue-500 overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-500 scale-x-0 origin-left transition-transform duration-500 ease-in-out group-hover:scale-x-100"></div>
                  <div className="relative z-10 text-black group-hover:text-white transition-colors duration-500">
                    <h1 className="text-lg font-semibold">Phone No</h1>
                    <p className="text-base">7796768390</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              class="flex justify-between w-[28%] gap-2 items-center shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-[#DDD] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            >
              Download CV
              <svg
                class="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  class="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <div>
        <Experience />
      </div> */}

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
