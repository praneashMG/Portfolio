import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Github, Linkedin, Twitter, Download, Send, Menu, X, 
  ShoppingBag, Utensils, Gem, Sparkles, ExternalLink, Code2, 
  Construction, Bike, Shirt 
} from 'lucide-react';

// --- Assets ---
const profileImage = "/src/assets/praneash.jpeg";

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

// --- Navbar Component ---
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="text-xl md:text-2xl font-bold tracking-tight text-slate-900"
        >
          <span className="text-blue-600">P</span>raneash M G
        </motion.div>

        <ul className="hidden md:flex space-x-8">
          {navLinks.map((item, index) => (
            <motion.li
              key={item}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
              className="relative group"
            >
              <a
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors duration-300"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.button 
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-slate-600 hover:text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-b border-slate-200 px-6 pb-6 pt-2 shadow-xl"
        >
          <ul className="flex flex-col space-y-4">
            {navLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-base font-medium text-slate-600 hover:text-blue-600"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

// --- Hero Component ---
const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section 
      id="home" 
      className="w-full min-h-screen bg-slate-50 text-slate-900 flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden pt-24 pb-12 lg:py-0"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4 w-64 md:w-80 h-64 md:h-80 rounded-full bg-blue-200/40 blur-3xl -z-10" />
      <motion.div style={{ y: y2 }} className="absolute bottom-1/3 right-1/4 w-72 md:w-96 h-72 md:h-96 rounded-full bg-indigo-200/40 blur-3xl -z-10" />

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
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
              href="#contact" 
              className="bg-white border border-slate-200 text-slate-700 px-8 py-3.5 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 hover:border-slate-300 hover:shadow-sm w-full sm:w-auto"
            >
              <Send size={18} /> Contact Me
            </motion.a>
          </motion.div>

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

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end items-center order-1 lg:order-2"
        >
        
        </motion.div>
      </div>
    </section>
  );
};

// --- Project Showcase Component ---
const ProjectShowcase = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const deckRef = useRef(null);

  // Updated Data with Lucide Icons and Clean Colors
  const projects = [
    {
      id: 1,
      title: "E-commerce Store",
      category: "Online Shopping",
      description: "Modern e-commerce platform with product listings.",
      details: "Developed a full-featured online store with product categories, user reviews, shopping cart, and secure checkout. Integrated with payment gateways and inventory management.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      accentColor: "text-amber-600",
      bgColor: "bg-amber-50",
      liveDemo: "https://e-com-beauty-products.vercel.app/",
      sourceCode: "#",
      icon: <ShoppingBag className="w-8 h-8 md:w-12 md:h-12 text-amber-600" />
    },
    {
      id: 2,
      title: "PGR-Restaurant",
      category: "Hospitality",
      description: "Elegant website for a high-end restaurant experience.",
      details: "Designed a single-page restaurant website featuring a dynamic hero slider, interactive menu, and reservation form. Focused on luxurious user experience with smooth animations.",
      technologies: ["HTML5", "CSS3", "JS", "IonIcons"],
      accentColor: "text-rose-600",
      bgColor: "bg-rose-50",
      liveDemo: "https://pgr-spicy.vercel.app/",
      sourceCode: "https://github.com/praneashMG/PGR_SPICY",
      icon: <Utensils className="w-8 h-8 md:w-12 md:h-12 text-rose-600" />
    },
    {
      id: 3,
      title: "Luxe Jewels",
      category: "Luxury Retail",
      description: "Dynamic and responsive jewelry e-commerce website.",
      details: "Built using React and Tailwind CSS to showcase high-end jewelry items. Features zoom capabilities, gallery views, and a sophisticated visual design language.",
      technologies: ["React", "Tailwind CSS"],
      accentColor: "text-purple-600",
      bgColor: "bg-purple-50",
      liveDemo: "https://jewelery-taupe.vercel.app/",
      sourceCode: "https://github.com/praneashMG/JEWELERY",
      icon: <Gem className="w-8 h-8 md:w-12 md:h-12 text-purple-600" />
    },
    {
      id: 4,
      title: "Glow Beauty",
      category: "Cosmetics",
      description: "Elegant online store for beauty and skincare products.",
      details: "Created a visually appealing site with product filtering, wishlists, and user accounts. Mobile-first design philosophy ensures fast loading times and accessibility.",
      technologies: ["React", "Vite", "Tailwind"],
      accentColor: "text-teal-600",
      bgColor: "bg-teal-50",
      liveDemo: "https://e-com-beauty-products.vercel.app/",
      sourceCode: "https://github.com/praneashMG/e-com-beauty-products",
      icon: <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-teal-600" />
    }
  ];

  const handleCardClick = (id) => setActiveCard(activeCard === id ? null : id);

  // Close card when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (deckRef.current && !deckRef.current.contains(e.target)) {
        setActiveCard(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-white py-24 px-4 md:px-8 overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50/50 rounded-bl-full -z-10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-indigo-50/50 rounded-tr-full -z-10 blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-2 mb-4">Featured Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Interactive showcase. Hover over the deck to explore, click a card to reveal details.
          </p>
        </motion.div>

        {/* Card Deck Area */}
        <div 
          ref={deckRef}
          className="relative h-[600px] md:h-[550px] w-full max-w-5xl mx-auto flex items-center justify-center mb-24"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Empty State / Instructional Base */}
          {!isHovered && activeCard === null && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute z-0 flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-200 rounded-3xl"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 text-blue-600">
                <Code2 size={32} />
              </div>
              <p className="text-slate-500 font-medium">Hover to Reveal Deck</p>
            </motion.div>
          )}

          {/* Cards */}
          {projects.map((project, index) => {
            // Logic for positioning
            let transform = '';
            let zIndex = index;
            let opacity = 1;
            
            // Base sizes
            const baseWidth = 'w-72 md:w-80'; 
            const baseHeight = 'h-96 md:h-[26rem]';
            const expandedWidth = 'w-[90vw] md:w-[40rem]';
            const expandedHeight = 'h-[32rem]';

            if (activeCard === project.id) {
              // Active: Center and expand
              transform = 'translate(-50%, -50%) rotate(0deg)';
              zIndex = 50;
            } else if (isHovered) {
              // Hovered: Spread out
              // Responsive positions: simplified spread on mobile, full spread on desktop
              const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
              
              const spreadX = isMobile ? 40 : 180; // smaller spread on mobile
              const spreadY = isMobile ? 30 : 60;
              const rotation = isMobile ? 5 : 12;

              // Calculate positions centered around index 1.5 (for 4 items)
              const offset = index - 1.5; 
              const x = offset * spreadX;
              const y = Math.abs(offset) * -30 - (isMobile ? 100 : 0); // Arc effect
              const rot = offset * rotation;

              transform = `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rot}deg)`;
              zIndex = 10 + index;
              if (activeCard) opacity = 0.4; // Dim others
            } else {
              // Stacked
              transform = `translate(-50%, -50%) translate(0, ${index * -4}px) rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`;
              zIndex = index;
            }

            return (
              <div
                key={project.id}
                className={`absolute left-1/2 top-1/2 transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] origin-center shadow-xl rounded-2xl overflow-hidden border border-slate-100 bg-white
                  ${activeCard === project.id ? `${expandedWidth} ${expandedHeight} cursor-default` : `${baseWidth} ${baseHeight} cursor-pointer hover:shadow-2xl`}
                `}
                style={{ transform, zIndex, opacity }}
                onClick={() => handleCardClick(project.id)}
              >
                <div className="h-full flex flex-col relative bg-white">
                  {/* Decorative Header Bar */}
                  <div className={`h-2 w-full ${project.bgColor.replace('bg-', 'bg-gradient-to-r from-transparent via-') + project.bgColor.replace('bg-', ' to-')}`} />

                  <div className="p-6 md:p-8 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase ${project.bgColor} ${project.accentColor}`}>
                        {project.category}
                      </span>
                      <div className={`p-3 rounded-xl ${project.bgColor} bg-opacity-50`}>
                        {project.icon}
                      </div>
                    </div>

                    {/* Title & Desc */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
                    </div>

                    {/* Expanded Content */}
                    <div className={`transition-all duration-500 overflow-hidden flex-grow ${activeCard === project.id ? 'opacity-100 max-h-96 mt-4' : 'opacity-0 max-h-0'}`}>
                      <div className="pt-4 border-t border-slate-100">
                        <p className="text-slate-700 mb-6 leading-relaxed">{project.details}</p>
                        
                        <div className="mb-6">
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, i) => (
                              <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-medium border border-slate-200">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer / Actions */}
                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-100">
                      <button className={`text-sm font-semibold transition-colors ${project.accentColor}`}>
                        {activeCard === project.id ? "Close Details" : "View Details"}
                      </button>
                      
                      {activeCard === project.id && (
                        <div className="flex gap-3">
                          {project.sourceCode && (
                            <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all">
                              <Github size={18} />
                            </a>
                          )}
                          {project.liveDemo && (
                            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-blue-600 transition-colors">
                              Live Demo <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Work In Progress Section - Cleaned up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { 
              title: "Bike Rental Platform", 
              link: "https://bik-e-rental.vercel.app/", 
              icon: <Bike className="text-yellow-600" size={24} />,
              label: "Under Development"
            },
            { 
              title: "Fashion Boutique", 
              link: "https://pgr-dress-x2q1.vercel.app/", 
              icon: <Shirt className="text-purple-600" size={24} />,
              label: "Coming Soon"
            }
          ].map((wip, idx) => (
            <a 
              key={idx}
              href={wip.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 flex items-center gap-6 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                <Construction size={64} />
              </div>
              
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {wip.icon}
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                  <span className="text-xs font-bold text-yellow-600 uppercase tracking-wide">{wip.label}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{wip.title}</h3>
              </div>
              
              <div className="ml-auto opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <ExternalLink size={20} className="text-slate-400" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

// --- Main App/Portfolio ---
export default function Portfolio() {
  return (
    <div className="bg-slate-50 min-h-screen selection:bg-blue-100 selection:text-blue-900 font-sans text-slate-900">
      <ProjectShowcase />
    </div>
  );
}