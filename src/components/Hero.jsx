import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Twitter, Download, Send, Mail, Phone } from 'lucide-react';

// Using a professional placeholder image
const profileImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Define the contact icons and their actions
  const contactLinks = [
    { 
      icon: <Github size={22} />, 
      url: "https://github.com/praneashMG", 
      label: "GitHub",
      isExternal: true 
    },
    { 
      icon: <Linkedin size={22} />, 
      url: "https://linkedin.com/in/praneash-m-g-9a2075286", 
      label: "LinkedIn",
      isExternal: true 
    },
    { 
      icon: <Mail size={22} />, 
      url: "mailto:praneashp@gmail.com", 
      label: "Email",
      isExternal: false 
    },
    { 
      icon: <Phone size={22} />, 
      url: "tel:+919715499118", 
      label: "Call",
      isExternal: false 
    }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="text-xl md:text-2xl font-bold tracking-tight text-slate-900"
        >
          <span className="text-blue-600">P</span>raneash M G
        </motion.div>

        {/* Contact Icons (Replaces Text Menu) */}
        <div className="flex items-center gap-6 md:gap-8">
          {contactLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.1, color: "#2563eb", rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="text-slate-500 hover:text-blue-600 transition-colors duration-300"
              aria-label={item.label}
              title={item.label}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section 
      id="home" 
      className="w-full min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden pt-24 pb-12 lg:py-0"
    >
      {/* Background Texture: Subtle Dot Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      {/* Animated Pastel Background Blobs */}
      <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4 w-64 md:w-80 h-64 md:h-80 rounded-full bg-blue-200/40 blur-3xl -z-10" />
      <motion.div style={{ y: y2 }} className="absolute bottom-1/3 right-1/4 w-72 md:w-96 h-72 md:h-96 rounded-full bg-indigo-200/40 blur-3xl -z-10" />

      {/* Content Container */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Text Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center lg:text-left space-y-6 order-2 lg:order-1 flex flex-col items-center lg:items-start"
        >
          <motion.h1 variants={fadeInUp} className="text-3xl md:text-4xl font-light text-slate-500">
            Hello, I'm <span className="text-slate-900 font-semibold">Praneash</span>
          </motion.h1>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
          >
            Front End <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Developer
            </span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-slate-600 max-w-lg lg:mx-0 leading-relaxed">
            Building innovative digital solutions with a focus on precision, performance, and user-centric design.
          </motion.p>
          
          {/* Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 w-full sm:w-auto">
            <motion.a 
              whileHover={{ y: -2, boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              href={`/${encodeURIComponent("PRANEASH MG 21ISR035.pdf")}`}
              download="Praneash_MG_Resume.pdf"
              className="bg-blue-600 text-white px-8 py-3.5 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:bg-blue-700 w-full sm:w-auto"
            >
              <Download size={18} /> Download Resume
            </motion.a>    
            <motion.a 
              whileHover={{ y: -2, backgroundColor: "rgba(241, 245, 249, 1)" }}
              whileTap={{ scale: 0.98 }}
              href="mailto:praneashp@gmail.com" 
              className="bg-white border border-slate-200 text-slate-700 px-8 py-3.5 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:border-slate-300 hover:shadow-sm w-full sm:w-auto"
            >
              <Send size={18} /> Email Me
            </motion.a>
          </motion.div>

          {/* Social Icons (Secondary) */}
          <motion.div variants={fadeInUp} className="flex justify-center lg:justify-start space-x-6 pt-8">
            {[
              { icon: <Github size={22} />, url: "https://github.com/praneashMG", label: "GitHub" },
              { icon: <Linkedin size={22} />, url: "https://linkedin.com/in/praneash-m-g-9a2075286", label: "LinkedIn" },
              { icon: <Twitter size={22} />, url: "#", label: "Twitter" }
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ y: -3, color: "#2563eb" }}
                whileTap={{ scale: 0.9 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 transition-colors duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end items-center order-1 lg:order-2"
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl border-4 border-white bg-white">
            <img
              src={profileImage}
              alt="Praneash M G"
              className="w-full h-full object-cover rounded-full"
              onError={(e) => {
                 e.target.onerror = null;
                 e.target.src = "https://placehold.co/600x600/f1f5f9/3b82f6?text=Praneash+MG";
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <div className="bg-slate-50 min-h-screen selection:bg-blue-100 selection:text-blue-900 font-sans text-slate-900">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Portfolio;