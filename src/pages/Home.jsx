import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
  FaArrowRight,
} from "react-icons/fa";
import myImage from "../assets/smsma.jpg";
import resumePDF from "../assets/Asmaa Abdo Resume.pdf";

import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";

const Home = () => {
  const sectionVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden text-white">
        <div className="relative z-10 max-w-[95%] mx-auto px-6 md:px-12 lg:px-28 pt-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
          {/* Text Section */}
          <div className="text-center md:text-left flex-1">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-5xl font-bold mb-4"
            >
              <span className=" bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Hi, I'm{" "}
              </span>
              <span className="bg-gradient-to-r from-[#ec4899] via-[#a855f7] to-[#6366f1]  bg-clip-text text-transparent">
                Asmaa Abdo
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl font-semibold mb-6 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-400 bg-clip-text text-transparent animate-gradient"
            >
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "Frontend Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed mb-12 font-light tracking-wide"
            >
              Passionate about crafting elegant, responsive, and user-centric
              web experiences using modern technologies like React.js, Next.js,
              and TypeScript.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-row sm:flex-row gap-3 justify-center md:justify-start mb-6"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 
border border-purple-400/40 
text-white 
rounded-lg 
font-semibold 
bg-purple-500/5
hover:bg-purple-500/15 
backdrop-blur-sm
transition-all duration-300 
flex items-center gap-2 
group 
text-sm md:text-base
shadow-sm hover:shadow-md hover:shadow-purple-500/20"
                >
                  View My Work
                </motion.button>
              </Link>

              <motion.a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2 w-fit border-2 border-purple-500/50 text-white rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
              >
                <FaFileDownload /> Resume
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-6 text-xl mt-2 text-gray-300">
              <a
                href="https://github.com/Asmaa-Abdo22"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/asmaa-abdo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:asmaaabdomuhammad@gmail.com"
                className="hover:text-red-400 transition-colors"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center md:justify-end flex-1"
          >
            <div className="relative">
              {/* Floating Background */}
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-lg"
              />
              <motion.div
                animate={{ rotate: -360, scale: [1.1, 1, 1.1] }}
                transition={{
                  rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -inset-6 rounded-full bg-gradient-to-r from-blue-500/10 via-pink-500/10 to-purple-500/10 blur-xl"
              />

              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img
                  src={myImage}
                  alt="Asmaa Abdo"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl backdrop-blur-sm"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-blue-500/10 pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Rest Sections with Scroll Animations */}
      <div className="restSections bg-gradient-to-br ">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <About />
        </motion.div>

        {/* Elegant Projects Preview Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <section className=" px-6 md:px-12 lg:px-28">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
              >
                Featured Projects
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-gray-400 mb-8 leading-relaxed text-lg"
              >
                Explore my portfolio of modern web applications and creative solutions
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center"
              >
                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 border border-purple-500/30 text-white rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2 group text-sm md:text-base"
                  >
                    View All Projects
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300 text-purple-400" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </section>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Experience />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={sectionVariants}
        >
          <Contact />
        </motion.div>
      </div>
    </>
  );
};

export default Home;