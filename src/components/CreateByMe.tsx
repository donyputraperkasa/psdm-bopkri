import React from 'react'
import { Heart } from 'lucide-react'

export const CreateByMe: React.FC = () => {
  return (
    <footer style={{ textAlign: 'center', marginTop: '50px', marginBottom: '20px' }}>
      <a
        href="https://portofolio-ku-gold.vercel.app"
        target="_blank"
        rel="noreferrer"
        className="created-by-link"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 22px',
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '999px',
          color: '#475569',
          fontSize: '14px',
          fontWeight: '600',
          textDecoration: 'none',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.04)',
          transition: 'all 0.25s ease',
        }}
      >
        <span>Created with</span>
        <Heart size={16} fill="#ef4444" color="#ef4444" />
        <span>by Mas Don</span>
      </a>
      <p style={{ marginTop: '12px', fontSize: '13px', color: '#94a3b8' }}>
        © {new Date().getFullYear()} Yayasan BOPKRI Yogyakarta. Semua Hak Dilindungi.
      </p>
    </footer>
  )
}

export default CreateByMe
