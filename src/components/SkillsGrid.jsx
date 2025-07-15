import React, { useState, useRef, useEffect } from 'react';
import {
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaPhp,
  FaWordpress,
  FaBootstrap,
  FaJava,
  FaPython,
  FaFigma,
} from "react-icons/fa";
import {
  SiJquery,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiC,
  SiPostgresql,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, label: "HTML", color: "bg-orange-500" },
  { icon: <FaReact className="text-blue-400" />, label: "React", color: "bg-blue-400" },
  { icon: <FaCss3Alt className="text-blue-600" />, label: "CSS", color: "bg-blue-600" },
  { icon: <FaPhp className="text-indigo-700" />, label: "PHP", color: "bg-indigo-700" },
  { icon: <FaWordpress className="text-blue-800" />, label: "WordPress", color: "bg-blue-800" },
  { icon: <FaBootstrap className="text-purple-600" />, label: "Bootstrap", color: "bg-purple-600" },
  { icon: <SiJquery className="text-blue-600" />, label: "JQuery", color: "bg-blue-600" },
  { icon: <SiExpress className="text-gray-800" />, label: "Express.js", color: "bg-gray-800" },
  { icon: <SiNodedotjs className="text-green-600" />, label: "Node.js", color: "bg-green-600" },
  { icon: <SiMongodb className="text-green-700" />, label: "MongoDB", color: "bg-green-700" },
  { icon: <SiMysql className="text-blue-700" />, label: "MySQL", color: "bg-blue-700" },
  { icon: <SiPostgresql className="text-blue-500" />, label: "SQL", color: "bg-blue-500" },
  { icon: <FaJava className="text-red-600" />, label: "Java", color: "bg-red-600" },
  { icon: <SiC className="text-blue-500" />, label: "C", color: "bg-blue-500" },
  { icon: <FaPython className="text-yellow-500" />, label: "Python", color: "bg-yellow-500" },
  { icon: <FaFigma className="text-pink-500" />, label: "Figma", color: "bg-pink-500" },
];

const SkillsGrid = () => {
  const [activeCard, setActiveCard] = useState(null);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };
    
    container.addEventListener('mousemove', handleMouseMove);
    
    // Intersection Observer to trigger animation when in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(container);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.2,
      x: "-50%",
      y: "-50%",
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const calculateRotation = (index) => {
    if (!containerRef.current || activeCard !== index) return { rotateX: 0, rotateY: 0 };
    
    const container = containerRef.current;
    const cardElement = document.getElementById(`skill-card-${index}`);
    if (!cardElement) return { rotateX: 0, rotateY: 0 };
    
    const containerRect = container.getBoundingClientRect();
    const cardRect = cardElement.getBoundingClientRect();
    
    const cardCenterX = cardRect.left + cardRect.width/2 - containerRect.left;
    const cardCenterY = cardRect.top + cardRect.height/2 - containerRect.top;
    
    const rotateY = (mousePosition.x - cardCenterX) / cardRect.width * 20;
    const rotateX = (mousePosition.y - cardCenterY) / cardRect.height * -20;
    
    return { rotateX, rotateY };
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden px-4 py-16">
      {/* 3D background */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-purple-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-teal-400 opacity-10 rounded-full blur-3xl animate-ping"></div>
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 10 + 2}px`,
            height: `${Math.random() * 10 + 2}px`,
            backgroundColor: i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#c084fc' : '#34d399',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Skills grid */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent mb-12 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Technical Skills
        </motion.h2>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center"
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ position: "relative", minHeight: "400px" }}
        >
          {skills.map((skill, index) => {
            const rotation = calculateRotation(index);
            return (
              <motion.div
                key={index}
                id={`skill-card-${index}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.15,
                  zIndex: 50,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                  ...rotation
                }}
                onHoverStart={() => setActiveCard(index)}
                onHoverEnd={() => setActiveCard(null)}
                className="relative bg-gray-800 hover:bg-gray-700 transition-all duration-300 rounded-2xl p-5 w-24 h-24 flex flex-col items-center justify-center shadow-xl text-white cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
              >
                {/* 3D shadow layer */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-30"
                  style={{
                    background: `linear-gradient(145deg, ${skill.color}, #000)`,
                    transform: 'translateZ(-15px)',
                    filter: 'blur(5px)'
                  }}
                />
                
                {/* Glowing border */}
                <div 
                  className="absolute inset-0 rounded-2xl border-2 opacity-0 transition-opacity"
                  style={{
                    borderColor: skill.color,
                    boxShadow: `0 0 15px ${skill.color}, inset 0 0 10px ${skill.color}`,
                    transform: 'translateZ(5px)',
                    opacity: activeCard === index ? 1 : 0
                  }}
                />
                
                <div className="text-3xl mb-2 relative z-10" style={{ transform: 'translateZ(20px)' }}>
                  {skill.icon}
                </div>
                <p className="text-xs text-center relative z-10" style={{ transform: 'translateZ(20px)' }}>
                  {skill.label}
                </p>
                
                {/* Floating animation */}
                {activeCard !== index && (
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3 + index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsGrid;