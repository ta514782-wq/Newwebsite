/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Cpu, 
  Brain, 
  Code, 
  Sigma, 
  BarChart3, 
  ChevronRight,
  ExternalLink,
  MessageCircle
} from 'lucide-react';

// --- Components ---

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#050505]" />
      {/* Floating geometric shapes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-emerald-500/20"
          style={{
            width: Math.random() * 300 + 50,
            height: Math.random() * 300 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-radial-gradient from-emerald-500/5 to-transparent opacity-50" />
    </div>
  );
};

const Section = ({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="py-20 px-6 max-w-6xl mx-auto"
  >
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-3xl font-bold tracking-tight text-white uppercase font-mono">
        <span className="text-emerald-500 mr-2">/</span>{title}
      </h2>
      <div className="h-px flex-grow bg-white/10" />
    </div>
    {children}
  </motion.section>
);

const SkillCard = ({ icon: Icon, title, skills }: { icon: any; title: string; skills: string[] }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-emerald-500/50 transition-colors"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="px-3 py-1 rounded-full bg-white/5 text-sm text-white/70 border border-white/5">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-white/90 selection:bg-emerald-500 selection:text-black">
      <BackgroundAnimation />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter text-white"
          >
            TAYYAB<span className="text-emerald-500">.ALI</span>
          </motion.div>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-white/60">
            {['About', 'Skills', 'Education', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-emerald-500 transition-colors">
                {item}
              </a>
            ))}
          </div>
          <a 
            href="https://www.linkedin.com/in/tayyab-ali-670785385" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 hover:bg-emerald-500/20 transition-colors text-white"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-mono mb-6 border border-emerald-500/20"
          >
            MATHEMATICS & AI ENTHUSIAST
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6">
            TAYYAB <span className="text-emerald-500">ALI</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Student of Post ADP 3rd Semester at <span className="text-white">BZU Multan</span>. 
            Bridging the gap between <span className="text-emerald-500">Pure Mathematics</span> and <span className="text-emerald-500">Artificial Intelligence</span>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-4 rounded-full bg-emerald-500 text-black font-bold flex items-center gap-2 hover:bg-emerald-400 transition-colors"
            >
              Get in Touch <ChevronRight size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/tayyab-ali-670785385"
              target="_blank"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 font-bold flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              LinkedIn <ExternalLink size={20} />
            </motion.a>
          </div>
        </motion.div>

        {/* Moving Objects in Hero */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ 
              rotate: 360,
              x: [0, 50, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-64 h-64 border border-emerald-500/10 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              x: [0, -40, 0],
              y: [0, -60, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-emerald-500/10 rounded-full"
          />
        </div>
      </header>

      {/* About Section */}
      <Section title="About Me" id="about">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-white/70 leading-relaxed">
            <p>
              I am currently pursuing my Post ADP 3rd semester in the Mathematics Department (CASPAM) at 
              <span className="text-white"> Bahauddin Zakariya University, Multan</span>. My academic journey is fueled by a deep 
              passion for understanding the mathematical foundations of modern technology.
            </p>
            <p>
              My core interests lie at the intersection of <span className="text-emerald-500">Machine Learning</span>, 
              <span className="text-emerald-500">Generative AI</span>, and <span className="text-emerald-500">Deep Learning</span>. 
              I believe that a strong mathematical background is the key to unlocking the next generation of AI innovations.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">BZU</span>
                <span className="text-sm text-emerald-500 uppercase tracking-widest">University</span>
              </div>
              <div className="w-px h-12 bg-white/10 mx-4" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">3rd</span>
                <span className="text-sm text-emerald-500 uppercase tracking-widest">Semester</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex flex-col items-center text-center">
              <Brain className="text-emerald-500 mb-4" size={32} />
              <h4 className="font-bold text-white mb-1">ML & AI</h4>
              <p className="text-xs text-white/50 uppercase tracking-tighter">Interest</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
              <Sigma className="text-emerald-500 mb-4" size={32} />
              <h4 className="font-bold text-white mb-1">Mathematics</h4>
              <p className="text-xs text-white/50 uppercase tracking-tighter">Foundation</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
              <Code className="text-emerald-500 mb-4" size={32} />
              <h4 className="font-bold text-white mb-1">Programming</h4>
              <p className="text-xs text-white/50 uppercase tracking-tighter">Skill</p>
            </div>
            <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex flex-col items-center text-center">
              <BarChart3 className="text-emerald-500 mb-4" size={32} />
              <h4 className="font-bold text-white mb-1">BI</h4>
              <p className="text-xs text-white/50 uppercase tracking-tighter">Analysis</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section title="Technical Arsenal" id="skills">
        <div className="grid md:grid-cols-3 gap-6">
          <SkillCard 
            icon={Code} 
            title="Programming" 
            skills={['Python', 'C++', 'Matlab']} 
          />
          <SkillCard 
            icon={Sigma} 
            title="Mathematics" 
            skills={['Linear Algebra', 'Probability Theory', 'Calculus']} 
          />
          <SkillCard 
            icon={Cpu} 
            title="Data & AI" 
            skills={['Business Intelligence', 'Machine Learning', 'Deep Learning']} 
          />
        </div>
      </Section>

      {/* Contact Section */}
      <Section title="Get In Touch" id="contact">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-white leading-tight">
              Let's collaborate on <span className="text-emerald-500">innovative</span> projects.
            </h3>
            <p className="text-white/60 text-lg">
              I'm always open to discussing new opportunities, research collaborations, or just talking about the future of AI and Mathematics.
            </p>
            <div className="space-y-4">
              <a href="mailto:ta514782@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all group">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold tracking-widest">Email</p>
                  <p className="text-white font-medium">ta514782@gmail.com</p>
                </div>
              </a>
              <a href="https://wa.me/923480639755" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all group">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold tracking-widest">WhatsApp</p>
                  <p className="text-white font-medium">03480639755</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/tayyab-ali-670785385" target="_blank" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-all group">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                  <Linkedin size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase font-bold tracking-widest">LinkedIn</p>
                  <p className="text-white font-medium">Tayyab Ali</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="p-8 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 relative overflow-hidden">
            <div className="relative z-10">
              <h4 className="text-2xl font-bold text-white mb-6">Quick Message</h4>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Name</label>
                  <input type="text" className="w-full p-4 rounded-xl bg-black/50 border border-white/10 focus:border-emerald-500 outline-none transition-colors" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Message</label>
                  <textarea rows={4} className="w-full p-4 rounded-xl bg-black/50 border border-white/10 focus:border-emerald-500 outline-none transition-colors" placeholder="How can I help you?" />
                </div>
                <button className="w-full py-4 rounded-xl bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
            {/* Decorative element */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-white/40">
            © 2026 Tayyab Ali. Built with React & Framer Motion.
          </div>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/tayyab-ali-670785385" target="_blank" className="text-white/40 hover:text-emerald-500 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:ta514782@gmail.com" className="text-white/40 hover:text-emerald-500 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
