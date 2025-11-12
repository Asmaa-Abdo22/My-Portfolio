import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const experienceItems = document.querySelectorAll('.experience-item');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      experienceItems.forEach((item, index) => {
        const element = item ;
        const position = element.offsetTop;

        if (scrollPosition >= position) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      title: "Front-End and Cross-Platform Mobile Development Scholarship",
      company: "Information Technology Institute (ITI)",
      period: "Nov. 2024 -- May 2025",
      location: "Mansoura, Egypt",
      points: [
        "Completed intensive 5-month program covering React.js, Next.js, and mobile development technologies",
        "Developed graduation project 'Hatly' - transforming shipping industry through innovative technology",
        "Contributed to both dashboard and website development using React and Material-UI",
        "Collaborated effectively with a team using GitHub for version control and project management, which improved my teamwork, communication, and software collaboration skills"
      ],
      certificate: "https://drive.google.com/file/d/17f-2OV6-jxGAftM5RbokuxkoER0ey3o8/view?usp=sharing"
    },
    {
      title: "Front-End Developer Trainee",
      company: "Route It Training Center",
      period: "Oct. 2023 -- Feb. 2024",
      location: "Cairo, Egypt",
      points: [
        "Completed 5-month diploma covering HTML5, CSS3, JavaScript, React, TypeScript, and Next.js",
        "Built multiple projects including e-commerce apps and portfolio templates"
      ],
      certificate: "https://drive.google.com/file/d/1YQw4oeLAdCxhiEG5nS9L7gzfYMSMT8Xw/view?usp=sharing"
    },
    {
      title: "Fundamentals of Frontend Web Development",
      company: "Information Technology Institute (ITI)",
      period: "July 2022 -- Aug. 2022",
      location: "Ismailia, Egypt",
      points: [
        "One-month summer training in frontend development",
        "Gained hands-on experience in HTML5, CSS3, JavaScript, and responsive design principles",
        "Worked on multiple practical projects that strengthened my skills in building interactive and user-friendly web applications"
      ],
      certificate: "https://drive.google.com/file/d/1G6mWzEgqr59KITDHZINsKy7hj5fFJ1v2/view?usp=sharing"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const dotVariants = {
    inactive: { scale: 1 },
    active: { 
      scale: 1.2,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen py-12 mt-20 px-6 md:px-20  text-gray-200 relative">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
      >
        Experience & Training
      </motion.h1>

      <div className="max-w-5xl mx-auto relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-700">
          <motion.div 
            className="absolute top-0 left-0 w-0.5 bg-gradient-to-b from-pink-400 via-purple-400 to-blue-400"
            initial={{ height: 0 }}
            animate={{ height: `${(activeIndex + 1) * (100 / experiences.length)}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          ></motion.div>
        </div>

        {/* Experience Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8 relative"
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className={`experience-item relative flex flex-col md:flex-row items-start ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <motion.div 
                className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 rounded-full z-10 ${
                  index <= activeIndex 
                    ? 'bg-gradient-to-r from-pink-400 to-purple-400 shadow-lg shadow-purple-500/25' 
                    : 'bg-gray-600'
                }`}
                variants={dotVariants}
                animate={index <= activeIndex ? "active" : "inactive"}
              ></motion.div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <motion.div 
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-5 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 30px -10px rgba(147, 51, 234, 0.3)"
                  }}
                >
                  {/* Header */}
                  <div className="mb-3">
                    <motion.span 
                      className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-medium mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {exp.period}
                    </motion.span>
                    <h2 className="text-lg font-bold text-white mb-1">{exp.title}</h2>
                    <h3 className="text-md text-purple-400 font-semibold mb-1">{exp.company}</h3>
                    <p className="text-gray-400 text-xs">{exp.location}</p>
                  </div>

                  {/* Points */}
                  <ul className="space-y-1 mb-3">
                    {exp.points.map((point, pointIndex) => (
                      <motion.li 
                        key={pointIndex} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: pointIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-purple-400 mr-2 mt-0.5 text-xs">•</span>
                        <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Certificate Link */}
                  {exp.certificate && (
                    <motion.a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="mr-1">View Certificate</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  )}
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="md:w-2/12"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;