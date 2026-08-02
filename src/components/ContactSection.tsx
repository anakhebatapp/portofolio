'use client';

import { useState } from 'react';
import { PROFILE_DATA } from '@/data/portfolioData';
import { CheckCircle2, ExternalLink, Globe, Mail, MapPin, MessageSquare, Phone, Send, Sparkles, User } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#090d16] bg-grid-pattern">
      
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-sky-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Hubungi Saya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mari Berkolaborasi atau <span className="text-gradient">Konsultasi Proyek</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Apakah Anda memerlukan pengembangan sistem informasi sekolah, aplikasi Android, pelatihan EdTech, atau konsultasi proyek? Silakan kirimkan pesan di bawah ini.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">Informasi Kontak Direct</h3>
              
              <div className="space-y-4">
                
                {/* Email Item */}
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Email Resmi</div>
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-sky-400 transition-colors">
                      {PROFILE_DATA.email}
                    </div>
                  </div>
                </a>

                {/* WhatsApp Item */}
                <a
                  href={`https://wa.me/${PROFILE_DATA.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">WhatsApp / Telepon</div>
                    <div className="text-xs sm:text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {PROFILE_DATA.phone}
                    </div>
                  </div>
                </a>

                {/* Custom Domain Item */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Custom Domain Website</div>
                    <div className="text-xs sm:text-sm font-bold text-indigo-300 font-mono">
                      {PROFILE_DATA.customDomain}
                    </div>
                  </div>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-medium">Lokasi Instansi</div>
                    <div className="text-xs sm:text-sm font-bold text-white">
                      SMKN 1 Kawunganten, Cilacap, Jawa Tengah
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Google Sites CGP Link Badge */}
            <a
              href={PROFILE_DATA.socials.cgpWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-gradient-to-r from-sky-950/60 to-indigo-950/60 border border-sky-500/30 flex items-center justify-between hover:border-sky-400 transition-all group"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <div>
                  <div className="text-xs font-bold text-white">Website Portal CGP Wendra</div>
                  <div className="text-[11px] text-slate-300">Lihat Dokumentasi Guru Penggerak</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
            </a>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-2">Kirim Pesan Langsung</h3>
              <p className="text-xs text-slate-400 mb-6">Pesan Anda akan langsung terhubung ke email utama Wendra Bagas Saputra.</p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-bold text-base text-white">Pesan Berhasil Terkirim!</h4>
                  <p className="text-xs text-slate-300">Terima kasih telah menghubungi. Saya akan merespon pesan Anda secepatnya.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Nama Lengkap</label>
                      <input
                        type="text"
                        required
                        placeholder="Nama Anda"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 text-xs focus:border-sky-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Alamat Email</label>
                      <input
                        type="email"
                        required
                        placeholder="email@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 text-xs focus:border-sky-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Subjek / Topik</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Konsultasi Sistem Sekolah / Proyek Web"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 text-xs focus:border-sky-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Pesan Lengkap</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tuliskan detail kebutuhan atau pertanyaan Anda..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-100 text-xs focus:border-sky-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-xs shadow-xl shadow-sky-500/25 transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Kirim Pesan Sekarang</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
