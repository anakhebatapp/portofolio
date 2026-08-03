'use client';

import { PROFILE_DATA } from '@/data/portfolioData';
import { ArrowRight, Code2, Download, GraduationCap, Sparkles, Smartphone, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern">
      
      {/* Background Glowing Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-40 left-10 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-semibold backdrop-blur-md">
                <img src="/images/logo-smk.png" alt="Logo SMKN 1 Kawunganten" className="w-4 h-4 object-contain" />
                <span>Guru PPLG @ SMKN 1 Kawunganten</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Guru Penggerak Angkatan 10</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Selamat Datang, Saya <br className="hidden sm:inline" />
              <span className="text-gradient">Wendra Bagas Saputra</span>
            </h1>

            {/* Subtitle / Tagline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Pengembang Perangkat Lunak dan Pendidik Kejuruan yang berdedikasi membangun <span className="text-sky-400 font-semibold">Sistem Informasi Sekolah</span>, <span className="text-indigo-400 font-semibold">Platform E-Learning</span>, dan <span className="text-purple-400 font-semibold">Aplikasi Mobile Android</span> berkualitas tinggi.
            </p>

            {/* Location & Domain Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span>Cilacap, Jawa Tengah</span>
              </div>
              <span className="hidden sm:inline text-slate-700">•</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Custom Domain: <strong className="text-sky-300">wendrabagas.my.id</strong></span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#web-projects"
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] transition-all duration-200"
              >
                <span>Lihat Portofolio Proyek</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#mobile-apps"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-slate-500 text-slate-200 hover:text-white font-semibold text-sm backdrop-blur-md transition-all hover:bg-slate-800/80"
              >
                <Smartphone className="w-4 h-4 text-sky-400" />
                <span>Aplikasi Play Store</span>
              </a>
            </div>

            {/* Highlights Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
              {PROFILE_DATA.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-sm text-center lg:text-left">
                  <div className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium leading-tight mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Profile Card Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 opacity-30 blur-xl animate-pulse-glow" />

              {/* Card Container */}
              <div className="relative glass-panel rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-700/60 shadow-2xl">
                
                {/* Profile Image & Avatar */}
                <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-500 shadow-2xl">
                  <div className="w-full h-full bg-[#0b1220] rounded-[14px] overflow-hidden relative group">
                    <img 
                      src="/images/profile.png" 
                      alt="Wendra Bagas Saputra" 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Dark gradient overlay at bottom for text contrast */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#070b14] via-[#070b14]/70 to-transparent p-3 pt-6 text-center">
                      <h3 className="font-bold text-sm text-white tracking-tight drop-shadow">Wendra Bagas Saputra</h3>
                      <p className="text-[11px] text-sky-300 font-semibold drop-shadow">S.Pd — Guru PPLG</p>
                    </div>

                    {/* Badge Overlay */}
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-extrabold shadow-lg flex items-center gap-1 backdrop-blur-md">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Guru & Developer</span>
                    </div>

                    {/* School Logo Overlay Badge */}
                    <div className="absolute top-2.5 left-2.5 p-1 rounded-xl bg-slate-950/80 border border-slate-700/60 shadow-lg backdrop-blur-md">
                      <img src="/images/logo-smk.png" alt="Logo SMKN 1 Kawunganten" className="w-6 h-6 object-contain" />
                    </div>
                  </div>
                </div>

                {/* Professional Role Badges */}
                <div className="space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center">
                    Peran & Kompetensi
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {PROFILE_DATA.roles.map((role, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-200 border border-slate-700/60">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs">
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="text-slate-400">Instansi:</span>
                    <span className="font-semibold text-white">SMKN 1 Kawunganten</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="text-slate-400">Spesialisasi:</span>
                    <span className="font-semibold text-sky-400">EdTech & Full-Stack</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="text-slate-400">Domain Portfolio:</span>
                    <span className="font-semibold text-indigo-300 font-mono">wendrabagas.my.id</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
