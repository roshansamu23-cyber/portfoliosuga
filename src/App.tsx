import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, 
  Layers, 
  HardHat, 
  ArrowRight, 
  Mail, 
  Linkedin, 
  MapPin,
  CheckCircle2,
  Zap,
  Cpu,
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  Maximize2,
  FileText
} from "lucide-react";
import { projects, Project } from "./data/projects";
import { SkillCard, FoundationAnimation, PTAnimation, SteelAnimation } from "./components/SkillCard";

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState("ALL PROJECTS");

  const filteredProjects = projects.filter(project => {
    if (filter === "ALL PROJECTS") return true;
    if (filter === "RELIGIOUS") return project.type.toUpperCase() === "RELIGIOUS";
    return project.type.toUpperCase().includes(filter);
  });

  const experiences = [
    {
      role: "Senior Structural Design Engineer",
      company: "Ramesh and Associates LLC, Dubai",
      period: "May 2025 - Present",
      description: "Leading structural design for high-rise and complex residential projects, ensuring compliance with DDA and DM regulations."
    },
    {
      role: "Structural Engineer",
      company: "DAT Engineering Consultant LLC, Dubai",
      period: "Mar 2023 - Apr 2025",
      description: "Worked as a Structural Engineer at DAT, delivering multiple B+G+1+R mansion villas under design-and-build contracts. Responsible for ensuring overall structural stability, with a focus on cost-effective solutions. Designed and coordinated raft foundations and post-tensioned (PT) slab systems, while working closely with BIM teams to ensure design accuracy and efficient site progress. Maintained strong coordination with multidisciplinary teams to support timely project delivery."
    },
    {
      role: "Structural Engineer",
      company: "Classic Architectural Engineering Consultants LLC, RAK",
      period: "Feb 2019 - Mar 2023",
      description: "Managed structural design and site supervision for residential and commercial projects under RAK Municipality."
    },
    {
      role: "Structural Engineer",
      company: "Abra Al Emarat Engineering Consultant LLC, RAK",
      period: "Jun 2015 - Mar 2018",
      description: "Structural analysis and design of reinforced concrete structures, coordinating with site teams for technical supervision."
    }
  ];

  const education = [
    {
      degree: "B.E in Civil Engineering",
      institution: "M.A.M College Of Engineering",
      year: "2013",
      score: "83%"
    },
    {
      degree: "HSC",
      institution: "Periyar maniyammai girls Higher Secondary School",
      year: "2009",
      score: "80%"
    }
  ];

  const certifications = [
    "G+12 RAK Municipality (Site Supervision)",
    "G+12 Dubai Municipality (Structural Design)",
    "G+4 RAK Municipality (Structural Design)"
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-gold-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-slate-950/90 backdrop-blur-xl py-4 border-b border-white/5 shadow-2xl" : "bg-transparent py-8"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-2xl tracking-tight text-white">JOSEPHIN<span className="text-gold-500">SUGANTHI</span></span>
          </div>
          <div className="flex items-center gap-4 md:gap-10">
            <a href="#projects" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-gold-400 transition-colors">Projects</a>
            <a href="#experience" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-gold-400 transition-colors hidden md:block">Experience</a>
            <a href="#skills" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-gold-400 transition-colors">Expertise</a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-gold-500 text-slate-950 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-gold-400 transition-all shadow-[0_0_20px_rgba(201,138,68,0.2)]"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.85] mb-8 tracking-tighter text-white">
              JOSEPHIN <br />
              <span className="text-gold-500 italic">SUGANTHI</span>
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-gold-500/50" />
              <span className="text-sm md:text-base text-slate-400 font-light tracking-[0.3em] uppercase">Senior Structural Engineer</span>
            </div>
            <p className="text-slate-400 text-lg max-w-lg mb-12 leading-relaxed font-light">
              Senior Structural Engineer specializing in high-rise stability, post-tensioned slabs, and complex foundation systems. Expert in Dubai/UAE building codes (DDA, DM, RAK Authority) with a focus on precision and landmark development.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 30px rgba(201, 138, 68, 0.4)",
                  backgroundColor: "#d7a666" 
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="px-10 py-4 bg-gold-500 text-slate-950 font-bold rounded-full flex items-center gap-2 group transition-all duration-300"
              >
                View Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/5] rounded-[40px] overflow-hidden border border-slate-800 bg-slate-900 relative group shadow-2xl">
              <img
                src="/Images/Front.jpg"
                alt="Structural Project"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-[1px] bg-gold-500" />
                  <span className="text-gold-500 font-mono text-sm uppercase tracking-widest">Dubai, UAE</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white">Structural Excellence</h3>
              </div>
            </div>
            
            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 p-6 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl hidden md:block"
            >
              <div className="text-3xl font-display font-bold text-gold-500">10+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Major Projects</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 tracking-tight text-white">SELECTED <span className="text-gold-500 italic">WORKS</span></h2>
              <p className="text-slate-500 max-w-md">A showcase of structural excellence across commercial, residential, and religious developments.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {["ALL PROJECTS", "RESIDENTIAL", "LUXURY VILLA", "RELIGIOUS"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                    filter === f
                      ? "bg-gold-500 text-slate-950 shadow-[0_0_20px_rgba(201,138,68,0.3)]"
                      : "bg-slate-900 border border-slate-800 text-slate-500 hover:border-gold-500/50 hover:text-gold-400"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-16">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="bg-slate-900/40 backdrop-blur-sm rounded-[40px] overflow-hidden border border-slate-800/50 shadow-2xl flex flex-col lg:grid lg:grid-cols-12 gap-0"
              >
                {/* Image Section */}
                <div className="lg:col-span-7 relative h-[400px] lg:h-full overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 to-transparent" />
                  <div className="absolute top-8 left-8 px-4 py-1.5 bg-gold-500 text-slate-950 text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-xl">
                    {project.type}
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between bg-slate-900/60">
                  <div>
                    <div className="flex flex-wrap gap-3 mb-8">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-950 rounded-lg border border-slate-800 text-slate-400 text-[10px] uppercase tracking-widest font-bold">
                        <MapPin className="w-3 h-3 text-gold-500" /> {project.location}
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-950 rounded-lg border border-slate-800 text-slate-400 text-[10px] uppercase tracking-widest font-bold">
                        <Building2 className="w-3 h-3 text-gold-500" /> {project.authority}
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-950 rounded-lg border border-slate-800 text-slate-400 text-[10px] uppercase tracking-widest font-bold">
                        <Maximize2 className="w-3 h-3 text-gold-500" /> {project.bua}
                      </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white leading-tight">{project.title}</h3>
                    <p className="text-slate-400 text-base mb-8 leading-relaxed italic">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-1 gap-8 mb-10">
                      <div>
                        <h4 className="text-gold-500 text-[10px] uppercase tracking-[0.3em] font-black mb-4 flex items-center gap-2">
                          <span className="w-4 h-[1px] bg-gold-500" /> Structural Scope
                        </h4>
                        <ul className="space-y-3">
                          {project.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {(project.analysis || project.foundation || project.software) && (
                        <div className="p-6 bg-slate-950/50 rounded-3xl border border-slate-800/50">
                          <h4 className="text-gold-500 text-[10px] uppercase tracking-[0.3em] font-black mb-4">Technical Specs</h4>
                          <div className="space-y-3">
                            {project.analysis && (
                              <div className="flex justify-between text-xs">
                                <span className="text-slate-500">Analysis</span>
                                <span className="text-slate-200 font-medium">{project.analysis}</span>
                              </div>
                            )}
                            {project.foundation && (
                              <div className="flex justify-between text-xs">
                                <span className="text-slate-500">Foundation</span>
                                <span className="text-slate-200 font-medium">{project.foundation}</span>
                              </div>
                            )}
                            {project.software && (
                              <div className="flex justify-between text-xs">
                                <span className="text-slate-500">Software</span>
                                <span className="text-slate-200 font-medium">{project.software.join(", ")}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {project.technicalImages && project.technicalImages.length > 0 && (
                    <div className="pt-8 border-t border-slate-800/50">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-gold-500 font-black mb-4">Technical Documentation</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {project.technicalImages.map((img, tIdx) => (
                          <div 
                            key={tIdx} 
                            onClick={() => setSelectedImage(img)}
                            className="aspect-square bg-slate-950 rounded-xl p-2 border border-slate-800 hover:border-gold-500/50 transition-colors cursor-pointer group"
                          >
                            <img 
                              src={img} 
                              alt="Structural Model" 
                              className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-12 bg-gold-500/10 rounded-2xl flex items-center justify-center border border-gold-500/20">
                  <Briefcase className="w-6 h-6 text-gold-500" />
                </div>
                <h2 className="text-3xl font-display font-bold text-white">PROFESSIONAL <span className="text-gold-500 italic">JOURNEY</span></h2>
              </div>
              
              <div className="space-y-12 relative before:absolute before:left-[23px] before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-800">
                {experiences.map((exp, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative pl-16"
                  >
                    <div className="absolute left-0 top-1 w-12 h-12 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-gold-500" />
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <span className="text-xs font-mono text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">{exp.period}</span>
                    </div>
                    <p className="text-gold-500/80 text-sm font-medium mb-3">{exp.company}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education & Certs */}
            <div className="space-y-20">
              <div>
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-2xl flex items-center justify-center border border-gold-500/20">
                    <GraduationCap className="w-6 h-6 text-gold-500" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-white">ACADEMIC <span className="text-gold-500 italic">FOUNDATION</span></h2>
                </div>
                
                <div className="grid gap-6">
                  {education.map((edu, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-slate-900 p-6 rounded-3xl border border-slate-800 relative group overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <GraduationCap className="w-24 h-24 text-gold-500" />
                      </div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                        <span className="text-2xl font-display font-bold text-gold-500">{edu.score}</span>
                      </div>
                      <p className="text-slate-400 text-sm mb-1">{edu.institution}</p>
                      <p className="text-gold-500/60 text-xs font-mono">{edu.year}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-2xl flex items-center justify-center border border-gold-500/20">
                    <Award className="w-6 h-6 text-gold-500" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-white">LICENSES & <span className="text-gold-500 italic">APPROVALS</span></h2>
                </div>
                
                <div className="grid gap-4">
                  {certifications.map((cert, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 bg-slate-900 rounded-2xl border border-slate-800"
                    >
                      <CheckCircle2 className="w-5 h-5 text-gold-500" />
                      <span className="text-slate-200 text-sm font-medium">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="skills" className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-950 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">TECHNICAL <span className="text-gold-500 italic">EXPERTISE</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Specialized engineering knowledge applied to complex structural challenges across the UAE.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard
              title="Foundation Systems"
              description="Expertise in pile and raft foundations for high-rise developments, ensuring stability in Dubai's unique soil conditions."
              icon={Layers}
              animation={<FoundationAnimation />}
            />
            <SkillCard
              title="PT Slab Design"
              description="Advanced design of post-tensioned slabs to optimize material usage and increase structural efficiency in large-scale projects."
              icon={Zap}
              animation={<PTAnimation />}
            />
            <SkillCard
              title="Dynamic Analysis"
              description="Specialized in seismic and wind load analysis for high-rise developments, ensuring structural integrity under extreme conditions."
              icon={Cpu}
              animation={<SteelAnimation />}
            />
          </div>
        </div>
      </section>

      {/* Software Proficiency */}
      <section className="py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {["ETABS", "SAFE", "RCM", "PROKON", "REVIT"].map((software) => (
              <div key={software} className="flex flex-col items-center gap-2">
                <span className="text-2xl font-display font-bold text-white tracking-tighter">{software}</span>
                <div className="w-8 h-[1px] bg-gold-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900/50 backdrop-blur-xl rounded-[60px] p-10 md:p-24 relative overflow-hidden border border-white/5 shadow-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-500/5 blur-[120px]" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px]" />
            
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 text-white leading-tight">LET'S BUILD THE <br /><span className="text-gold-500 italic">FUTURE TOGETHER.</span></h2>
              <p className="text-slate-400 text-xl mb-16 leading-relaxed font-light max-w-2xl">
                Available for high-end structural consultancy and technical supervision for landmark developments across the UAE.
              </p>
              
              <div className="grid md:grid-cols-2 gap-10 w-full">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-10 bg-slate-950/80 rounded-[40px] border border-white/5 group hover:border-gold-500/30 transition-all shadow-xl"
                >
                  <div className="w-20 h-20 bg-gold-500/10 rounded-3xl flex items-center justify-center border border-gold-500/20 mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Mail className="w-10 h-10 text-gold-500" />
                  </div>
                  <p className="text-[10px] text-gold-500 uppercase tracking-[0.3em] font-black mb-3">Direct Email</p>
                  <p className="text-white font-display font-bold text-2xl tracking-tight">josephinsuganthi@example.com</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-10 bg-slate-950/80 rounded-[40px] border border-white/5 group hover:border-gold-500/30 transition-all shadow-xl"
                >
                  <div className="w-20 h-20 bg-gold-500/10 rounded-3xl flex items-center justify-center border border-gold-500/20 mb-8 group-hover:scale-110 transition-transform duration-500">
                    <MapPin className="w-10 h-10 text-gold-500" />
                  </div>
                  <p className="text-[10px] text-gold-500 uppercase tracking-[0.3em] font-black mb-3">Office Location</p>
                  <p className="text-white font-display font-bold text-2xl tracking-tight">Dubai, United Arab Emirates</p>
                </motion.div>
              </div>

              <div className="mt-20 pt-16 border-t border-white/5 w-full flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex gap-10">
                  <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-gold-500 transition-all group">
                    <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="font-black uppercase tracking-[0.2em] text-[10px]">LinkedIn</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-slate-400 hover:text-gold-500 transition-all group">
                    <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    <span className="font-black uppercase tracking-[0.2em] text-[10px]">Email</span>
                  </a>
                </div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
                  Based in Dubai, UAE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-xl tracking-tight text-white">JOSEPHIN<span className="text-gold-500">SUGANTHI</span></span>
          </div>
          
          <div className="text-slate-500 text-sm">
            © 2024 Josephin Suganthi. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-gold-500 hover:bg-slate-800 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-gold-500 hover:bg-slate-800 transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Project Modal removed for single-page experience */}
      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Technical Documentation"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/10"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/60 hover:text-gold-500 transition-colors flex items-center gap-2 text-xs font-bold uppercase tracking-widest"
              >
                Close <Zap className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
