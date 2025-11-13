import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiRedux, SiMui, SiReactquery } from 'react-icons/si';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('React');

  const projects = [
    {
      name: 'Hatly Logistics Platform',
      description:
        'Developed and maintained the web frontend for a logistics platform designed to optimize shipping and delivery services.',
      technologies: ['React', 'Material-UI', 'Redux', 'REST APIs'],
      category: 'React',
      liveDemo: 'https://hatly-website.vercel.app/',
      github: null,
    },
    {
      name: 'SwiftShop E-commerce',
      description:
        'End-to-end shopping experience with product pages, wishlist, and order tracking. Implemented protected routes and state management.',
      technologies: ['React', 'Tailwind CSS', 'React Query'],
      category: 'React',
      liveDemo: 'https://swift-shop-ecommerce.vercel.app/',
      github: null,
    },
    {
      name: 'WatchZone YouTube Clone',
      description:
        'YouTube clone with video streaming, search functionality, and channel browsing. Features video recommendations and category filtering.',
      technologies: ['React', 'Tailwind CSS', 'React Query'],
      category: 'React',
      liveDemo: 'https://watchzone-asmaa.netlify.app/',
      github: null,
    },
    {
      name: 'Portfolio Website',
      description:
        'Modern portfolio website with smooth animations, responsive design, and project showcase.',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      category: 'Next.js',
      liveDemo: '#',
      github: null,
    },
    {
      name: 'To-Do List Web App',
      description:
        'Interactive task management application demonstrating CRUD operations and search functionality.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'JavaScript',
      liveDemo: 'https://to-do-app-js-cyan.vercel.app/',
      github: null,
    },
    {
      name: 'Quiz Game Application',
      description: 'Interactive quiz application built with vanilla JavaScript following OOP principles.',
      technologies: ['JavaScript', 'OOP'],
      category: 'JavaScript',
      liveDemo: 'https://quiz-game-two-lake.vercel.app/',
      github: null,
    },
  ];

  const categories = ['React', 'Next.js', 'JavaScript', 'HTML & CSS'];

  const iconsMap = {
    React: <FaReact className="text-sky-400" />,
    'Next.js': <SiNextdotjs className="text-white" />,
    JavaScript: <FaJs className="text-yellow-400" />,
    HTML: <FaHtml5 className="text-orange-500" />,
    CSS: <FaCss3Alt className="text-blue-500" />,
    'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
    Bootstrap: <FaBootstrap className="text-purple-500" />,
    'Material-UI': <SiMui className="text-blue-400" />,
    Redux: <SiRedux className="text-purple-400" />,
    NodeJS: <FaNodeJs className="text-green-500" />,
    'React Query': <SiReactquery className="text-pink-500" />,
  };

  const filteredProjects = projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
       <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
           A curated selection of my work across different technologies
          </p>
        </motion.div>

        {/* Filters */}
       
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === cat
                  ? 'bg-purple-500/10 text-white border-purple-500 shadow-md'
                  : 'text-gray-400 border-white/10 hover:text-white hover:border-purple-800/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.name}
              className="group border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{project.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>

              {/* Tech with icons */}
              <div className="flex flex-wrap gap-3 mb-4">
                {project.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-1 text-sm font-medium text-gray-300 bg-white/5 px-2 py-1 rounded-lg"
                  >
                    {iconsMap[tech] || <span>⚙️</span>}
                    <span className="text-gray-300">{tech}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-3 border-t border-white/10">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 bg-white/10 text-white rounded-lg text-sm hover:bg-white/20 transition-all"
                  >
                    View Project
                  </a>
                )}
                <button
                  disabled
                  className="flex-1 text-center px-3 py-2 border border-white/10 text-gray-500 rounded-lg text-sm cursor-not-allowed"
                >
                  Code
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
