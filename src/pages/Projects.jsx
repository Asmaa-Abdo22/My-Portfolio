import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      name: 'Hatly Logistics Platform',
      description: 'Developed and maintained the web frontend for a logistics platform designed to optimize shipping and delivery services. Implemented customer-facing website and admin dashboard with React, Material-UI, and Redux.',
      technologies: ['React', 'Material-UI', 'Redux', 'REST APIs'],
      liveDemo: 'https://hatly-website.vercel.app/',
      github: null,
      featured: true,
    },
    {
      name: 'SwiftShop E-commerce',
      description: 'End-to-end shopping experience with product pages, wishlist, and order tracking. Implemented protected routes and state management for authenticated users.',
      technologies: ['React', 'Tailwind CSS', 'React Query'],
      liveDemo: 'https://swift-shop-ecommerce.vercel.app/',
      github: null,
    },
    {
      name: 'WatchZone YouTube Clone',
      description: 'Developed a YouTube clone with video streaming, search functionality, and channel browsing. Features include video recommendations, category filtering, and modern UI components.',
      technologies: ['React', 'Tailwind CSS', 'React Query'],
      liveDemo: 'https://watchzone-asmaa.netlify.app/',
      github: null,
    },
    {
      name: 'To-Do List Web App',
      description: 'Interactive task management application demonstrating CRUD operations and search functionality. Implemented user-friendly interface with light/dark mode toggle.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveDemo: 'https://to-do-app-js-cyan.vercel.app/',
      github: null,
    },
    {
      name: 'Quiz Game Application',
      description: 'Interactive quiz application built with vanilla JavaScript following Object-Oriented Programming principles. Features category selection, multiple difficulty levels, and real-time score tracking.',
      technologies: ['JavaScript', 'OOP'],
      liveDemo: 'https://quiz-game-two-lake.vercel.app/',
      github: null,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#221D52] via-[#5a4a9e] to-[#7d6bb8] bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#221D52] to-[#5a4a9e] mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing my skills in front-end development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative bg-gradient-to-br from-[#221D52]/20 to-[#5a4a9e]/10 rounded-2xl p-6 border border-[#221D52]/30 overflow-hidden group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#221D52]/40 to-[#5a4a9e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-white">{project.name}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#221D52]/40 text-sm text-gray-300 rounded-full border border-[#221D52]/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  {project.liveDemo && (
                    <motion.a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-[#221D52] to-[#5a4a9e] text-white rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300"
                    >
                      Live Demo
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-4 py-2 border-2 border-[#221D52] text-white rounded-lg font-semibold text-center hover:bg-[#221D52]/20 transition-all duration-300"
                    >
                      GitHub
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Projects

