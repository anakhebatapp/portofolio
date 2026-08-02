export interface Project {
  id: string;
  title: string;
  category: 'web' | 'mobile';
  role: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  url?: string;
  playStoreUrl?: string;
  imageBg: string;
  stats?: { label: string; value: string }[];
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; icon: string; level?: string }[];
}

export const PROFILE_DATA = {
  name: "Wendra Bagas Saputra",
  title: "Guru PPLG & Full-Stack Developer",
  institution: "SMKN 1 Kawunganten, Cilacap",
  bio: "Pendidik berdedikasi tinggi sekaligus Software Developer yang berfokus membangun solusi digital inovatif di bidang Pendidikan (EdTech), Manajemen Sekolah, dan Aplikasi Mobile. Berpengalaman dalam merancang dan mengembangkan sistem web berskala instansi hingga aplikasi Android untuk ribuan pengguna.",
  location: "Cilacap, Jawa Tengah, Indonesia",
  email: "wendrabagas@gmail.com",
  phone: "+62 857-4286-9050",
  customDomain: "wendrabagas.my.id",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    playStore: "https://play.google.com/store/apps/developer?id=Wendra+Bagas+Saputra",
    cgpWebsite: "https://sites.google.com/guru.smk.belajar.id/cgpwendra/home"
  },
  stats: [
    { label: "Tahun Pengalaman", value: "6+" },
    { label: "Proyek Software Selesai", value: "15+" },
    { label: "Aplikasi Play Store", value: "3" },
    { label: "Siswa & Pengguna Sistem", value: "5.000+" }
  ],
  roles: [
    "Guru PPLG (Pengembangan Perangkat Lunak & Gim)",
    "Calon Guru Penggerak (CGP)",
    "Full-Stack Web & Mobile Developer",
    "Pembimbing Teaching Factory (TEFA)"
  ]
};

export const WEB_PROJECTS: Project[] = [
  {
    id: "epkl",
    title: "ePKL v3 — Sistem Presensi & Jurnal PKL",
    category: "web",
    role: "Full-Stack Lead Developer",
    shortDesc: "Sistem Manajemen & Jurnal Harian Praktek Kerja Lapangan SMKN 1 Kawunganten berfitur presensi GPS dan verifikasi industri.",
    fullDesc: "Platform web pintar untuk mengelola seluruh ekosistem Praktek Kerja Lapangan (PKL). Dilengkapi fitur presensi berbasis lokasi (GPS), pengisian jurnal kegiatan harian, penilaian pembimbing industri & sekolah, serta penarik laporan otomatis PDF.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "MySQL", "Geofencing API"],
    url: "https://ejurnal.smk1kawunganten.sch.id",
    imageBg: "from-blue-600 to-indigo-900",
    stats: [
      { label: "Pengguna Aktif", value: "1.000+ Siswa" },
      { label: "Mitra Industri", value: "50+ Perusahaan" }
    ],
    featured: true
  },
  {
    id: "lms-literasi",
    title: "LMS Sustainable Financial Literacy",
    category: "web",
    role: "UI/UX & Web Developer",
    shortDesc: "Platform Pembelajaran Elektronik (LMS) Literasi Keuangan Berkelanjutan dan Ekonomi Hijau bekerjasama dengan UNY.",
    fullDesc: "Platform edukasi modern yang dirancang untuk meningkatkan kesadaran literasi keuangan berorientasi kelestarian lingkungan (Green Economy). Menyajikan modul interaktif, galeri kegiatan masonry, portal berita, quiz, dan sertifikasi digital.",
    tags: ["Laravel", "Alpine.js", "Tailwind CSS", "MySQL", "LMS Engine"],
    url: "https://lmsliterasikeuangan.fwh.is/",
    imageBg: "from-emerald-600 to-teal-900",
    stats: [
      { label: "Modul Pembelajaran", value: "4 Modul Utama" },
      { label: "Fokus", value: "ESG & Green Finance" }
    ],
    featured: true
  },
  {
    id: "eteaching-uad",
    title: "E-Teaching School UAD — Presensi & Penilaian PPL",
    category: "web",
    role: "Full-Stack Engineer",
    shortDesc: "Sistem monitoring presensi real-time, logbook, perizinan, dan asesmen akhir program PPL Universitas Ahmad Dahlan.",
    fullDesc: "Dashboard sistem ePPL untuk mengelola mahasiswa peserta PPL di sekolah mitra. Dilengkapi grafik tren kehadiran mingguan, ringkasan logbook harian, status persetujuan Dosen Pembimbing & Guru Pamong, serta rekapitulasi nilai akhir.",
    tags: ["React", "Next.js", "Chart.js", "REST API", "Tailwind CSS"],
    url: "https://teachingschooluad.vercel.app/login",
    imageBg: "from-sky-700 to-slate-900",
    stats: [
      { label: "Keaktifan Dosen", value: "98%" },
      { label: "Instansi Mitra", value: "5+ Sekolah" }
    ],
    featured: true
  },
  {
    id: "ppdb-smk",
    title: "SPMB 2026 — SMKN 1 Kawunganten",
    category: "web",
    role: "Web Developer & System Administrator",
    shortDesc: "Portal Informasi SPMB dan Sistem Antrian Verifikasi Berkas Luring Calon Murid Baru.",
    fullDesc: "Website resmi pelayanan SPMB SMKN 1 Kawunganten Cilacap. Digunakan oleh ribuan pendaftar untuk mengambil antrian verifikasi luring, memantau alur seleksi (Prestasi, Afirmasi, Domisili), serta cek status kuota 4 program keahlian unggulan.",
    tags: ["Next.js", "PHP", "Tailwind CSS", "MySQL", "Cloudflare"],
    url: "https://ppdb.smk1kawunganten.sch.id/",
    imageBg: "from-cyan-600 to-blue-900",
    stats: [
      { label: "Total Pendaftar", value: "1.030+ Siswa" },
      { label: "Status Dokumen", value: "Real-time Verification" }
    ],
    featured: true
  },
  {
    id: "visualoka",
    title: "Visualoka — Website Portofolio TEFA DKV",
    category: "web",
    role: "Technical Advisor & Mentor Developer",
    shortDesc: "Platform galeri portofolio showcase karya Teaching Factory Desain Komunikasi Visual (TEFA DKV).",
    fullDesc: "Website etalase produk dan karya kreatif siswa DKV SMKN 1 Kawunganten. Menampilkan hasil branding, fotografi, videografi, desain grafis, dan jasa industri percetakan sekolah secara interaktif dan estetis.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    url: "https://visualoka.com",
    imageBg: "from-purple-600 to-pink-900",
    stats: [
      { label: "Karya Terpajang", value: "100+ Visual Works" },
      { label: "Unit Usaha", value: "TEFA DKV" }
    ],
    featured: true
  }
];

export const MOBILE_APPS: Project[] = [
  {
    id: "ebusafila",
    title: "ebusafilla — Monitoring Profil Pelajar Pancasila",
    category: "mobile",
    role: "Android Developer",
    shortDesc: "Aplikasi Android untuk instrumen pemantauan dan evaluasi pembentukan karakter Profil Pelajar Pancasila di sekolah.",
    fullDesc: "Aplikasi mobile yang dikembangkan untuk membantu guru dan siswa mengukur, mencatat, serta mengevaluasi 6 dimensi Profil Pelajar Pancasila secara kuantitatif dan kualitatif.",
    tags: ["Android", "Kotlin", "Firebase", "Material Design 3"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.saka.ebusafila",
    imageBg: "from-red-600 to-amber-700",
    stats: [
      { label: "Platform", value: "Android (Play Store)" },
      { label: "Kategori", value: "Education" }
    ]
  },
  {
    id: "anakhebat",
    title: "ANAK HEBAT — 7 Jurnal KAIH",
    category: "mobile",
    role: "Mobile App Developer",
    shortDesc: "Aplikasi Habit Tracker pemantauan 7 kebiasaan anak Indonesia hebat secara konsisten dan menyenangkan.",
    fullDesc: "Aplikasi Habit Tracker yang dirancang khusus untuk memotivasi anak sekolah menjalankan 7 kebiasaan positif harian (bangun pagi, beribadah, olahraga, gemar membaca, makan sehat, bersosialisasi, dan tidur teratur).",
    tags: ["Android", "Flutter / Native", "Local Storage", "Push Notification"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.anakhebat.habittracker",
    imageBg: "from-green-600 to-emerald-800",
    stats: [
      { label: "Target", value: "Siswa & Orang Tua" },
      { label: "Rating", value: "5.0 ★★★★★" }
    ]
  },
  {
    id: "epkl-mobile",
    title: "ePKL SMKN 1 Kawunganten Mobile",
    category: "mobile",
    role: "Lead Mobile Developer",
    shortDesc: "Aplikasi Android jurnal PKL siswa terintegrasi lokasi GPS & foto aktivitas lapangan.",
    fullDesc: "Versi aplikasi mobile native dari ePKL SMKN 1 Kawunganten. Siswa dapat mengisi jurnal harian, mengunggah foto kegiatan, serta melakukan presensi masuk/pulang saat berada di lokasi Praktik Kerja Lapangan secara offline/online sync.",
    tags: ["Android", "Java/Kotlin", "RESTful API", "Camera & Location API"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.saka.epkl",
    imageBg: "from-blue-700 to-cyan-900",
    stats: [
      { label: "Integrasi", value: "ePKL Web Engine" },
      { label: "Status", value: "Published" }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "Next.js 15", icon: "Code2", level: "Expert" },
      { name: "React.js", icon: "Atom", level: "Expert" },
      { name: "TypeScript", icon: "FileCode", level: "Advanced" },
      { name: "Tailwind CSS", icon: "Palette", level: "Expert" },
      { name: "HTML5 & CSS3", icon: "Layout", level: "Expert" },
      { name: "Framer Motion", icon: "Sparkles", level: "Advanced" }
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js & Express", icon: "Server", level: "Advanced" },
      { name: "PHP & Laravel", icon: "Terminal", level: "Advanced" },
      { name: "MySQL / MariaDB", icon: "Database", level: "Expert" },
      { name: "RESTful APIs", icon: "Globe", level: "Expert" },
      { name: "Firebase", icon: "Flame", level: "Advanced" }
    ]
  },
  {
    title: "Mobile & Tools",
    skills: [
      { name: "Android Native (Kotlin/Java)", icon: "Smartphone", level: "Advanced" },
      { name: "Git & GitHub", icon: "GitBranch", level: "Expert" },
      { name: "Vercel & Cloudflare", icon: "Cloud", level: "Advanced" },
      { name: "Figma UI/UX", icon: "Figma", level: "Intermediate" }
    ]
  },
  {
    title: "Pedagogi & Kepemimpinan",
    skills: [
      { name: "Kurikulum Merdeka PPLG", icon: "GraduationCap", level: "Expert" },
      { name: "Guru Penggerak (CGP)", icon: "Award", level: "Certified" },
      { name: "Manajemen TEFA DKV", icon: "Briefcase", level: "Lead" },
      { name: "Pembimbingan LKS & Project", icon: "Target", level: "Mentor" }
    ]
  }
];
