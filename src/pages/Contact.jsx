import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import contact from "../assets/contact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [messages, setMessages] = useState([]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    try {
      await axios.post("http://localhost:5000/api/messages", formData);
      setFormData({ name: "", email: "", message: "" });
      fetchMessages(); // Refresh messages after submission
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  // Fetch messages from the backend
  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/messages");
      setMessages(res.data);
    } catch (error) {
      console.error("Error fetching messages", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    // <div className="flex flex-col items-center py-24 dark:bg-gray-900 text-white">
    //   <motion.h1
    //     initial={{ opacity: 0, y: -20 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.5 }}
    //     className="text-4xl font-bold mb-6"
    //   >
    //     Get in Touch
    //   </motion.h1>

    //   {/* Contact Form */}
    //   <motion.form
    //     onSubmit={handleSubmit}
    //     className="w-full max-w-md p-6 light:bg-white  rounded-lg shadow-md border flex flex-col gap-6"
    //     initial={{ scale: 0.8, opacity: 0 }}
    //     animate={{ scale: 1, opacity: 1 }}
    //     transition={{ duration: 0.5 }}
    //   >
    //     <input
    //       type="text"
    //       name="name"
    //       placeholder="Name"
    //       value={formData.name}
    //       onChange={handleChange}
    //       className="w-full p-2 mb-3 rounded bg-secondary text-black focus:outline-none"
    //     />
    //     <input
    //       type="email"
    //       name="email"
    //       placeholder="Email"
    //       value={formData.email}
    //       onChange={handleChange}
    //       className="w-full p-2 mb-3 rounded   text-black focus:outline-none"
    //     />
    //     <textarea
    //       name="message"
    //       placeholder="Leave us a message..."
    //       value={formData.message}
    //       onChange={handleChange}
    //       className="w-full p-2 mb-3 rounded bg-secondary text-black focus:outline-none"
    //     />
    //     <button type="submit" className="w-full p-2 bg-primary hover:bg-blue-600 rounded-lg font-bold">
    //       Send Message
    //     </button>
    //   </motion.form>

    //   {/* Messages Display */}
    //   <div className="w-full max-w-md mt-6">
    //     <h2 className="text-2xl font-semibold mb-4">Recent Messages</h2>
    //     <motion.div
    //       className="grid gap-4"
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ duration: 0.5 }}
    //     >
    //       {messages.length > 0 ? (
    //         messages.map((msg, index) => (
    //           <motion.div
    //             key={index}
    //             className="p-4 bg-gray-700 rounded-lg shadow-md"
    //             whileHover={{ scale: 1.05 }}
    //           >
    //             <p className="font-bold">{msg.name} ({msg.email})</p>
    //             <p>{msg.message}</p>
    //           </motion.div>
    //         ))
    //       ) : (
    //         <p>No messages yet</p>
    //       )}
    //     </motion.div>
    //   </div>
    // </div>
    <div
      className="flex flex-col pr-28 items-end py-24 text-white bg-cover bg-center dark:bg-gray-900"
      style={{ backgroundImage: `url(${contact})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh", width: "100%" }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-center font-bold mb-6 bg-black bg-opacity-50 px-24 py-2 rounded-md"
      >
        Get in Touch
      </motion.h1>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-6 bg-gray-800 bg-opacity-90 dark:bg-opacity-80 rounded-lg shadow-lg border flex flex-col gap-6 backdrop-blur-md"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Leave us a message..."
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
        />
        <button
          type="submit"
          className="w-full p-3 bg-primary hover:bg-blue-600 dark:hover:bg-blue-400 rounded-lg font-bold transition-transform transform hover:scale-105"
        >
          Send Message
        </button>
      </motion.form>

      {/* Messages Display */}
      <div className="w-full max-w-md mt-6">
        <h2 className="text-2xl font-semibold mb-4 bg-black bg-opacity-50 px-4 py-2 rounded-md">
          Recent Messages
        </h2>
        <motion.div
          className="grid gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 rounded-lg shadow-md backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-bold text-gray-900 dark:text-white">
                  {msg.name} ({msg.email})
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  {msg.message}
                </p>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-300 dark:text-gray-500">No messages yet</p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
