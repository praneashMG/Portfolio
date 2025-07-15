import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const Portfolio = () => {
  // Initialize parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach(element => {
        const speed = parseFloat(element.getAttribute('data-parallax-speed') || 0.5);
        const offset = scrollY * speed;
        element.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 overflow-x-hidden relative">
      {/* Parallax background layers */}
      <div 
        data-parallax 
        data-parallax-speed="0.2"
        className="fixed inset-0 z-0"
      >
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-medium"></div>
      </div>
      <div 
        data-parallax 
        data-parallax-speed="0.4"
        className="fixed inset-0 z-0"
      >
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse-fast"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 sm:px-6">
        {/* Header */}
        <motion.header 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-teal-300 text-transparent bg-clip-text"
            whileHover={{ scale: 1.02 }}
          >
            Praneash M G
          </motion.h1>
          <motion.div 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Web Developer | Software Engineer | AI Enthusiast
          </motion.div>
          
          <motion.div 
            className="mt-10 flex justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.a 
              href="https://www.linkedin.com/in/praneash-m-g-9a2075286/"
              className="px-5 py-3 bg-gray-800 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
              whileHover={{ y: -3 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </motion.a>
            <motion.a 
              href="https://github.com/praneashMG"
              className="px-5 py-3 bg-gray-800 rounded-lg flex items-center gap-2 hover:bg-purple-600 transition-colors"
              whileHover={{ y: -3 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </motion.a>
          </motion.div>
        </motion.header>
        
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <Section title="About Me">
              <p className="text-gray-300 leading-relaxed">
                As a Web Developer, I focus on creating clean, efficient, and interactive web applications. 
                I thrive on problem-solving, collaboration, and staying current with emerging technologies. 
                My goal is to build functional, user-friendly websites that continuously evolve through innovation and improvement.
              </p>
            </Section>
            
            {/* Education */}
            <Section title="Education">
              <div className="space-y-6">
                <TimelineItem 
                  title="M.Sc. in Software Systems (Pursuing)" 
                  subtitle="Kongu Engineering College, Perundurai"
                  period="2021 - Present"
                  badge="CGPA: 7.48"
                />
                <TimelineItem 
                  title="Higher Secondary Certificate (HSC)" 
                  subtitle="Vani Vidyalaya Secondary School"
                  period="2021"
                  badge="79.49%"
                />
                <TimelineItem 
                  title="Secondary School Leaving Certificate (SSLC)" 
                  subtitle="Vani Vidyalaya Secondary School"
                  period="2019"
                  badge="68.60%"
                />
              </div>
            </Section>
            
            {/* Internship Experience */}
            <Section title="Internship Experience">
              <div className="space-y-8">
                <ExperienceCard 
                  title="NUTZ TECHNOVATION"
                  period="JUNE 2024 - OCT 2024"
                  projects={[
                    {
                      name: "MobileMart",
                      description: "A mobile e-commerce platform built with React and CSS, providing a seamless shopping experience and efficient cart management.",
                      tech: ["React", "CSS", "E-commerce"]
                    },
                    {
                      name: "Glamora",
                      description: "A responsive beauty product e-commerce platform developed using React Vite and Tailwind CSS, ensuring an intuitive and engaging user experience.",
                      tech: ["React Vite", "Tailwind CSS", "Responsive Design"]
                    }
                  ]}
                />
              </div>
            </Section>
          </div>
          
          {/* Right column */}
          <div className="space-y-12">
            {/* Skills */}
            <Section title="Technical Skills">
              <div className="grid grid-cols-2 gap-4">
                <SkillCategory title="Web Development" skills={["HTML", "CSS", "React", "PHP", "WordPress", "Bootstrap", "jQuery", "Express", "Node.js"]} />
                <SkillCategory title="Database" skills={["MongoDB", "MySQL", "SQL"]} />
                <SkillCategory title="Programming" skills={["Java", "C", "Python"]} />
                <SkillCategory title="Design Tools" skills={["Figma"]} />
              </div>
            </Section>
            
            {/* Projects */}
            <Section title="Projects">
              <div className="space-y-6">
                <ProjectCard 
                  title="MobileMart"
                  description="React & CSS e-commerce platform"
                />
                <ProjectCard 
                  title="Glamora"
                  description="React Vite & Tailwind CSS beauty store"
                />
                <ProjectCard 
                  title="Bike Car Taxi Shop"
                  description="HTML, CSS, Bootstrap, MongoDB"
                />
                <ProjectCard 
                  title="Physiotherapy Clinic"
                  description="PHP & SQL website"
                />
                <ProjectCard 
                  title="Smart Door Lock"
                  description="POC & Hackathon project"
                />
              </div>
            </Section>
            
            {/* AI/ML Project */}
            <Section title="AI/ML Project">
              <div className="bg-gradient-to-br from-blue-900/30 to-teal-900/30 p-5 rounded-xl border border-gray-700">
                <h3 className="text-lg font-bold text-teal-300 mb-2">
                  Improved Student Performance Prediction Using Stacking Ensemble Learning
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  Published IEEE Conference Paper (2025) — Developed a stacked ensemble ML model combining
                  Decision Tree, KNN, and Random Forest classifiers to accurately predict student academic outcomes.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-2 py-1 bg-blue-500/20 rounded">Machine Learning</span>
                  <span className="text-xs px-2 py-1 bg-blue-500/20 rounded">Ensemble Learning</span>
                  <span className="text-xs px-2 py-1 bg-blue-500/20 rounded">Python</span>
                  <span className="text-xs px-2 py-1 bg-blue-500/20 rounded">IEEE Publication</span>
                </div>
              </div>
            </Section>
            
            {/* Interests */}
            <Section title="Areas of Interest">
              <div className="space-y-4">
                <InterestCard 
                  title="Web Development"
                  description="Building dynamic, responsive web applications with React, Tailwind CSS, JavaScript, PHP and SQL with strong backend integration."
                />
                <InterestCard 
                  title="WordPress Development"
                  description="Creating and customizing WordPress sites to ensure optimal functionality and user experience."
                />
              </div>
            </Section>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Praneash M G. All rights reserved.</p>
          <p className="mt-2">📍 Erode | 📧 praneashp@gmail.com | 📱 9715499118</p>
        </footer>
      </div>
      
      {/* Floating contact button */}
      <motion.a 
        href="mailto:praneashp@gmail.com"
        className="fixed right-6 bottom-6 bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4 rounded-full shadow-lg z-20"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </motion.a>
    </div>
  );
};

// Reusable components
const Section = ({ title, children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
    >
      <h2 className="text-xl font-bold text-white mb-4 flex items-center">
        <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
        {title}
      </h2>
      {children}
    </motion.div>
  );
};

const TimelineItem = ({ title, subtitle, period, badge }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-4">
      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
      <div className="w-0.5 h-full bg-gray-700 mt-1"></div>
    </div>
    <div className="pb-4">
      <h3 className="font-semibold text-gray-100">{title}</h3>
      <p className="text-gray-400 text-sm">{subtitle}</p>
      <div className="flex justify-between mt-2 text-sm">
        <span className="text-gray-500">{period}</span>
        {badge && (
          <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
            {badge}
          </span>
        )}
      </div>
    </div>
  </div>
);

const ExperienceCard = ({ title, period, projects }) => (
  <div>
    <div className="flex justify-between items-start mb-4">
      <h3 className="font-bold text-lg text-white">{title}</h3>
      <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded">
        {period}
      </span>
    </div>
    
    <div className="space-y-6">
      {projects.map((project, index) => (
        <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
          <h4 className="font-semibold text-blue-300 mb-2">{project.name}</h4>
          <p className="text-gray-300 text-sm mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span key={i} className="text-xs px-2 py-1 bg-gray-700 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SkillCategory = ({ title, skills }) => (
  <div>
    <h4 className="font-semibold text-gray-400 mb-2">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span 
          key={index}
          className="text-sm px-3 py-1.5 bg-gray-700 rounded-lg"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const ProjectCard = ({ title, description }) => (
  <motion.div 
    className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
    whileHover={{ y: -5 }}
  >
    <h4 className="font-semibold text-white">{title}</h4>
    <p className="text-gray-400 text-sm mt-1">{description}</p>
  </motion.div>
);

const InterestCard = ({ title, description }) => (
  <div className="bg-gradient-to-br from-blue-900/20 to-teal-900/20 p-4 rounded-lg border border-gray-700">
    <h4 className="font-semibold text-white mb-2">{title}</h4>
    <p className="text-gray-300 text-sm">{description}</p>
  </div>
);

// CSS animations for the background
const style = `
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.2; }
  }
  
  @keyframes pulse-medium {
    0%, 100% { opacity: 0.15; }
    50% { opacity: 0.25; }
  }
  
  @keyframes pulse-fast {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.3; }
  }
  
  .animate-pulse-slow {
    animation: pulse-slow 6s infinite;
  }
  
  .animate-pulse-medium {
    animation: pulse-medium 4s infinite;
  }
  
  .animate-pulse-fast {
    animation: pulse-fast 3s infinite;
  }
`;

export default function App() {
  return (
    <>
      <style>{style}</style>
      <Portfolio />
    </>
  );
}
