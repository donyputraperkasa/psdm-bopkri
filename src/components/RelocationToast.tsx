import React from 'react'

const NEW_SITE_URL = 'https://tatakelolaku.vercel.app'

export const RelocationToast: React.FC = () => {
  return (
    <div
      className="migration-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="migration-title"
    >
      <div className="migration-card">
        <h2 id="migration-title" className="migration-title">
          Website Telah Berpindah
        </h2>
        <p className="migration-description">
          Website ini telah berpindah alamat ke sistem baru. Silakan klik tombol di bawah untuk menuju ke tautan tersebut.
        </p>

        <a
          href={NEW_SITE_URL}
          className="migration-action-btn"
        >
          tatakelolaku.vercel.app
        </a>
      </div>
    </div>
  )
}

export default RelocationToast
