import React from 'react'
import { School } from 'lucide-react'
import { SchoolCard } from './SchoolCard'
import type { SchoolData } from '../data/schools'

interface SchoolListProps {
  schools: SchoolData[]
  search: string
  selectedCategory: string
  isExpired: boolean
}

export const SchoolList: React.FC<SchoolListProps> = ({
  schools,
  search,
  selectedCategory,
  isExpired,
}) => {
  if (schools.length === 0) {
    return (
      <div className="empty-state">
        <School size={48} color="#94a3b8" style={{ margin: '0 auto 12px' }} />
        <h3>Sekolah tidak ditemukan</h3>
        <p>
          Tidak ditemukan sekolah dengan kata kunci "{search}"
          {selectedCategory ? ` pada kategori ${selectedCategory}` : ''}.
        </p>
      </div>
    )
  }

  return (
    <div className="schools-grid">
      {schools.map((school) => (
        <SchoolCard
          key={school.id}
          school={school}
          isExpired={isExpired}
        />
      ))}
    </div>
  )
}

export default SchoolList
