// src/components/ProjectShowcase.jsx
import React, { useState, useRef, useEffect } from 'react';

const ProjectShowcase = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const deckRef = useRef(null);
    
  const projects = [
    
     {
      id: 1,
      title: "E-commerce Store",
      category: "Online Shopping",
      description: "Modern e-commerce platform with product listings",
      details: "Developed a full-featured online store with product categories, user reviews, shopping cart, and secure checkout. Integrated with payment gateways and inventory management using React.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
      color: "from-amber-500 to-orange-600",
      accent: "bg-amber-500",
            liveDemo: "https://e-com-beauty-products.vercel.app/",
                sourceCode: "https://github.com/your-repo/bike-taxi",


      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "PGR-Restaurant",
      category: "Restaurant",
      description: "Elegant and responsive website for a high-end restaurant",
      details: "Designed and developed a modern, single-page restaurant website featuring a dynamic hero slider, interactive menu, online reservation form, and testimonials. Focused on a luxurious user experience with custom CSS animations and parallax effects.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Google Fonts", "IonIcons"],
      color: "from-rose-500 to-pink-600",
      accent: "bg-rose-500",
            liveDemo: "https://pgr-spicy.vercel.app/",
                sourceCode: "https://github.com/praneashMG/PGR_SPICY",


      icon: (
       <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3v18M16 3c0 3-1 5-3 6v12" />
  </svg>
      )
    },
    {
      id: 3,
  title: "React Jewels Store",
  category: "E-commerce Website",
  description: "Developed a dynamic and responsive jewelry e-commerce website",
  details: "Built using React, Tailwind CSS",
  technologies: ["React", "Tailwind CSS", ],
  color: "from-yellow-400 to-pink-500",
  accent: "bg-yellow-400",
      liveDemo: "https://jewelery-taupe.vercel.app/",
          sourceCode: "https://github.com/praneashMG/JEWELERY",


      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
   
    {
      id: 4,
      title: "Beauty Products",
      category: "E-commerce",
      description: "Elegant online store for beauty products",
      details: "Created a visually appealing e-commerce site with product filtering, wishlists, and user accounts. Focused on mobile-first design and fast loading times using React, Vite and Tailwind CSS.",
      technologies: ["React", "Vite", "Tailwind CSS", "Node.js"],
      color: "from-yellow-600 to-orange-700",
      accent: "bg-yellow-600",
            
                 liveDemo: "https://e-com-beauty-products.vercel.app/",
                sourceCode: "https://github.com/praneashMG/e-com-beauty-products",


      icon: (
  
   <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
)

    }
  ];

  const handleCardClick = (id) => {
    if (activeCard === id) {
      setActiveCard(null);
    } else {
      setActiveCard(id);
    }
  };

  const handleDeckHover = (isHovering) => {
    setIsHovered(isHovering);
  };

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
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8 relative overflow-hidden">
      <header className="max-w-4xl mx-auto text-center mb-12 mt-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400 mb-4">
           Project Showcase
        </h1>
        {/* <p className="text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto">
          Explore my projects through this interactive card deck. Hover to spread cards, click to view details.
        </p> */}
      </header>

      <div 
        ref={deckRef}
        className="relative max-w-6xl mx-auto h-[550px] flex items-center justify-center"
        onMouseEnter={() => handleDeckHover(true)}
        onMouseLeave={() => handleDeckHover(false)}
      >
        {/* Deck base when not spread */}
        {!isHovered && activeCard === null && (
          <div className="absolute w-64 h-96 bg-gradient-to-br from-indigo-600 to-purple-800 rounded-2xl shadow-2xl border-4 border-white/20 flex flex-col items-center justify-center z-0">
            <div className="text-6xl mb-4">🃏</div>
            <h2 className="text-2xl font-bold">Project Deck</h2>
            <p className="mt-2 text-indigo-200">Hover to reveal projects</p>
          </div>
        )}

        {/* Project cards */}
        {projects.map((project, index) => {
          let transform = '';
          let zIndex = index;
          let opacity = 1;
          let width = '16rem'; // 64
          let height = '24rem'; // 96
          
          if (activeCard === project.id) {
            // Active card expands to show details
            transform = 'translate(-50%, -50%) rotate(0deg)';
            zIndex = 50;
            width = '22rem'; // Expanded width
            height = '30rem'; // Expanded height
          } else if (isHovered) {
            // Spread positions for each card
            const positions = [
  { x: '-320px', y: '-30px', rot: '-22deg' },   // far left
  { x: '-160px', y: '-70px', rot: '-12deg' },   // left
  { x: '0',      y: '-100px', rot: '0deg' },    // center
  { x: '160px',  y: '-70px', rot: '12deg' },    // right
];

            
            transform = `translate(-50%, -50%) translate(${positions[index].x}, ${positions[index].y}) rotate(${positions[index].rot})`;
            zIndex = 10 + index;
            
            // Dim other cards when one is active
            if (activeCard) opacity = 0.5;
          } else {
            // Stacked position
            transform = `translate(-50%, -50%) translate(0, ${index * -10}px) rotate(${index % 2 === 0 ? '-3deg' : '3deg'})`;
            zIndex = index;
          }
          
          return (
            <div
              key={project.id}
              className={`absolute transition-all duration-700 ease-in-out origin-center ${
                activeCard === project.id ? 'cursor-auto' : 'cursor-pointer'
              }`}
              style={{
                transform,
                zIndex,
                opacity,
                left: '50%',
                top: '50%',
                width,
                height,
                transitionProperty: 'transform, width, height, opacity'
              }}
              onClick={() => handleCardClick(project.id)}
            >
              <div className={`w-full h-full rounded-2xl shadow-2xl overflow-hidden bg-gradient-to-br ${project.color} filter grayscale hover:filter-none transition duration-300`}>
                <div className="relative p-6 h-full flex flex-col">
                  {/* Card header */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white">
                      {project.category}
                    </span>
                    <div className="text-white">
                      {project.icon}
                    </div>
                  </div>
                  
                  {/* Main content */}
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-white/80 text-sm mb-4">{project.description}</p>
                    
                    {/* Expanded details */}
                    <div className={`overflow-hidden transition-all duration-500 ${
                      activeCard === project.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-white/90 text-sm mb-4">{project.details}</p>
                      
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="px-2 py-1 bg-white/10 backdrop-blur-sm rounded text-xs text-white">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Footer with action buttons */}
                  <div className="mt-auto pt-4 border-t border-white/20">
                    <div className="flex justify-between items-center">
                      <button 
                        className={`px-3 py-1 ${project.accent} rounded-full text-xs font-bold text-white hover:opacity-90 transition`}
                      >
                        {activeCard === project.id ? "Close Details" : "View Details"}
                      </button>
                      
                   {activeCard === project.id && (
  <div className="flex gap-2">
    {project.sourceCode && (
      <a 
        href={project.sourceCode} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white hover:bg-white/20 transition"
      >
        Source
      </a>
    )}
    {project.liveDemo && (
      <a 
        href={project.liveDemo} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="px-3 py-1 bg-white text-indigo-800 rounded-full text-xs font-bold hover:bg-indigo-100 transition"
      >
        Live Demo
      </a>
    )}
  </div>
)}


                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating cards decoration */}
      <div className="fixed top-20 left-10 w-32 h-32 rounded-full bg-pink-500/10 blur-3xl -z-0"></div>
      <div className="fixed bottom-40 right-20 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl -z-0"></div>
      <div className="fixed top-1/3 right-1/4 w-24 h-24 rounded-full bg-purple-500/10 blur-3xl -z-0"></div>

    </div>
  );
};

export default ProjectShowcase;