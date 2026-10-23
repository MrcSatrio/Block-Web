import React, { useState, useEffect } from 'react';

export default function App() {
  const [diagnosticData, setDiagnosticData] = useState({
    timestamp: '',
    url: '',
    incidentId: '',
    clientIp: 'Sedang memuat...'
  });

  useEffect(() => {
    // Fungsi untuk membuat Incident ID acak
    const randomHex = (len) =>
      Array.from({ length: len }, () => Math.floor(Math.random() * 16).toString(16).toUpperCase()).join('');

    // Mendapatkan URL saat ini (fallback jika dijalankan di dalam iframe/previewer)
    let currentUrl = window.location.href;
    if (currentUrl === 'about:blank' || currentUrl.includes('blob:')) {
      currentUrl = 'https://terblokir.perusahaan.com/akses-ditolak';
    }

    // Simulasi pengambilan IP Klien (Dalam implementasi nyata, ini disuntikkan oleh server/firewall)
    const mockIps = ['10.45.192.8', '192.168.1.104', '172.16.0.42', '10.8.0.15'];
    const randomIp = mockIps[Math.floor(Math.random() * mockIps.length)];

    setDiagnosticData({
      timestamp: new Date().toISOString(),
      url: currentUrl,
      incidentId: `REQ-${randomHex(5)}-${randomHex(4)}`,
      clientIp: randomIp
    });
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-8 bg-[#09090b] text-slate-50 font-sans overflow-hidden">

      {/*
        Injeksi CSS khusus untuk animasi keyframes yang kompleks
        agar tetap dalam 1 file mandiri tanpa butuh file .css terpisah
      */}
      <style dangerouslySetInnerHTML={{__html: `
        .animated-bg {
          background: linear-gradient(-45deg, #09090b, #111827, #1e1b4b, #170f2a);
          background-size: 400% 400%;
          animation: gradientBG 15s ease infinite;
        }
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .blob-1 {
          background: radial-gradient(circle, rgba(220,38,38,0.20) 0%, rgba(0,0,0,0) 70%);
          animation: float1 12s ease-in-out infinite alternate;
        }
        .blob-2 {
          background: radial-gradient(circle, rgba(79,70,229,0.15) 0%, rgba(0,0,0,0) 70%);
          animation: float2 15s ease-in-out infinite alternate;
        }
        @keyframes float1 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(5%, 10%) scale(1.1); }
        }
        @keyframes float2 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-5%, -10%) scale(1.05); }
        }
      `}} />

      {/* Latar Belakang Animasi & Ambient Blobs */}
      <div className="animated-bg absolute inset-0 z-0"></div>
      <div className="blob-1 absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full blur-[100px] z-0 opacity-60 pointer-events-none"></div>
      <div className="blob-2 absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full blur-[100px] z-0 opacity-60 pointer-events-none"></div>

      {/* Kartu Utama (Glassmorphism) */}
      <div className="relative z-10 w-full max-w-2xl bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] p-8 sm:p-12 text-center transition-transform duration-500 hover:scale-[1.01]">

        {/* Header: Logo & Branding */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 opacity-90">
          <svg className="w-12 h-12" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2L36.5 11.5V30.5L20 40L3.5 30.5V11.5L20 2Z" fill="url(#brandGrad)" fillOpacity="0.15" stroke="#818CF8" strokeWidth="1"/>
            <path d="M12 26C12 22 28 24 28 16C28 11.5 16 11.5 16 16" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round"/>
            <path d="M28 14C28 18 12 16 12 24C12 28.5 24 28.5 24 24" stroke="#818CF8" strokeWidth="3" strokeLinecap="round"/>
            <defs>
                <linearGradient id="brandGrad" x1="0" y1="0" x2="40" y2="40">
                    <stop stopColor="#4F46E5"/>
                    <stop offset="1" stopColor="#A78BFA"/>
                </linearGradient>
            </defs>
          </svg>
          <span className="font-bold text-xl tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-300 uppercase">
            Spectra Solusi Global
          </span>
        </div>

        {/* Ikon Peringatan Glowing (Perisai + Gembok) */}
        <div className="mb-8 flex justify-center">
          <svg
            className="w-24 h-24 text-red-500 drop-shadow-[0_0_25px_rgba(239,68,68,0.6)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <rect x="9" y="11" width="6" height="5" rx="1" fill="#18181b" stroke="currentColor"></rect>
            <path d="M9 11V9a3 3 0 0 1 6 0v2"></path>
            <circle cx="12" cy="13.5" r="0.5" fill="currentColor"></circle>
          </svg>
        </div>

        {/* Teks Pesan Utama */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white tracking-tight">
          Akses Diblokir
        </h1>
        <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
          Website ini telah diblokir oleh <strong className="text-white">PT Spectra Solusi Global</strong>. Silahkan hubungi administrator jaringan jika Anda merasa ini adalah sebuah kesalahan.
        </p>

        {/* Tombol Call to Action */}
        <button
          onClick={() => window.location.href = 'mailto:admin@spectrasolusi.com'}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#09090b] focus:ring-white"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          Hubungi Administrator
        </button>

        {/* Panel Data Diagnostik Realistis */}
        <div className="mt-10 sm:mt-12 bg-black/50 border border-white/5 rounded-xl p-5 text-left backdrop-blur-md">
          <div className="flex items-center text-gray-400 mb-4 border-b border-white/10 pb-3">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
            </svg>
            <span className="text-xs font-semibold tracking-wider uppercase">
              Informasi Diagnostik Firewall
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-gray-400 break-all">
            <div>
              <span className="text-gray-500 block mb-1">IP Klien</span>
              <span className="text-gray-200">{diagnosticData.clientIp}</span>
            </div>
            <div>
              <span className="text-gray-500 block mb-1">Waktu Server</span>
              <span className="text-gray-200">{diagnosticData.timestamp || 'Memuat...'}</span>
            </div>
            <div>
              <span className="text-gray-500 block mb-1">Kebijakan (Policy)</span>
              <span className="text-yellow-400/90 font-semibold">Strict Enterprise (SEC-09)</span>
            </div>
            <div>
              <span className="text-gray-500 block mb-1">ID Insiden</span>
              <span className="text-gray-200">{diagnosticData.incidentId || 'Memuat...'}</span>
            </div>
            <div className="sm:col-span-2">
              <span className="text-gray-500 block mb-1">URL Target</span>
              <span className="text-red-400/90">{diagnosticData.url || 'Memuat...'}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}