'use client';

import { PROFILE_DATA } from '@/data/portfolioData';
import { ArrowUp, Code2, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050810] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-black text-lg text-white tracking-tight">Wendra Bagas Saputra</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-500/20 text-sky-400 border border-sky-500/30">
                S.Kom
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-md">
              Guru PPLG SMKN 1 Kawunganten & Full-Stack Web & Mobile Developer.
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 font-medium text-xs text-slate-300">
            <a href="#home" className="hover:text-sky-400 transition-colors">Beranda</a>
            <a href="#about" className="hover:text-sky-400 transition-colors">Tentang</a>
            <a href="#web-projects" className="hover:text-sky-400 transition-colors">Portofolio Web</a>
            <a href="#mobile-apps" className="hover:text-sky-400 transition-colors">Aplikasi Mobile</a>
            <a href="#skills" className="hover:text-sky-400 transition-colors">Keahlian</a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">Kontak</a>
          </div>

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-sky-500/50 transition-all shadow-lg hover:scale-105"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-sky-400" />
          </button>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Wendra Bagas Saputra. Hak Cipta Dilindungi. Published on <strong className="text-sky-400 font-mono font-normal">wendrabagas.my.id</strong>
          </div>
          <div className="flex items-center gap-1">
            <span>Built with Next.js 15 & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
