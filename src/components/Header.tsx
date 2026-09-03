import React from 'react'
import logo from '../assets/logo.png'

export const Header: React.FC = () => {
  return (
    <header className="header-section">
      <img
        src={logo}
        alt="Logo Yayasan BOPKRI"
        className="header-logo"
        style={{ display: 'block', margin: '0 auto 18px auto' }}
      />
      <h1 className="header-title">
        Portal Profil PSDM Sekolah
      </h1>
      <p className="header-subtitle">
        Yayasan BOPKRI Yogyakarta • Pendataan Sumber Daya Manusia 2025/2026
      </p>
    </header>
  )
}

export default Header
