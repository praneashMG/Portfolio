import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, Database, PenTool, Terminal, Cpu, 
  GraduationCap, Briefcase, BookOpen, 
  MapPin, Phone, Mail, ExternalLink
} from 'lucide-react';

// --- Data ---
const experienceData = [
  {
    company: "NUTZ TECHNOVATION",
    role: "Intern",
    period: "June 2024 - Oct 2024",
    projects: [
      {
        name: "MobileMart",
        desc: "Mobile e-commerce platform built with React and CSS.",
        tags: ["React", "CSS", "E-commerce"]
      },
      {
        name: "Glamora",
        desc: "Responsive beauty product platform using React Vite and Tailwind.",
        tags: ["React Vite", "Tailwind", "Responsive"]
      }
    ]
  }
];

const educationData = [
  {
    degree: "M.Sc. in Software Systems",
    school: "Kongu Engineering College",
    period: "2021 - Present",
    score: "CGPA: 7.48"
  },
  {
    degree: "Higher Secondary (HSC)",
    school: "Vani Vidyalaya Secondary School",
    period: "2021",
    score: "79.49%"
  },
  {
    degree: "SSLC",
    school: "Vani Vidyalaya Secondary School",
    period: "2019",
    score: "68.60%"
  }
];

const projectsData = [
  { title: "MobileMart", desc: "React & CSS e-commerce platform", icon: <Globe size={20} /> },
  { title: "Glamora", desc: "React Vite & Tailwind CSS beauty store", icon: <PenTool size={20} /> },
  { title: "Bike Rental", desc: "HTML, CSS, Bootstrap, MongoDB", icon: <Terminal size={20} /> },
  { title: "Physio Clinic", desc: "PHP & SQL management website", icon: <Database size={20} /> },
  { title: "Smart Door Lock", desc: "IoT POC & Hackathon project", icon: <Cpu size={20} /> },
];

const aiProject = {
  title: "Improved Student Performance Prediction",
  subtitle: "Using Stacking Ensemble Learning",
  desc: "Published IEEE Conference Paper (2025). Developed a stacked ensemble ML model combining Decision Tree, KNN, and Random Forest classifiers.",
  tags: ["Machine Learning", "Python", "IEEE Publication"]
};

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

// --- Components ---

const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{title}</h2>
    <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
    {subtitle && <p className="text-slate-500">{subtitle}</p>}
  </div>
);

const Experience = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title="Experience" subtitle="My professional journey" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Internship Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-blue-600" size={24} />
              <h3 className="text-2xl font-bold text-slate-800">Internship</h3>
            </div>
            
            {experienceData.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="border-l-2 border-slate-200 pl-8 ml-3 py-2 relative"
              >
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
                <h4 className="text-xl font-bold text-slate-900">{exp.company}</h4>
                <p className="text-slate-500 text-sm mb-4 font-medium">{exp.role} • {exp.period}</p>
                
                <div className="space-y-4">
                  {exp.projects.map((proj, pIdx) => (
                    <div key={pIdx} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <h5 className="font-semibold text-slate-800 flex justify-between items-center">
                        {proj.name}
                      </h5>
                      <p className="text-slate-600 text-sm mt-1 mb-2">{proj.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {proj.tags.map(tag => (
                          <span key={tag} className="text-xs bg-white border border-slate-200 text-slate-500 px-2 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-teal-600" size={24} />
              <h3 className="text-2xl font-bold text-slate-800">Education</h3>
            </div>
            
            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{edu.degree}</h4>
                      <p className="text-slate-600">{edu.school}</p>
                    </div>
                    <span className="bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 text-sm text-slate-500">
                    <BookOpen size={14} /> Score: <span className="text-slate-900 font-medium">{edu.score}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader title="Featured Projects" />

        {/* AI Highlight Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4 text-blue-300 font-semibold text-sm uppercase tracking-wide">
              <Cpu size={16} /> Research Project
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-2">{aiProject.title}</h3>
            <p className="text-slate-300 text-lg mb-6">{aiProject.subtitle}</p>
            <p className="text-slate-400 mb-8 max-w-2xl leading-relaxed">
              {aiProject.desc}
            </p>
            <div className="flex flex-wrap gap-3">
              {aiProject.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Standard Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {project.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 text-sm">
                {project.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Let's Connect</h2>
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-slate-600">
          <span className="flex items-center gap-2"><MapPin size={18} className="text-blue-600"/> Erode, India</span>
          <a href="mailto:praneashp@gmail.com" className="flex items-center gap-2 hover:text-blue-600"><Mail size={18} className="text-blue-600"/> praneashp@gmail.com</a>
          <span className="flex items-center gap-2"><Phone size={18} className="text-blue-600"/> +91 9715499118</span>
        </div>
        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Praneash M G. All rights reserved.</p>
      </div>
    </footer>
  );
};

// --- Main App ---
export default function Portfolio() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Experience />
      <Projects />
      <Footer />
      
      {/* Floating Action Button */}
      <motion.a 
        href="mailto:praneashp@gmail.com"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-blue-500/30 transition-shadow z-40"
      >
        <Mail size={24} />
      </motion.a>
    </div>
  );
}