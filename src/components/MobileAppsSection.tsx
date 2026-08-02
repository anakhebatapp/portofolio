'use client';

import { MOBILE_APPS } from '@/data/portfolioData';
import { ExternalLink, Smartphone, Star, Download, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export default function MobileAppsSection() {
  return (
    <section id="mobile-apps" className="py-24 relative bg-[#090d16] border-y border-slate-800/80">
      
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Aplikasi Android Publik</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Published Apps di <span className="text-gradient-emerald">Google Play Store</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Aplikasi Android native yang dirancang khusus untuk memfasilitasi jurnal siswa, habit tracking, dan pemantauan Profil Pelajar Pancasila.
          </p>
        </div>

        {/* Mobile Apps Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOBILE_APPS.map((app) => (
            <div
              key={app.id}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 shadow-2xl relative overflow-hidden group"
            >
              
              {/* Top Accent Gradient */}
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${app.imageBg}`} />

              <div className="space-y-6">
                
                {/* Smartphone Device Mockup Graphic */}
                <div className="mx-auto w-36 h-64 sm:w-40 sm:h-72 rounded-[32px] border-4 border-slate-700 bg-slate-950 p-2 shadow-xl relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  
                  {/* Camera Notch */}
                  <div className="w-16 h-3 bg-slate-800 mx-auto rounded-b-md mb-2" />

                  {/* App Screen Interior */}
                  <div className={`w-full h-[calc(100%-1.25rem)] rounded-[20px] bg-gradient-to-br ${app.imageBg} p-4 flex flex-col justify-between text-white relative`}>
                    
                    <div className="space-y-2 text-center pt-2">
                      <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md mx-auto flex items-center justify-center text-white shadow-md overflow-hidden p-1.5">
                        {app.id === 'epkl-mobile' ? (
                          <img src="/images/logo-epkl.png" alt="Logo ePKL Mobile" className="w-full h-full object-contain" />
                        ) : (
                          <Smartphone className="w-6 h-6" />
                        )}
                      </div>
                      <div className="font-extrabold text-xs leading-tight drop-shadow-sm">{app.title.split('—')[0]}</div>
                    </div>

                    <div className="bg-slate-950/70 backdrop-blur-md p-2 rounded-xl text-[10px] text-slate-200 text-center space-y-1">
                      <div className="flex justify-center text-amber-400 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <div className="font-bold">Play Store Verified</div>
                    </div>

                  </div>
                </div>

                {/* App Content */}
                <div className="space-y-3 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                      {app.role}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-[10px] font-medium">
                      Google Play
                    </span>
                  </div>

                  <h3 className="font-extrabold text-lg text-white leading-snug">
                    {app.title}
                  </h3>

                  <p className="text-slate-300 text-xs leading-relaxed">
                    {app.fullDesc}
                  </p>

                  {/* App Stats */}
                  {app.stats && (
                    <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                      {app.stats.map((st, sIdx) => (
                        <div key={sIdx} className="bg-slate-900/60 p-2 rounded-lg border border-slate-800/80">
                          <span className="text-slate-400 text-[10px] block">{st.label}</span>
                          <span className="font-bold text-emerald-400 text-xs">{st.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 pt-1">
                    {app.tags.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Play Store Link Action */}
              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <a
                  href={app.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
                >
                  <Download className="w-4 h-4" />
                  <span>Buka di Google Play Store</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
