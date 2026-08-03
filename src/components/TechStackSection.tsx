'use client';

import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Award, Code2, Database, GraduationCap, Layers, Sparkles, Terminal } from 'lucide-react';

export default function TechStackSection() {
  return (
    <section id="skills" className="py-24 relative bg-[#070b14] bg-grid-pattern">
      
      {/* Background Ambient Orbs */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>Stack Teknologi & Keahlian</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Alat, Bahasa & <span className="text-gradient">Kompetensi Profesional</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Kombinasi teknologi modern untuk pengembangan aplikasi serta kompetensi pengajaran kejuruan software engineering.
          </p>
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <div
              key={catIdx}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6 hover:border-purple-500/30 transition-all shadow-xl"
            >
              
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  {catIdx === 0 && <Code2 className="w-5 h-5" />}
                  {catIdx === 1 && <Database className="w-5 h-5" />}
                  {catIdx === 2 && <Terminal className="w-5 h-5" />}
                  {catIdx === 3 && <GraduationCap className="w-5 h-5" />}
                </div>
                <h3 className="font-extrabold text-lg text-white">{cat.title}</h3>
              </div>

              {/* Skills Pill List */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-sky-500/40 hover:bg-slate-900 transition-all flex flex-col justify-between"
                  >
                    <span className="font-bold text-xs text-white leading-tight">{skill.name}</span>
                    {skill.level && (
                      <span className="text-[10px] font-semibold text-sky-400 mt-2 block">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Adobe Certified Professional Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-rose-950/40 via-purple-950/40 to-slate-900 border border-rose-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-rose-500 to-purple-600 p-0.5 shrink-0 shadow-lg shadow-rose-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-rose-400 font-extrabold text-xl">
                Ai
              </div>
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 text-[10px] font-bold border border-rose-500/20">
                <Award className="w-3 h-3" />
                <span>Lisensi & Sertifikasi Resmi</span>
              </div>
              <h3 className="font-extrabold text-lg text-white">Adobe Certified Professional — Graphic Design & Illustration</h3>
              <p className="text-xs text-slate-300">Sertifikasi internasional resmi kompetensi Desain Grafis & Ilustrasi dari Adobe.</p>
            </div>
          </div>

          <a
            href="/certificates/sertifikat-adobe-graphic-design.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-400 hover:to-purple-500 text-white font-bold text-xs shadow-lg shadow-rose-500/20 transition-all hover:scale-[1.02] shrink-0"
          >
            <span>Lihat Sertifikat PDF</span>
          </a>
        </div>

      </div>
    </section>
  );
}
