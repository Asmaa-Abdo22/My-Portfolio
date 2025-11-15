import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/xdkyklzz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 3000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus(null), 3000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 3000);
    }

    setIsSubmitting(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const inputVariants = {
    focus: {
      boxShadow: "0 0 5px rgba(168, 85, 247, 0.3)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl"
      >
        <motion.div variants={itemVariants} className="text-center mb-10">
          <div className="inline-block mb-6">
            <motion.div
              className="w-24 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mb-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <motion.div
              className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mt-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            />
          </div>
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-sm md:text-xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            Have a project, question, or just want to say hi? Drop me a message
            below I'll get back to you soon.
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="w-full max-w-2xl">
            <motion.div
              className=" rounded-2xl p-8 md:p-10 border border-purple-500/20 backdrop-blur-xl shadow-sm shadow-purple-500/10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                variants={containerVariants}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-300 mb-3 font-light">
                      Your Name
                    </label>
                    <motion.input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1633]/70 text-white border border-purple-500/30 focus:border-purple-400 focus:ring-1 focus:ring-purple-400/20 outline-none transition-all duration-300 font-light placeholder-gray-400 backdrop-blur-sm"
                      whileFocus="focus"
                      variants={inputVariants}
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-300 mb-3 font-light">
                      Email Address
                    </label>
                    <motion.input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#1a1633]/70 text-white border border-purple-500/30 focus:border-purple-400 focus:ring-1 focus:ring-purple-400/20 outline-none transition-all duration-300 font-light placeholder-gray-400 backdrop-blur-sm"
                      whileFocus="focus"
                      variants={inputVariants}
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-300 mb-3 font-light">
                    Your Message
                  </label>
                  <motion.textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or how we can work together..."
                    className="w-full px-4 py-3 rounded-xl bg-[#1a1633]/70 text-white border border-purple-500/30 focus:border-purple-400 focus:ring-1 focus:ring-purple-400/20 outline-none transition-all duration-300 font-light placeholder-gray-400 resize-none backdrop-blur-sm"
                    whileFocus="focus"
                    variants={inputVariants}
                  />
                </motion.div>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-center font-light text-sm"
                  >
                    Thank you! I've received your message and will get back to
                    you soon.
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center font-light text-sm"
                  >
                    ❌ Failed to send message. Try again.
                  </motion.div>
                )}

                {/* Smaller Button */}
                <motion.button
                  type="submit"
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  disabled={isSubmitting}
                  className="px-6 py-2
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
text-sm 
shadow-sm hover:shadow-md hover:shadow-purple-500/20 mx-auto"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </motion.form>

              <motion.div
                className="mt-8 pt-6 border-t border-purple-500/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <p className="text-gray-400 text-sm text-center font-light capitalize">
                  Your next great project starts with a simple Hello
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
