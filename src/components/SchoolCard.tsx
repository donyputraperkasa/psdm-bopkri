import React from 'react'
import { School as SchoolIcon, FileSpreadsheet, HelpCircle, Lock } from 'lucide-react'
import type { SchoolData } from '../data/schools'

interface SchoolCardProps {
  school: SchoolData
  isExpired: boolean
}

export const SchoolCard: React.FC<SchoolCardProps> = ({ school, isExpired }) => {
  const defaultWa = '6282236343404'
  const waMessage = encodeURIComponent(
    `Halo Mas Don, saya dari *${school.school}* membutuhkan bantuan terkait pengisian dokumen Profil PSDM BOPKRI.`
  )
  const helpUrl = `https://wa.me/${defaultWa}?text=${waMessage}`

  return (
    <div className="school-card">
      <div className="school-card-header">
        <div className="school-title-wrap">
          <div className="school-icon-badge">
            <SchoolIcon size={22} />
          </div>
          <h3 className="school-name">{school.school}</h3>
        </div>
      </div>

      <div className="school-card-body">
        {isExpired ? (
          <div className="buttons-row-one">
            <button
              type="button"
              disabled
              className="card-btn btn-disabled"
              title="Akses pengisian profil SDM telah ditutup"
            >
              <Lock size={18} className="btn-icon" />
              <span>Akses Sudah Ditutup</span>
            </button>
          </div>
        ) : (
          <div className="buttons-row-one">
            <a
              href={school.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-btn btn-profil"
              title={`Buka spreadsheet profil SDM ${school.school}`}
            >
              <FileSpreadsheet size={19} className="btn-icon" />
              <span>Buka Profil SDM</span>
            </a>
          </div>
        )}

        <div className="buttons-row-one">
          <a
            href={helpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card-btn btn-hubungi"
            title="Hubungi admin melalui WhatsApp jika ada kendala"
          >
            <HelpCircle size={19} className="btn-icon" />
            <span>bingung ?? hubungi kami</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SchoolCard
