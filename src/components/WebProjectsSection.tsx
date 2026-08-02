'use client';

import { useState } from 'react';
import { WEB_PROJECTS, Project } from '@/data/portfolioData';
import { ExternalLink, Globe, Server, ShieldCheck, Sparkles, Terminal, Check, Laptop } from 'lucide-react';

export default function WebProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="web-projects" className="py-24 relative bg-[#070b14] bg-grid-pattern">
      
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold">
            <Terminal className="w-3.5 h-3.5" />
            <span>Portofolio Sistem Web</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sistem Informasi <span className="text-gradient">Web Enterprise & Edukasi</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Kumpulan aplikasi berbasis web yang telah dipublikasikan dan digunakan secara luas oleh sekolah, universitas mitra, serta publik.
          </p>
        </div>

        {/* Web Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WEB_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group glass-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between hover:border-sky-500/40 transition-all duration-300 shadow-xl"
            >
              <div>
                
                {/* Simulated Browser Bar Header */}
                <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400 truncate max-w-[180px] bg-slate-950/60 px-2.5 py-0.5 rounded-full border border-slate-800">
                    <Globe className="w-3 h-3 text-sky-400 shrink-0" />
                    <span className="truncate">{project.url ? project.url.replace('https://', '') : project.title}</span>
                  </div>
                  <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">LIVE</span>
                </div>

                {/* Card Visual Header Banner */}
                <div className={`relative h-44 w-full bg-gradient-to-br ${project.imageBg} p-6 flex flex-col justify-between overflow-hidden group-hover:scale-[1.02] transition-transform duration-300`}>
                  
                  {/* Subtle Grid Overlay */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  
                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/80 text-white text-[11px] font-bold border border-white/10 backdrop-blur-md">
                      {project.role}
                    </span>
                    {project.featured && (
                      <span className="px-2.5 py-1 rounded-md bg-sky-500 text-white text-[10px] font-extrabold flex items-center gap-1 shadow-md">
                        <Sparkles className="w-3 h-3" />
                        FEATURED
                      </span>
                    )}
                  </div>

                  {/* Project Title Badge inside banner */}
                  <div className="relative z-10 space-y-1">
                    <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-2 overflow-hidden p-1">
                      {project.id === 'epkl' ? (
                        <img src="/images/logo-epkl.png" alt="Logo ePKL" className="w-full h-full object-contain" />
                      ) : project.id === 'ppdb-smk' ? (
                        <img src="/images/logo-smk.png" alt="Logo SMKN 1 Kawunganten" className="w-full h-full object-contain" />
                      ) : (
                        <Laptop className="w-5 h-5 text-sky-300" />
                      )}
                    </div>
                    <h3 className="font-extrabold text-lg text-white drop-shadow-md leading-tight">
                      {project.title}
                    </h3>
                  </div>

                </div>

                {/* Card Content Body */}
                <div className="p-6 space-y-4">
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.fullDesc}
                  </p>

                  {/* Key Stats Pill */}
                  {project.stats && (
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {project.stats.map((st, idx) => (
                        <div key={idx} className="bg-slate-900/60 p-2 rounded-lg border border-slate-800 text-center">
                          <div className="text-xs font-bold text-sky-400">{st.value}</div>
                          <div className="text-[10px] text-slate-400">{st.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center justify-between">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-500/30 hover:bg-sky-500 hover:text-white text-sky-400 font-bold text-xs transition-all w-full justify-center group/btn"
                  >
                    <span>Kunjungi Website Live</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="text-xs text-slate-500 italic">Internal Access Only</span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
