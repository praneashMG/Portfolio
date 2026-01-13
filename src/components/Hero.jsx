import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Download,
  Send,
  Mail,
  Phone,
} from "lucide-react";

// ✅ CORRECT IMAGE PATH
import profileImage from "../assets/praneash.jpeg";

/* ---------------- Animations ---------------- */
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

/* ---------------- Navbar ---------------- */
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactLinks = [
    {
      icon: <Github size={22} />,
      url: "https://github.com/praneashMG",
      label: "GitHub",
      external: true,
    },
    {
      icon: <Linkedin size={22} />,
      url: "https://linkedin.com/in/praneash-m-g-9a2075286",
      label: "LinkedIn",
      external: true,
    },
    {
      icon: <Mail size={22} />,
      url: "mailto:praneashp@gmail.com",
      label: "Email",
    },
    {
      icon: <Phone size={22} />,
      url: "tel:+919715499118",
      label: "Phone",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold text-slate-900">
          <span className="text-blue-600">P</span>raneash M G
        </div>

        <div className="flex gap-6">
          {contactLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.1, color: "#2563eb" }}
              className="text-slate-500 hover:text-blue-600"
              aria-label={item.label}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

/* ---------------- Hero ---------------- */
const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section
      id="home"
      className="min-h-screen bg-slate-50 flex items-center justify-center px-6 pt-28"
    >
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200/40 blur-3xl rounded-full"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-200/40 blur-3xl rounded-full"
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6 text-center lg:text-left"
        >
          <motion.h1 variants={fadeInUp} className="text-3xl text-slate-500">
            Hello, I'm <span className="text-slate-900 font-semibold">Praneash</span>
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-bold"
          >
            Front End <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Developer
            </span>
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-slate-600 max-w-lg">
            Building innovative digital solutions with precision, performance,
            and user-centric design.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="/PRANEASH MG 21ISR035.pdf"
              download
              className="bg-blue-600 text-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-blue-700"
            >
              <Download size={18} /> Download Resume
            </a>

            <a
              href="mailto:praneashp@gmail.com"
              className="bg-white border border-slate-200 px-8 py-3 rounded-full flex items-center gap-2 hover:shadow"
            >
              <Send size={18} /> Email Me
            </a>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img
              src={profileImage}
              alt="Praneash"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ---------------- Export ---------------- */
const Portfolio = () => {
  return (
    <div className="font-sans text-slate-900">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Portfolio;
