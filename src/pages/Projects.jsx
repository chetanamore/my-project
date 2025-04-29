import React from "react";
import { motion } from "framer-motion";
import onilene from "../assets/onilene.png";
import chat from "../assets/chat.png";
import travel from "../assets/tarvel.png";
import { MdOutlineArrowOutward } from "react-icons/md";

const projectsData = [
  {
    title: "Travel World",
    description:
      "Welcome to Travel World, your gateway to exploring the globe’s wonders. Our landing page project showcases expertise in front-end technologies, blending creativity and functionality to inspire wanderlust. Built with HTML, CSS, and JavaScript, it offers a visually engaging experience. Using Bootstrap and Tailwind CSS, we've ensured a responsive, seamless design across all devices. Whether you're dreaming of exotic getaways or planning adventures, Travel World invites you to explore effortlessly. Our site combines innovation, aesthetics, and usability, making every visit an immersive journey. Start your adventure today with a beautifully crafted experience designed to captivate and inspire!",
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js"],
    liveDemo: "https://tourtravelworld.netlify.app/",
    github: "https://github.com/chetanamore/TravelWorlds",
    img: travel,
  },
  {
    title: "Online Shopping Platform 🛒",
    description:
      "Welcome to ShopEase, your go-to destination for a seamless online shopping experience. We offer a wide variety of products, ensuring quality, convenience, and reliability. Our sleek, user-friendly interface makes browsing and purchasing effortless. Whether you're indulging in retail therapy or searching for the perfect gift, ShopEase has it all. Enjoy secure payments, fast delivery, and excellent customer support. Join the ShopEase community today and shop with ease, confidence, and convenience. Experience online shopping like never before with a platform designed to make every purchase simple, smooth, and enjoyable. Start shopping with ShopEase now!",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveDemo: "https://online-shopping-website-07.netlify.app/",
    github: "https://github.com/chetanamore/OnlineShopping",
    img: onilene,
  },
  {
    title: "Chat Application ",
    description:
      "Built a full-stack chat application using the MERN stack with real-time messaging via Socket.io. Implemented JWT authentication for secure access and MongoDB Atlas for scalable data management. Integrated AWS S3/Cloudinary for efficient media storage, reducing image load time by 50%. Enabled real-time online/offline status updates, one-on-one and group chats, and message notifications. Optimized database queries for better performance and improved UX with responsive design. Used Redux for state management and Tailwind CSS for styling. Ensured secure message encryption and error handling for a seamless user experience. Deployed on Vercel and Render for production use.",
    techStack: ["React.js", "Socket.io", "MongoDB", "Node.js"],
    liveDemo: "https://chat-app-tfca.onrender.com/",
    github: "https://github.com/chetanamore/Chat_App",
    img: chat,
  },
  {
    title: "Chat Application ",
    description:
      "Built a full-stack chat application using the MERN stack with real-time messaging via Socket.io. Implemented JWT authentication for secure access and MongoDB Atlas for scalable data management. Integrated AWS S3/Cloudinary for efficient media storage, reducing image load time by 50%. Enabled real-time online/offline status updates, one-on-one and group chats, and message notifications. Optimized database queries for better performance and improved UX with responsive design. Used Redux for state management and Tailwind CSS for styling. Ensured secure message encryption and error handling for a seamless user experience. Deployed on Vercel and Render for production use.",
    techStack: ["React.js", "Socket.io", "MongoDB", "Node.js"],
    liveDemo: "https://chat-app-tfca.onrender.com/",
    github: "https://github.com/chetanamore/Chat_App",
    img: chat,
  },
  // {
  //   title: "Starplify - Recruiter Dashboard 🌟",
  //   description:
  //     "A job management dashboard for recruiters and job seekers with a sleek UI and efficient search and filtering system.",
  //   techStack: ["React.js", "Vite", "Express.js", "MongoDB"],
  //   liveDemo: "https://starplify.com",
  //   github: "https://github.com/yourgithub/starplify",
  //   img: "/images/starplify.png",
  // },
];

const Projects = () => {
  return (
    // <div className="p-10 bg-gray-900 min-h-screen flex flex-col items-center">
    //   <h2 className="text-4xl font-bold text-white mb-8 text-center tracking-wide">
    //     My Projects 💻
    //   </h2>

    //   <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
    //     {projectsData.map((project, index) => (
    //       <motion.div
    //         key={index}
    //         className="relative w-96 rounded-lg bg-gray-800 shadow-lg overflow-hidden flex flex-col justify-between p-4 border-2 border-transparent hover:border-blue-500 transition-all duration-500"
    //         whileHover={{ scale: 1.05 }}
    //         whileInView={{ opacity: 1, y: 0 }}
    //         initial={{ opacity: 0, y: 50 }}
    //         transition={{ duration: 0.6 }}
    //       >
    //         {/* Project Image with Overlay */}
    //         <div className="relative w-full h-48 overflow-hidden">
    //           <motion.img
    //             src={project.img}
    //             alt={project.title}
    //             className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-500 hover:shadow-blue-500/40"
    //             whileHover={{ scale: 1.1 }}
    //           />
    //           <div className="absolute inset-0 bg-black opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
    //         </div>

    //         {/* Project Details */}
    //         <div className="text-white text-center mt-4">
    //           <h3 className="text-xl font-bold">{project.title}</h3>
    //           <p className="text-gray-400 text-sm mt-2">{project.description}</p>
    //           <div className="flex justify-center gap-2 mt-2">
    //             {project.techStack.map((tech, i) => (
    //               <span key={i} className="text-xs bg-blue-600 px-2 py-1 rounded-full">
    //                 {tech}
    //               </span>
    //             ))}
    //           </div>
    //           <div className="mt-4 flex justify-center gap-4">
    //             <a
    //               href={project.liveDemo}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="text-blue-400 hover:underline"
    //             >
    //               Live Demo 🌐
    //             </a>
    //             <span>|</span>
    //             <a
    //               href={project.github}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="text-blue-400 hover:underline"
    //             >
    //               GitHub 🔗
    //             </a>
    //           </div>
    //         </div>
    //       </motion.div>
    //     ))}
    //   </div>
    // </div>
    <div className="py-24 px-5 dark:bg-gray-900 min-h-screen flex flex-col items-center">
      <h2 className="text-4xl font-bold dark:text-white mb-8 text-center tracking-wide">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {projectsData.map((project, index) => {
          // Define gradient styles based on index
          const gradientClasses = [
            "bg-gradient-to-br from-blue-700 via-black to-purple-600",
            "bg-gradient-to-br from-green-700 via-black to-yellow-500",
            "bg-gradient-to-br from-pink-700 via-black to-orange-500",
            "bg-gradient-to-br from-indigo-700 via-black to-teal-500",
          ];

          return (
            <motion.div
              key={index}
              className={`relative w-full rounded-br-[100px] rounded-tl-[100px] shadow-lg overflow-hidden flex flex-col justify-between p-10 border-2 border-transparent hover:border-blue-500 transition-all duration-500 ${
                gradientClasses[index % gradientClasses.length]
              }`}
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-800 p-4">
                <div className="relative w-full h-48 overflow-hidden">
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg shadow-md transition-all duration-500 hover:shadow-blue-500/40"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-black opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
                </div>

                {/* Project Details */}
                <div className="text-white text-center mt-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">
                    {project.description}
                  </p>
                  <div className="flex justify-center gap-2 mt-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-primary px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-center gap-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex flex-row gap-1 items-center"
                    >
                      Live Demo <MdOutlineArrowOutward className="text-white"/>
                    </a>
                    <span>|</span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex flex-row gap-1 items-center"
                    >
                      GitHub <MdOutlineArrowOutward className="text-white"/>
                    </a>
                  </div>
                </div>
              </div>
              {/* Project Image with Overlay */}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
