import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import leetcode from "../assets/icons8-leetcode-50.png";
import codewars from "../assets/codewarsicon.png";
import {
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Asmaa-Abdo22",
      icon: <FiGithub className="w-5 h-5" />,
      hoverColor: "hover:text-white",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/asmaa-abdo",
      icon: <FiLinkedin className="w-5 h-5" />,
      hoverColor: "hover:text-blue-400",
    },
    {
      name: "Email",
      url: "mailto:asmaaabdomuhammad@gmail.com",
      icon: <FiMail className="w-5 h-5" />,
      hoverColor: "hover:text-red-400",
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/asmaa-abdo22/",
      icon: <img src={leetcode} alt="LeetCode" className="w-5 h-5" />,
      hoverColor: "hover:opacity-80",
    },
    {
      name: "Codewars",
      url: "https://www.codewars.com/users/Asmaa-Abdo22",
      icon: <img src={codewars} alt="Codewars" className="w-5 h-5" />,
      hoverColor: "hover:opacity-80",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-5 overflow-hidden">
      {/* Decorative top border */}
      <div className="relative h-px bg-gradient-to-r from-transparent via-[#221D52]/90 to-transparent mb-8"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-5">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#544ab0] to-[#e132e1] bg-clip-text text-transparent">
              Asmaa Abdo
            </h2>
            <p className="text-gray-400 font-medium text-sm">
              Front-End Developer
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Available to relocate
            </p>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Experience", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-[#695be6] transition-colors duration-200 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-[#221D52] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  title={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className={`
                    w-10 h-10 rounded-lg 
                    bg-gradient-to-br from-[#221D52]/20 to-[#5a4a9e]/10 
                    border border-[#221D52]/30 
                    flex items-center justify-center
                    text-gray-400 
                    ${social.hoverColor}
                    transition-all duration-300
                    backdrop-blur-sm
                    hover:border-[#5a4a9e]/50
                    hover:shadow-lg hover:shadow-[#221D52]/20
                  `}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-[#221D52]/70">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {currentYear}{" "}
              <span className="text-gray-400 font-medium">Asmaa Abdo</span>. All
              rights reserved.
            </p>
            <p className="flex items-center gap-1 text-gray-400 text-sm">
              <FiMapPin className="h-3 w-3" />
              Cairo, Egypt
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-700 shadow-lg flex items-center justify-center text-white hover:scale-105 transition-transform duration-300 z-50"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
