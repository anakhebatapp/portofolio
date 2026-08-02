'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Code, Sparkles, Terminal, Smartphone, User, Mail, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '@/data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section on scroll
      const sections = ['home', 'about', 'web-projects', 'mobile-apps', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home', id: 'home', icon: Sparkles },
    { name: 'Tentang Saya', href: '#about', id: 'about', icon: User },
    { name: 'Sistem Web', href: '#web-projects', id: 'web-projects', icon: Terminal },
    { name: 'Aplikasi Mobile', href: '#mobile-apps', id: 'mobile-apps', icon: Smartphone },
    { name: 'Keahlian', href: '#skills', id: 'skills', icon: Code },
    { name: 'Kontak', href: '#contact', id: 'contact', icon: Mail },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#070b14]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 p-[2px] shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#090d16] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 text-lg">WB</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-100 tracking-tight text-base sm:text-lg group-hover:text-sky-400 transition-colors">
                  Wendra Bagas
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  S.Kom
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                Guru PPLG & Developer
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-lg">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/25' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Button & Domain Badge */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-medium text-xs shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-all hover:scale-[1.02]"
            >
              <span>Hubungi Klien</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0f1d]/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 mt-3 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30' 
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {link.name}
              </a>
            );
          })}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-sky-500 text-white font-semibold text-sm shadow-lg shadow-sky-500/20"
            >
              <span>Hubungi Klien</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
