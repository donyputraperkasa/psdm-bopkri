import React, { useState } from 'react'
import { Headphones, MessageCircle, X } from 'lucide-react'
import catImg from '../assets/cat.png'

export const FloatingContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const itWhatsappUrl =
    'https://wa.me/628112645659?text=Halo%20Mas%20Don,%20saya%20membutuhkan%20bantuan%20sistem%20PSDM%20BOPKRI.'

  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="floating-backdrop"
          onClick={() => setIsOpen(false)}
          aria-label="Tutup menu bantuan"
        />
      )}

      <div className="floating-contact-container">
        {isOpen && (
          <section className="floating-help-card" aria-label="Bantuan Mas Don">
            <div className="floating-help-header">
              <div>
                <p className="floating-help-title">Bantuan sistem</p>
                <p className="floating-help-subtitle">
                  Klik tombol di bawah ini apabila menemukan kendala
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="floating-close-btn"
                aria-label="Tutup menu bantuan"
              >
                <X size={17} />
              </button>
            </div>

            <a
              href={itWhatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="floating-wa-btn"
            >
              <Headphones size={17} />
              Hubungi Mas Don
            </a>
          </section>
        )}

        <button
          type="button"
          className="floating-cat-btn"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Buka bantuan sistem"
        >
          <img src={catImg} alt="" className="floating-cat-img" />
          <span className="floating-cat-badge">
            <MessageCircle size={15} color="#ffffff" />
          </span>
        </button>
      </div>
    </>
  )
}

export default FloatingContact
