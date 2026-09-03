import React from 'react'
import { School, Layers, SearchCheck, Hourglass } from 'lucide-react'

interface CountdownPart {
  label: string
  value: number
}

interface DashboardStatsProps {
  totalSchools: number
  totalJenjang: number
  displayedCount: number
  isExpired: boolean
  countdownParts: CountdownPart[] | null
}

export const DashboardStats: React.FC<DashboardStatsProps> = ({
  totalSchools,
  totalJenjang,
  displayedCount,
  isExpired,
  countdownParts,
}) => {
  return (
    <section className="dashboard-grid" aria-label="Statistik Ringkas">
      <div className="dashboard-card">
        <h3 className="dashboard-card-title">
          <School size={22} color="#2563eb" />
          Total Sekolah
        </h3>
        <p className="dashboard-card-value">{totalSchools}</p>
      </div>

      <div className="dashboard-card">
        <h3 className="dashboard-card-title">
          <Layers size={22} color="#2563eb" />
          Kategori Jenjang
        </h3>
        <p className="dashboard-card-value">
          {totalJenjang} <span style={{ fontSize: '16px', fontWeight: 500, color: '#64748b' }}>Jenjang</span>
        </p>
      </div>

      <div className="dashboard-card">
        <h3 className="dashboard-card-title">
          <Hourglass size={20} color={isExpired ? '#dc2626' : '#2563eb'} />
          Batas Waktu
        </h3>
        {isExpired ? (
          <p className="dashboard-card-value" style={{ color: '#dc2626', fontSize: '24px', marginTop: '16px' }}>
            Akses Ditutup
          </p>
        ) : countdownParts ? (
          <div className="dashboard-countdown-row">
            {countdownParts.map((part) => (
              <div key={part.label} className="dashboard-countdown-unit">
                <div className="dashboard-countdown-num">
                  {String(part.value).padStart(2, '0')}
                </div>
                <div className="dashboard-countdown-lbl">{part.label}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="dashboard-card-value" style={{ fontSize: '22px' }}>
            Sedang Berjalan
          </p>
        )}
      </div>

      <div className="dashboard-card">
        <h3 className="dashboard-card-title">
          <SearchCheck size={22} color="#2563eb" />
          Hasil Ditampilkan
        </h3>
        <p className="dashboard-card-value">{displayedCount}</p>
      </div>
    </section>
  )
}

export default DashboardStats
