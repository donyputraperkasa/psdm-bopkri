import { useState, useMemo, useEffect } from 'react'
import './App.css'
import schools from './data/schools'
import Header from './components/Header'
import DashboardStats from './components/DashboardStats'
import SearchFilter from './components/SearchFilter'
import Announcement from './components/Announcement'
import SchoolList from './components/SchoolList'
import CreateByMe from './components/CreateByMe'
import FloatingContact from './components/FloatingContact'

const DEADLINE = new Date("2026-12-31T00:00:00+07:00").getTime()

function getCountdownParts(distance: number) {
  if (distance <= 0) return null

  return [
    { label: "Hari", value: Math.floor(distance / (1000 * 60 * 60 * 24)) },
    { label: "Jam", value: Math.floor((distance / (1000 * 60 * 60)) % 24) },
    { label: "Menit", value: Math.floor((distance / (1000 * 60)) % 60) },
    { label: "Detik", value: Math.floor((distance / 1000) % 60) },
  ]
}

export function App() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [remainingTime, setRemainingTime] = useState(() => DEADLINE - Date.now())

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemainingTime(DEADLINE - Date.now())
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  const isExpired = remainingTime <= 0
  const countdownParts = getCountdownParts(remainingTime)

  // Categorize counts for filter chips
  const counts = useMemo(() => {
    let tk = 0
    let sd = 0
    let smp = 0
    let smak = 0
    for (const item of schools) {
      if (item.jenjang === 'TK') tk++
      else if (item.jenjang === 'SD') sd++
      else if (item.jenjang === 'SMP') smp++
      else if (item.jenjang === 'SMA' || item.jenjang === 'SMK') smak++
    }
    return { total: schools.length, tk, sd, smp, smak }
  }, [])

  // Filter schools based on search query and selected category
  const filteredSchools = useMemo(() => {
    const query = search.toLowerCase().trim()
    return schools.filter((item) => {
      const matchSchool = item.school.toLowerCase().includes(query)
      let matchCategory = true
      if (selectedCategory === 'TK') {
        matchCategory = item.jenjang === 'TK'
      } else if (selectedCategory === 'SD') {
        matchCategory = item.jenjang === 'SD'
      } else if (selectedCategory === 'SMP') {
        matchCategory = item.jenjang === 'SMP'
      } else if (selectedCategory === 'SMA/K') {
        matchCategory = item.jenjang === 'SMA' || item.jenjang === 'SMK'
      }
      return matchSchool && matchCategory
    })
  }, [search, selectedCategory])

  return (
    <div className="app-container">
      {/* Header Terpusat */}
      <Header />

      {/* Statistik Ringkas Dashboard */}
      <DashboardStats
        totalSchools={schools.length}
        totalJenjang={5}
        displayedCount={filteredSchools.length}
        isExpired={isExpired}
        countdownParts={countdownParts}
      />

      {/* Pencarian dan Filter Chips Jenjang */}
      <SearchFilter
        search={search}
        onSearchChange={setSearch}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        counts={counts}
      />

      {/* Tombol Cepat & Banner Panduan Pengisian */}
      <Announcement />

      {/* Grid Kartu Sekolah */}
      <main>
        <SchoolList
          schools={filteredSchools}
          search={search}
          selectedCategory={selectedCategory}
          isExpired={isExpired}
        />
      </main>

      {/* Floating Mas Don Help Contact */}
      <FloatingContact />

      {/* Footer */}
      <CreateByMe />
    </div>
  )
}

export default App
