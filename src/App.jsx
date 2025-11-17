import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import { Analytics } from "@vercel/analytics/react";


function App() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#0a0a0f]">
      <Navbar />

      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#4b3eff] via-[#221D52] to-[#8b6fff] blur-[120px] opacity-40"
          animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-[#8b6fff] via-[#5a4a9e] to-[#221D52] blur-[120px] opacity-40"
          animate={{ x: [0, -60, 60, 0], y: [0, 40, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-[#221D52] via-[#5a4a9e] to-[#7d6bb8] blur-[100px] opacity-30"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main content */}
      <main className="flex-grow relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
         <Analytics />
    </div>
  );
}

export default App;
