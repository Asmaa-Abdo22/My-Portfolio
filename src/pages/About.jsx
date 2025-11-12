import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
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

const About = () => {
  const skills = {
    "Languages": ["HTML5", "CSS3", "JavaScript", "TypeScript"],
    "Frameworks/Libraries": ["React.js", "Next.js", "Redux", "React Query", "Bootstrap", "Tailwind CSS", "Material-UI"],
    "Tools": ["Git/GitHub", "npm", "Webpack", "REST APIs", "Postman", "Figma", "Firebase", "Supabase"],
    "Concepts": ["Responsive Design", "State Management", "Component Architecture", "Performance Optimization"],
    "Soft Skills": ["Teamwork", "Presentation Skills"]
  };

  const techIcons = {
    "HTML5": FaHtml5,
    "CSS3": FaCss3Alt,
    "JavaScript": SiJavascript,
    "TypeScript": SiTypescript,
    "React.js": FaReact,
    "Next.js": SiNextdotjs,
    "Redux": SiRedux,
    "React Query": SiReactquery,
    "Bootstrap": SiBootstrap,
    "Tailwind CSS": SiTailwindcss,
    "Material-UI": MdDesignServices,
    "Git/GitHub": FaGitAlt,
    "npm": SiNpm,
    "Webpack": SiWebpack,
    "Postman": SiPostman,
    "Figma": SiFigma,
    "Firebase": SiFirebase,
    "Supabase": SiSupabase,
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 py-20 text-gray-200 relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
      >
        About Me
      </motion.h1>

      {/* My Journey Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-4xl mb-16"
      >
        
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              I'm <span className="font-semibold text-white">Asmaa Abdo</span>, a passionate Front-End Developer from Egypt. 
              I've been immersed in programming, continuously learning and growing in this dynamic field.
            </p>

            <p>
              After completing my <span className="text-purple-400">Bachelor's degree in Computer Science</span> with a major in 
              Medical Informatics from Zagazig University, I decided to fully pursue my passion for web development 
              through intensive training programs.
            </p>

            <p>
              What I love most about programming is the <span className="text-pink-400">problem-solving aspect</span>. There's an 
              incredible satisfaction in finally cracking a challenging problem and seeing your solution come to life.
            </p>

            <p>
              During my learning journey at <span className="text-blue-400">ITI</span>, I've had the opportunity to work on 
              several exciting projects ranging from personal ventures to collaborative team efforts, each teaching me 
              valuable lessons about code, collaboration, and creating meaningful user experiences.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-4xl w-full"
      >
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
            >
              <h3 className="text-lg font-semibold text-white mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill, skillIndex) => {
                  const IconComponent = techIcons[skill];
                  return (
                    <li key={skill} className="flex items-center gap-3 text-gray-300">
                      {IconComponent && (
                        <IconComponent className="text-lg flex-shrink-0" />
                      )}
                      <span>{skill}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;