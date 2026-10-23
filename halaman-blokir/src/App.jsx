import { useState } from 'react'
import './App.css'

function createIncidentId() {
  const token = Math.random().toString(36).slice(2, 10).toUpperCase()
  return `REQ-${token}`
}

function App() {
  const [incidentId] = useState(createIncidentId)
  const blockedUrl = window.location.href
  const blockedAt = new Date().toLocaleString('id-ID', {
    dateStyle: 'long',
    timeStyle: 'medium',
  })

  return (
    <main className="block-page">
      <div className="ambient ambient--red" aria-hidden="true" />
      <div className="ambient ambient--blue" aria-hidden="true" />

      <section className="block-card" aria-labelledby="page-title">
        <header className="brand">
          <svg
            className="brand__mark"
            viewBox="0 0 40 40"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M20 2 36.5 11.5v17L20 38 3.5 28.5v-17L20 2Z"
              fill="url(#brand-gradient)"
              fillOpacity=".16"
              stroke="currentColor"
            />
            <path
              d="M12 25c0-4 16-2 16-9 0-4.5-12-4.5-12 0m12 0c0 4-16 2-16 9 0 4.5 12 4.5 12 0"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="brand-gradient" x1="0" y1="0" x2="40" y2="40">
                <stop stopColor="#6366f1" />
                <stop offset="1" stopColor="#c4b5fd" />
              </linearGradient>
            </defs>
          </svg>
          <span>Spectra Solusi Global</span>
        </header>

        <div className="warning-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <rect
              x="9"
              y="11"
              width="6"
              height="5"
              rx="1"
              fill="#11111a"
              stroke="currentColor"
              strokeWidth="1.4"
            />
            <path
              d="M9 11V9a3 3 0 0 1 6 0v2"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <p className="eyebrow">Pemberitahuan keamanan jaringan</p>
        <h1 id="page-title">Akses Diblokir</h1>
        <p className="description">
          Akses ke situs ini dibatasi oleh kebijakan jaringan{' '}
          <strong>PT Spectra Solusi Global</strong>. Jika Anda merasa ini
          merupakan kesalahan, silakan hubungi administrator jaringan.
        </p>

        <a className="contact-button" href="mailto:admin@spectrasolusi.com">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="m3 7 7.9 5.3a2 2 0 0 0 2.2 0L21 7M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Hubungi Administrator
        </a>

        <aside className="diagnostics" aria-label="Informasi diagnostik">
          <div className="diagnostics__heading">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect
                x="5"
                y="5"
                width="14"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M9 9h6v6H9zM9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <h2>Informasi Diagnostik</h2>
          </div>
          <dl className="diagnostics__grid">
            <div>
              <dt>Alamat IP klien</dt>
              <dd>Tidak tersedia dari browser</dd>
            </div>
            <div>
              <dt>Waktu perangkat</dt>
              <dd>{blockedAt}</dd>
            </div>
            <div>
              <dt>Kebijakan</dt>
              <dd className="policy">Strict Enterprise (SEC-09)</dd>
            </div>
            <div>
              <dt>ID insiden</dt>
              <dd>{incidentId}</dd>
            </div>
            <div className="diagnostics__url">
              <dt>URL tujuan</dt>
              <dd>{blockedUrl}</dd>
            </div>
          </dl>
        </aside>
        <p className="footer-note">
          Simpan ID insiden jika Anda menghubungi administrator.
        </p>
      </section>
    </main>
  )
}

export default App
