'use client';

import { PROFILE_DATA } from '@/data/portfolioData';
import { Award, BookOpen, Briefcase, CheckCircle2, Code2, GraduationCap, HeartHandshake, Lightbulb, Rocket, Users } from 'lucide-react';

export default function AboutSection() {
  const pillars = [
    {
      icon: GraduationCap,
      title: "Pendidik PPLG & Guru Penggerak",
      color: "from-sky-500 to-blue-600",
      desc: "Mengajar pemrograman dasar hingga lanjut di SMKN 1 Kawunganten. Berkomitmen menciptakan pembelajaran berpusat pada murid melalui Program Guru Penggerak Angkatan 10."
    },
    {
      icon: Code2,
      title: "Full-Stack Software Engineer",
      color: "from-indigo-500 to-purple-600",
      desc: "Mengembangkan aplikasi web dan mobile berskala instansi dengan stack Next.js, React, Node.js, Laravel, MySQL, dan Android Native."
    },
    {
      icon: Rocket,
      title: "Digitalisasi Manajemen Sekolah",
      color: "from-emerald-500 to-teal-600",
      desc: "Merancang ePKL (Sistem Presensi & Jurnal PKL), SPMB, dan sistem presensi PPL untuk mengefisiensikan operasional sekolah dan kampus mitra."
    },
    {
      icon: HeartHandshake,
      title: "Pengembangan Karakter Siswa",
      color: "from-rose-500 to-amber-600",
      desc: "Mengembangkan aplikasi Android 'ebusafilla' dan 'ANAK HEBAT' untuk membantu pembentukan 7 kebiasaan anak Indonesia hebat & Profil Pelajar Pancasila."
    }
  ];

  const highlights = [
    "Guru Kejuruan Pengembangan Perangkat Lunak dan Gim (PPLG)",
    "Guru Penggerak Angkatan 10 Kabupaten Cilacap",
    "Pengembang Utama Sistem ePKL v3 SMKN 1 Kawunganten",
    "Lead Developer Platform LMS Sustainable Financial Literacy (UNY)",
    "Pencipta 3 Aplikasi Android Publik di Google Play Store",
    "Pembimbing Unit Usaha Teaching Factory (TEFA DKV)",
    "Adobe Certified Professional — Graphic Design & Illustration"
  ];

  return (
    <section id="about" className="py-24 relative bg-[#070b14]/80">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Tentang Saya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kombinasi Antara <span className="text-gradient">Dunia Pendidikan</span> & <span className="text-gradient-emerald">Rekayasa Perangkat Lunak</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Mendedikasikan ilmu teknologi informasi untuk mencerdaskan generasi muda sekaligus memberikan solusi digital yang nyata bagi sekolah, kampus, dan klien.
          </p>
        </div>

        {/* Dual Profile Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Peran Sebagai Guru */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-sky-500/20 space-y-5 hover:border-sky-500/40 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Sebagai Guru PPLG & Educator</h3>
                <p className="text-xs text-sky-400 font-medium">SMKN 1 Kawunganten, Cilacap</p>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Fokus pada penyusunan materi pembelajaran modern berbasis Kurikulum Merdeka, pembimbingan Teaching Factory (TEFA), serta penerapan filosofi Ki Hajar Dewantara dalam pembelajaran berdiferensiasi.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Membimbing siswa dalam pengembangan proyek perangkat lunak nyata.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Mengintegrasikan teknologi AI, Web, dan Mobile ke dalam kelas.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Guru Penggerak Angkatan 10 yang aktif menggerakkan komunitas praktisi pendidik.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Peran Sebagai Programmer */}
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-indigo-500/20 space-y-5 hover:border-indigo-500/40 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Sebagai Programmer & Software Developer</h3>
                <p className="text-xs text-indigo-400 font-medium">Full-Stack Web & Android Specialist</p>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Memiliki keahlian kuat dalam arsitektur perangkat lunak dari konsep hingga penggelaran (deployment). Berpengalaman membangun aplikasi skala besar berkecepatan tinggi dan aman.
            </p>

            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>Frontend: Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>Backend: Node.js, Express, PHP, Laravel, REST API & Geofencing.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>Mobile: Android Native Kotlin/Java, Firebase, Play Store Publishing.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="glass-card rounded-xl p-6 space-y-4 border border-slate-800">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${pillar.color} p-0.5 flex items-center justify-center text-white shadow-md`}>
                  <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-sky-400" />
                  </div>
                </div>
                <h4 className="font-bold text-base text-white">{pillar.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Highlights Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950/40 to-slate-900 border border-slate-800 space-y-6">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-amber-400" />
            <h3 className="text-lg font-bold text-white">Pencapaian & Rekam Jejak Ringkas</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-200">
                <div className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
