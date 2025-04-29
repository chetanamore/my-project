import { img } from "framer-motion/client";
import React, { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
// import "../pages/hero.css"

import frontend from "../assets/front-end.jpg";
import responsive from "../assets/responsive.jpg";
import backend from "../assets/backend.jpeg";
import deploy from "../assets/deploy.jpeg";
import { FaGithub, FaLinkedin, FaPause, FaPlay } from "react-icons/fa6";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const information = [
  {
    id: 1,
    img: frontend,
    title: "Full-Stack Web Development",
    description:
      "I specialize in building dynamic web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
    github: "https://github.com/yourgithub",
    linkedin: "https://linkedin.com/in/yourlinkedin",
    videoPreview: "public/videos/v.mp4", // Sample video URL
    previewThumbnail: "/api/placeholder/400/320"
  },
  {
    id: 2,
    img: responsive,
    title: "Responsive Web Design",
    description:
      "I create pixel-perfect, mobile-friendly designs using HTML, CSS, Tailwind CSS, and Bootstrap to ensure seamless user experiences.",
    github: "https://github.com/yourgithub",
    linkedin: "https://linkedin.com/in/yourlinkedin",
  },
  {
    id: 3,
    img: backend,
    title: "Backend Development",
    description:
      "I develop secure and scalable backend APIs using Node.js, Express.js, and MongoDB, integrating authentication and real-time features.",
    github: "https://github.com/yourgithub",
    linkedin: "https://linkedin.com/in/yourlinkedin",
  },
  {
    id: 4,
    img: deploy,
    title: "Hosting & Deployment",
    description:
      "I deploy websites and applications using platforms like Vercel, Netlify, and AWS, ensuring high performance and security.",
    github: "https://github.com/yourgithub",
    linkedin: "https://linkedin.com/in/yourlinkedin",
  },
];

const WhatIDo = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-50px" });

  const toggleVideoPlayback = () => {
    const videoElement = document.getElementById("project-preview-video");
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-10 justify-between">
        <div className="flex flex-col gap-5 justify-between items-center">
          <div className="flex flex-col gap-1 justify-between items-center">
            <h1 className="text-2xl sm:text-5xl">My Full Stack Services!</h1>
            <div className="w-[220px] h-[2px] text-black bg-black"></div>
          </div>
          <p className="p-2 sm:w-1/2 text-center">
            Building a product that is highly visual and interactive and the one
            that attract the attention of your end-user requires you to hire a
            Full-stack Developer with a substantial front-end expertise and a
            considerable back-end knowledge. If that is the case with you, I
            might just be the right choice. Find below listed the awesome
            services that I provide as a Full Stack Web & Mobile Apps Developer.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 justify-center items-center">
          {information.map((info, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="dark:bg-white light:bg-black shadow-lg rounded-2xl p-6 text-center w-80 
               transition-all duration-300 ease-in-out border border-gray-500
               hover:shadow-lg hover:shadow-gray-600 cursor-pointer flex flex-col gap-5"
            >
              <div>
                <h2 className="text-xl font-semibold mt-4">{info.title}</h2>
                <p className="text-gray-500">{info.description}</p>
              </div>

              <div
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedCard(info);
                }}
              >
                <div className="relative inline-flex items-center justify-center gap-4 group">
                  <div className="absolute inset-0 duration-1000 opacity-60 transitiona-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                  <a
                    role="button"
                    className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                  >
                    View more
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 10 10"
                      height="10"
                      width="10"
                      fill="none"
                      className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
                    >
                      <path
                        d="M0 5h7"
                        className="transition opacity-0 group-hover:opacity-100"
                      ></path>
                      <path
                        d="M1 1l4 4-4 4"
                        className="transition group-hover:translate-x-[3px]"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Modal for showing selected card details */}
          <AnimatePresence>
            {selectedCard && (
              // <motion.div
              //   className="fixed left-8 inset-0 bg-black bg-opacity-50 z-[99999] flex justify-center items-center"
              //   initial={{ opacity: 0 }}
              //   animate={{ opacity: 1 }}
              //   exit={{ opacity: 0 }}
              //   onClick={(e) => {
              //     e.preventDefault();
              //     setSelectedCard(null);
              //   }}
              //   style={{ position: "fixed" }}
              // >
              //   <motion.div
              //     className="bg-white p-6 rounded-lg shadow-xl w-96 text-center relative"
              //     initial={{ scale: 0.8 }}
              //     animate={{ scale: 1 }}
              //     exit={{ scale: 0.8 }}
              //     onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
              //   >
              //     <button
              //       className="absolute top-2 right-4 text-gray-600 text-2xl"
              //       onClick={(e) => {
              //         e.preventDefault();
              //         setSelectedCard(null);
              //       }}
              //     >
              //       &times;
              //     </button>
              //     {selectedCard.img && (
              //       <img
              //         src={selectedCard.img}
              //         alt={selectedCard.title}
              //         className="w-24 h-24 mx-auto rounded-full"
              //       />
              //     )}

              //     <h2 className="text-xl font-semibold mt-4">
              //       {selectedCard.title}
              //     </h2>

              //     <p className="text-gray-500 mt-2">
              //       {selectedCard.description}
              //     </p>
              //     <div className="mt-4">
              //       {selectedCard.github && (
              //         <a
              //           href={selectedCard.github}
              //           className="text-blue-500 hover:underline"
              //         >
              //           GitHub
              //         </a>
              //       )}
              //       {selectedCard.github && selectedCard.linkedin && " | "}
              //       {selectedCard.linkedin && (
              //         <a
              //           href={selectedCard.linkedin}
              //           className="text-blue-500 hover:underline ml-2"
              //         >
              //           LinkedIn
              //         </a>
              //       )}
              //     </div>
              //   </motion.div>
              //   <h1 className="hello">hello</h1>
              // </motion.div>
              <motion.div
                className="fixed px-5 left-0 top-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex justify-center items-center "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCard(null)}
              >
                <motion.div
                  className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center relative overflow-y-auto h-[500px]"
                  initial={{ scale: 0.8, y: 20 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.8, y: 20 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-all"
                    onClick={() => setSelectedCard(null)}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>

                  {/* Project Image */}
                  <div className="mb-6">
                    <img
                      src={selectedCard.img}
                      alt={selectedCard.title}
                      className="w-32 h-32 mx-auto rounded-full border-4 border-blue-50 shadow-md object-cover"
                    />
                  </div>

                  {/* Project Details */}
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {selectedCard.title}
                  </h2>

                  <p className="text-gray-600 mb-6 px-4">
                    {selectedCard.description}
                  </p>

                  {/* Preview Image */}
                  <div className="mb-6 bg-gray-100 p-3 rounded-lg relative">
                    <div className="relative">
                      {/* Video element */}
                      <video
                        id="project-preview-video"
                        className="w-full h-auto rounded-md shadow-sm"
                        poster={selectedCard.previewThumbnail}
                        src={selectedCard.videoPreview}
                        preload="metadata"
                        onEnded={() => setIsPlaying(false)}
                      />

                      {/* Play/Pause overlay button */}
                      <button
                        onClick={toggleVideoPlayback}
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-opacity"
                      >
                        <div className="bg-white p-3 rounded-full shadow-lg">
                          {isPlaying ? (
                            <FaPause className="w-6 h-6 text-gray-800" />
                          ) : (
                            <FaPlay className="w-6 h-6 text-gray-800" />
                          )}
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex justify-center space-x-6 mt-6">
                    {selectedCard.github && (
                      <a
                        href={selectedCard.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group"
                      >
                        <FaGithub className="w-5 h-5 mr-2 group-hover:text-blue-600" />
                        <span>GitHub</span>
                      </a>
                    )}

                    {selectedCard.linkedin && (
                      <a
                        href={selectedCard.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group"
                      >
                        <FaLinkedin className="w-5 h-5 mr-2 group-hover:text-blue-600" />
                        <span>LinkedIn</span>
                      </a>
                    )}

                    {selectedCard.demoLink && (
                      <a
                        href={selectedCard.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group"
                      >
                        <ExternalLink className="w-5 h-5 mr-2 group-hover:text-blue-600" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {["React", "Tailwind", "Framer Motion", "JavaScript"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
