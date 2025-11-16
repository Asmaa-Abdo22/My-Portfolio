import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiMui,
  SiReactquery,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiCloudinary,
  SiNextdotjs,
  SiTypescript,
  SiGooglecalendar,
  SiClerk,
  SiFramer,
  SiChartdotjs,
} from "react-icons/si";
import { projects, categories } from "../components/projectsData.js";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("React");

  const iconsMap = {
    React: <FaReact className="text-sky-400" />,
    Nextjs: <SiNextdotjs className="text-white" />,
    JavaScript: <FaJs className="text-yellow-400" />,
    TypeScript: <SiTypescript className="text-blue-500" />,
    HTML: <FaHtml5 className="text-orange-500" />,
    CSS: <FaCss3Alt className="text-blue-500" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
    Bootstrap: <FaBootstrap className="text-purple-500" />,
    "Material-UI": <SiMui className="text-blue-400" />,
    "Material UI": <SiMui className="text-blue-400" />,
    Redux: <SiRedux className="text-purple-400" />,
    "React Query": <SiReactquery className="text-pink-500" />,
    Recoil: <FaReact className="text-sky-400" />,
    Formik: <FaReact className="text-sky-400" />,
    Yup: <FaJs className="text-yellow-400" />,
    "Framer-Motion": <SiFramer className="text-pink-500" />,
    FramerMotion: <SiFramer className="text-pink-500" />,
    "React Awesome Reveal": <FaReact className="text-sky-400" />,
    "Node.js": <SiNodedotjs className="text-green-500" />,
    NodeJS: <SiNodedotjs className="text-green-500" />,
    Express: <SiExpress className="text-gray-400" />,
    MongoDB: <SiMongodb className="text-green-600" />,
    Mongoose: <SiMongodb className="text-green-600" />,
    Cloudinary: <SiCloudinary className="text-blue-500" />,
    OOP: <FaJs className="text-yellow-400" />,
    "REST APIs": <SiExpress className="text-gray-400" />,
    Clerk: <SiClerk className="text-purple-500" />,
    Multer: <SiNodedotjs className="text-green-500" />,
    Nodemailer: <SiNodedotjs className="text-green-500" />,
    Nivo: <SiChartdotjs className="text-pink-400" />,
    "Nivo Charts": <SiChartdotjs className="text-pink-400" />,
    FullCalendar: <SiGooglecalendar className="text-blue-400" />,
  };

  const filteredProjects = projects.filter(
    (project) => project.category === activeFilter
  );

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            A curated selection of my work across different technologies
          </p>
        </motion.div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === cat
                  ? "bg-purple-500/20 text-white border-purple-500 shadow-lg "
                  : "text-gray-400 border-white/10 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-5">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="group border  border-purple-600/20 rounded-xl overflow-hidden transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {project.liveDemo && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-green-500/90 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                        Live
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-1 text-xs font-medium text-gray-300 bg-white/5 px-2 py-1 rounded-lg border border-white/5"
                      >
                        {iconsMap[tech] || <span>⚙️</span>}
                        <span className="text-gray-300">{tech}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-3 py-2 border border-purple-500/30 bg-purple-500/10 text-white shadow-md  hover:bg-purple-500/1 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                      >
                        View Project
                      </a>
                    )}
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-3 py-2 bg-white/5 text-white rounded-lg text-sm font-medium border border-white/10 hover:bg-white/10 transition-all duration-300"
                      >
                        Code
                      </a>
                    ) : (
                      <button
                        className="flex-1 text-center px-3 py-2 bg-white/5 text-gray-400 rounded-lg text-sm font-medium border border-white/10 cursor-not-allowed"
                        disabled
                      >
                        Code Private
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;
