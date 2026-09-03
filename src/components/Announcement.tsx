import React from 'react'
import { Headset, FileCheck2, Info } from 'lucide-react'

export const Announcement: React.FC = () => {
  const handlePetunjukClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    alert(
      'Panduan Pengisian Profil PSDM:\n1. Pilih unit sekolah Anda pada daftar di bawah.\n2. Klik tombol "Buka Profil SDM" untuk membuka dokumen spreadsheet Google Sheets.\n3. Lengkapi data profil SDM sesuai petunjuk pada spreadsheet.\n4. Jika menemui kendala atau pertanyaan teknis, klik tombol "bingung ?? hubungi kami" atau hubungi Mas Don.'
    )
  }

  return (
    <>
      <section className="quick-links-wrap" aria-label="Tautan Cepat">
        <a
          href="https://wa.me/6282236343404?text=Halo%20Mas%20Don,%20saya%20ingin%20bertanya%20terkait%20pengisian%20Profil%20PSDM%20BOPKRI."
          target="_blank"
          rel="noreferrer"
          className="quick-link-btn"
          style={{ background: '#f59e0b' }}
        >
          <Headset size={18} />
          Ada Kendala? Hubungi Kami
        </a>

        <a
          href="#panduan"
          onClick={handlePetunjukClick}
          className="quick-link-btn"
          style={{ background: '#10b981' }}
        >
          <FileCheck2 size={18} />
          Panduan Pengisian PSDM
        </a>
      </section>

      <aside className="announcement-box" id="panduan" aria-label="Informasi Pengumuman">
        <div className="announcement-icon-box">
          <Info size={24} color="#d97706" />
        </div>

        <div>
          <p className="announcement-tag">Informasi Pendataan SDM</p>
          <h2 className="announcement-title">
            Pengisian Profil Sumber Daya Manusia (PSDM) Sekolah
          </h2>
          <p className="announcement-text">
            Bapak/Ibu perwakilan unit sekolah dipersilakan memilih kartu unit sekolah masing-masing,
            kemudian klik tombol <strong>Buka Profil SDM</strong> untuk membuka Google Spreadsheet
            pengisian data. Apabila memerlukan panduan teknis atau terdapat tautan yang terkendala,
            silakan klik tombol <strong>bingung ?? hubungi kami</strong>.
          </p>
        </div>
      </aside>
    </>
  )
}

export default Announcement
