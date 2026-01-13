import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Code2, Cpu, BrainCircuit, Database, ShoppingBag } from "lucide-react";

// --- Data ---
// Added 'tags' and 'category' to make it look more professional
const projects = [
  {
    id: 1,
    title: "MobileMart",
    description: "A comprehensive mobile e-commerce platform engineered for seamless shopping experiences.",
    image: "/project/mart.jpg",
    tags: ["React", "Mobile", "UX/UI"],
    url: "#",
    icon: <ShoppingBag className="w-5 h-5" />
  },
  {
    id: 2,
    title: "Glamora",
    description: "High-performance beauty marketplace utilizing React Vite for speed and Tailwind for bespoke styling.",
    image: "/project/glamora.jpg",
    tags: ["React Vite", "Tailwind CSS"],
    url: "#",
    icon: <Code2 className="w-5 h-5" />
  },
  {
    id: 3,
    title: "Luxe Jewellery",
    description: "An elegant digital storefront for luxury items, focusing on visual fidelity and brand identity.",
    image: "/project/jewel.jpg",
    tags: ["React", "E-commerce"],
    url: "#",
    icon: <ShoppingBag className="w-5 h-5" />
  },
  {
    id: 4,
    title: "PGR Restaurant",
    description: "Interactive dining platform featuring dynamic menus and reservation systems.",
    image: "/project/restaurant.jpg",
    tags: ["Frontend", "Interactive"],
    url: "#",
    icon: <ShoppingBag className="w-5 h-5" />
  },
  {
    id: 5,
    title: "Physio Portal",
    description: "Secure clinic management system with a robust PHP/SQL backend for patient data handling.",
    image: "/project/physio.jpg",
    tags: ["PHP", "SQL", "Full Stack"],
    url: "#",
    icon: <Database className="w-5 h-5" />
  },
  {
    id: 6,
    title: "IoT Smart Lock",
    description: "Hardware-software integration POC for secure remote access control systems.",
    image: "/project/doorlock.jpg",
    tags: ["IoT", "Embedded", "POC"],
    url: "#",
    icon: <Cpu className="w-5 h-5" />
  },
  {
    id: 7,
    title: "Academic Predictor",
    description: "IEEE published Machine Learning ensemble for analyzing and predicting student performance trends.",
    image: "/project/ml.jpg",
    tags: ["Python", "ML", "Research"],
    url: "#",
    icon: <BrainCircuit className="w-5 h-5" />
  }
];

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProjectGallery() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="relative w-full min-h-screen bg-slate-50 py-24 px-6 md:px-12 lg:px-20 overflow-hidden font-sans text-slate-900">
      
      {/* Background Texture: Subtle Dot Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-3xl mb-20"
        >
          <motion.div variants={fadeInUp} className="flex items-center space-x-2 mb-4">
            <span className="h-px w-8 bg-blue-600"></span>
            <span className="text-blue-600 font-semibold tracking-wider text-sm uppercase">Selected Works</span>
          </motion.div>
          
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            Engineering digital experiences with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">precision & passion.</span>
          </motion.h2>
          
          <motion.p variants={fadeInUp} className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            A curated showcase of technical projects ranging from full-stack web applications 
            to machine learning research and IoT integrations.
          </motion.p>
        </motion.div>

        {/* Grid Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {projects.map((project) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInUp}
              className="group block h-full outline-none"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <article className="h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                
                {/* Image Container */}
                <div className="relative w-full h-56 overflow-hidden bg-slate-100">
                  {/* Placeholder fallback if image fails (simulated here with bg color) */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-300">
                    {project.icon}
                  </div>
                  
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = 'none'; // Hide broken images to show icon fallback
                    }}
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />
                  
                  {/* Top Right Arrow */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 text-slate-900" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex justify-between items-start mb-3">
                     <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-md border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer/Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a href="#" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 font-medium transition-colors">
            View Github Profile <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}