import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Palette, FileCode, Layout, Code2, Globe } from 'lucide-react';

// --- Animations ---
// (Included here in case you need them in this file)
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

const SkillsSection = () => {
  // Your specific skills list
  const skillSet = [
    { 
      name: "React", 
      icon: <Atom size={28} />, 
      color: "text-blue-500", 
      bg: "bg-blue-50" 
    },
    { 
      name: "Tailwind CSS", 
      icon: <Palette size={28} />, 
      color: "text-teal-500", 
      bg: "bg-teal-50" 
    },
    { 
      name: "HTML5", 
      icon: <FileCode size={28} />, 
      color: "text-orange-500", 
      bg: "bg-orange-50" 
    },
    { 
      name: "CSS3", 
      icon: <Layout size={28} />, 
      color: "text-blue-600", 
      bg: "bg-blue-50" 
    },
    { 
      name: "JavaScript", 
      icon: <Code2 size={28} />, 
      color: "text-yellow-500", 
      bg: "bg-yellow-50" 
    },
    { 
      name: "WordPress", 
      icon: <Globe size={28} />, 
      color: "text-indigo-500", 
      bg: "bg-indigo-50" 
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            My core technology stack for building modern, responsive web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {skillSet.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex items-center p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg hover:border-blue-100 transition-all duration-300 group cursor-default"
            >
              <div className={`p-4 rounded-xl ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <div className="ml-5">
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;