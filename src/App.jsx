import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navabr"; // Ensure correct spelling
import Hero from "./pages/HEro"; // Ensure correct spelling
import ThemeProvider from "./context/ThemeProvider"; // Ensure correct import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Use BrowserRouter
import Footer from "./components/Footer";
import Experience from "./pages/Experience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <Router>
        <Navbar /> {/* Ensure correct component name */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/experience" element={<Experience />} />

          {/* <Route path="/about" element={<Hero />} />
          <Route path="/projects" element={<Hero />} />
          <Route path="/contact" element={<Hero />} /> */}
        </Routes>
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
