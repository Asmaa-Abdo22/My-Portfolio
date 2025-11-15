import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaLaptopCode,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiReactquery,
  SiNpm,
  SiWebpack,
  SiPostman,
  SiFigma,
  SiFirebase,
  SiSupabase,
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const skills = {
    Languages: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    "Frameworks/Libraries": [
      "React.js",
      "Next.js",
      "Redux",
      "React Query",
      "Bootstrap",
      "Tailwind CSS",
      "Material-UI",
    ],
    Tools: [
      "Git/GitHub",
      "npm",
      "Webpack",
      "REST APIs",
      "Postman",
      "Figma",
      "Firebase",
      "Supabase",
    ],
    Concepts: [
      "Responsive Design",
      "State Management",
      "Component Architecture",
      "Performance Optimization",
    ],
    "Soft Skills": ["Teamwork", "Presentation Skills"],
  };

  const techIcons = {
    HTML5: FaHtml5,
    CSS3: FaCss3Alt,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    "React.js": FaReact,
    "Next.js": SiNextdotjs,
    Redux: SiRedux,
    "React Query": SiReactquery,
    Bootstrap: SiBootstrap,
    "Tailwind CSS": SiTailwindcss,
    "Material-UI": MdDesignServices,
    "Git/GitHub": FaGitAlt,
    npm: SiNpm,
    Webpack: SiWebpack,
    Postman: SiPostman,
    Figma: SiFigma,
    Firebase: SiFirebase,
    Supabase: SiSupabase,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen pt-16 pb-20 px-6 md:px-20 text-gray-200 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with modern
            technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          {/* Left Column - Story */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl">
                  <FaLaptopCode className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">My Journey</h2>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm{" "}
                  <span className="font-semibold text-white">Asmaa Abdo</span>,
                  a passionate Front-End Developer from Egypt. My journey in
                  technology began at{" "}
                  <span className="text-blue-400 font-semibold">
                    Zagazig University
                  </span>
                  , where I earned my Bachelor's degree in{" "}
                  <span className="text-pink-400 font-semibold">
                    Computer Science
                  </span>{" "}
                  with a major in Medical Informatics.
                </p>

                <p>
                  During my university studies, I developed a strong foundation
                  in programming fundamentals and discovered my passion for web
                  development. This led me to pursue specialized training at the{" "}
                  <span className="text-purple-400 font-semibold">
                    Information Technology Institute (ITI)
                  </span>
                  , where I completed an intensive Front-End and Cross-Platform
                  Mobile Development scholarship.
                </p>

              

               

                <p>
                  My education at{" "}
                  <span className="text-blue-400 font-semibold me-1">
                    Computer Science
                  </span>
                  provided the theoretical foundation, while{" "}
                  <span className="text-purple-400 font-semibold me-1">ITI</span>
                  gave me the practical expertise to excel as a front-end
                  developer. I'm excited to continue growing and contributing to
                  innovative projects in the tech industry.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                  <FaReact className="text-2xl text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">
                  Technical Skills
                </h2>
              </div>

              <div className="grid gap-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="space-y-3">
                    <h3 className="font-semibold text-white text-lg bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => {
                        const IconComponent = techIcons[skill];
                        return (
                          <motion.span
                            key={skill}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
                          >
                            {IconComponent && (
                              <IconComponent className="text-lg text-purple-400 group-hover:text-pink-400 transition-colors" />
                            )}
                            <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
                              {skill}
                            </span>
                          </motion.span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-pink-400/10 via-purple-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Bring Your Ideas to Life?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Let's collaborate to create something amazing. I'm always excited
              to take on new challenges and work on innovative projects.
            </p>
            <motion.button
              onClick={() => {
                navigate("/contact");
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
