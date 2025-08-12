// src/components/Hero.jsx
import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaPaperPlane } from 'react-icons/fa';
import { motion as framerMotion, useAnimation } from 'framer-motion'; // Renamed import
import { useInView } from 'react-intersection-observer';
import profileImage from '../assets/pp.jpg';
// Create an alias that ESLint will recognize as used
const Motion = {
  nav: framerMotion.nav,
  h1: framerMotion.h1,
  li: framerMotion.li,
  button: framerMotion.button,
  div: framerMotion.div,
  h2: framerMotion.h2,
  p: framerMotion.p,
  a: framerMotion.a,
  img: framerMotion.img
};

const Navbar = () => {
  return (
    <Motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gray-900/90 text-white px-6 py-4 flex justify-between items-center fixed top-0 z-50 backdrop-blur-md"
    >
      <Motion.h1 
        whileHover={{ scale: 1.05 }}
        className="text-xl md:text-2xl font-semibold tracking-tight bg-gradient-to-r from-gray-100 to-gray-300 text-transparent bg-clip-text"
      >
        Praneash M G
      </Motion.h1>
     <ul className="hidden md:flex space-x-8">
  {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
    <Motion.li
      key={item}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1 * index }}
      className="relative group"
    >
      <a
        href={`#${item.toLowerCase()}`}
        className="text-gray-300 font-semibold tracking-wide transition-all duration-300 transform group-hover:scale-105"
      >
        <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent group-hover:text-white">
          {item}
        </span>
        <span className="block h-0.5 w-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full rounded-full mt-1"></span>
      </a>
    </Motion.li>
  ))}
</ul>

      <Motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="md:hidden text-gray-300 hover:text-white"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </Motion.button>
    </Motion.nav>
  );
};

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <section 
      id="home" 
      className="w-full min-h-screen bg-gray-900 text-gray-100 flex flex-col md:flex-row items-center justify-center px-8 md:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-60 h-60 rounded-full bg-blue-500/20 filter blur-3xl animate-float1"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-purple-500/20 filter blur-3xl animate-float2"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-teal-500/20 filter blur-3xl animate-float3"></div>
      </div>

      {/* Content */}
      <Motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="z-10 text-center md:text-left space-y-6 max-w-2xl mx-auto md:mx-0"
      >
        <Motion.h1 variants={itemVariants} className="text-3xl md:text-4xl font-light text-gray-300">
          Hello, I'm <span className="text-white font-medium">Praneash</span>
        </Motion.h1>
        
        <Motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100 text-transparent bg-clip-text leading-tight"
        >
          Front End Developer
        </Motion.h2>
        
        <Motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 mb-8">
          Building innovative digital solutions
        </Motion.p>
        
        <Motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Motion.a 
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.95 }}
            href={`/${encodeURIComponent("PRANEASH MG 21ISR035.pdf")}`}
            download="Praneash_MG_Resume.pdf"
            
            className="bg-white text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
          >
            <FaDownload /> Download Resume
          </Motion.a>   
          <Motion.a 
            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="border border-gray-600 text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FaPaperPlane /> Contact Me
          </Motion.a>
        </Motion.div>

        <Motion.div variants={itemVariants} className="flex justify-center md:justify-start space-x-5 pt-8">
          {[
            { icon: <FaGithub size={20} />, url: "https://github.com/praneashMG", label: "GitHub" },
            { icon: <FaLinkedin size={20} />, url: "https://linkedin.com/in/praneash-m-g-9a2075286", label: "LinkedIn" },
            { icon: <FaTwitter size={20} />, url: "#", label: "Twitter" }
          ].map((social, index) => (
            <Motion.a
              key={index}
              whileHover={{ y: -5, scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </Motion.a>
          ))}
        </Motion.div>
      </Motion.div>

      <Motion.div 
        initial="hidden"
        animate={controls}
        className="z-10 flex justify-center items-center mt-12 md:mt-0 md:ml-12 lg:ml-24"
      >
        <Motion.div 
          variants={imageVariants}
          className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-2 border-gray-700 overflow-hidden group perspective-1000"
          whileHover={{ rotateY: 10 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 opacity-20 group-hover:opacity-30 transition-all duration-500"></div>
          <Motion.img
            src={profileImage}
            alt="Praneash M G - Full Stack Developer"
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
          />
          <div className="absolute inset-0 border-2 border-dashed border-gray-600 rounded-full opacity-70 animate-spin-slow pointer-events-none"></div>
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_50px_rgba(255,255,255,0.1)] group-hover:shadow-[inset_0_0_80px_rgba(255,255,255,0.2)] transition-all duration-500"></div>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Hero />
      {/* Other sections will go here */}
    </div>
  );
};

export default Portfolio;