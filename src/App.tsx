import { useMemo, useState } from "react";
import {
  ArrowDown,
  Building2,
  CalendarDays,
  CheckCircle2,
  FileText,
  FolderOpen,
  Search,
  ShieldCheck,
} from "lucide-react";
import SchoolCard, { type School } from "./components/SchoolCard";
import CreateByMe from "./components/CreateByMe";
import schools from "./data/schools";
import logo from "./assets/logo.png";

const statisticItems = [
  { label: "Unit sekolah", icon: Building2 },
  { label: "Jadwal tersedia", icon: CalendarDays },
  { label: "Hasil ditampilkan", icon: CheckCircle2 },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("all");

  const dateOptions = useMemo(() => {
    const dates = schools.map((item) => item.date).filter(Boolean);
    return Array.from(new Set(dates));
  }, []);

  const filteredSchools = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();

    return schools.filter((item) => {
      const matchesSearch = item.school.toLowerCase().includes(keyword);
      const matchesDate = selectedDate === "all" || item.date === selectedDate;

      return matchesSearch && matchesDate;
    });
  }, [searchTerm, selectedDate]);

  const statisticValues = [
    schools.length,
    dateOptions.length,
    filteredSchools.length,
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#f4f7fb] text-slate-900">
      <header className="relative overflow-hidden bg-[#102a5c] text-white">
        <div className="hero-grid absolute inset-0 opacity-30" aria-hidden="true" />
        <div
          className="absolute -right-28 -top-36 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-44 -left-24 h-96 w-96 rounded-full bg-amber-300/10 blur-3xl"
          aria-hidden="true"
        />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white p-1.5 shadow-lg shadow-slate-950/10">
              <img src={logo} alt="" className="h-full w-full object-contain" />
            </div>
            <div>
              <p className="text-sm font-extrabold tracking-wide">PSDM BOPKRI</p>
              <p className="text-[11px] text-blue-200">Yayasan BOPKRI Yogyakarta</p>
            </div>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-blue-50 backdrop-blur sm:flex">
            <ShieldCheck size={15} />
            Portal Dokumen Resmi PSDM
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-8 sm:px-8 sm:pb-20 sm:pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:pb-24 lg:pt-16">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-300/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-100">
              <FileText size={15} />
              Pusat dokumen YAYASAN
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Dokumen sekolah,
              <span className="block text-[#f6d768]">lebih mudah ditemukan.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100/80 sm:text-lg sm:leading-8">
              Temukan unit sekolah mu dan akses folder Google Drive
              yang Anda butuhkan dalam satu portal terpusat.
            </p>

            <a
              href="#direktori"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#f6d768] px-5 py-3.5 text-sm font-extrabold text-[#102a5c] shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              Lihat daftar sekolah
              <ArrowDown size={18} />
            </a>
          </div>

          <div className="relative mx-auto hidden w-full max-w-sm lg:block">
            <div className="absolute inset-8 rounded-full bg-blue-300/20 blur-3xl" />
            <div className="relative aspect-square rounded-[3rem] border border-white/20 bg-white/10 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-md">
              <div className="flex h-full w-full items-center justify-center rounded-[2.25rem] bg-white p-8 shadow-xl">
                <img
                  src={logo}
                  alt="Logo Yayasan BOPKRI Yogyakarta"
                  className="h-full w-full object-contain drop-shadow-lg"
                />
              </div>
            </div>
            <div className="absolute -bottom-5 -left-10 flex items-center gap-3 rounded-2xl border border-white/70 bg-white px-4 py-3 text-[#102a5c] shadow-xl">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <CheckCircle2 size={20} />
              </span>
              <div>
                <p className="text-xs text-slate-500">Akses terpusat</p>
                <p className="text-sm font-extrabold">Cepat &amp; praktis</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="direktori" className="mx-auto max-w-7xl scroll-mt-6 px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
        <section className="-mt-16 grid grid-cols-1 gap-3 sm:-mt-20 sm:grid-cols-3 sm:gap-4">
          {statisticItems.map(({ label, icon: Icon }, index) => (
            <div
              key={label}
              className="relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/80 bg-white px-5 py-5 shadow-lg shadow-blue-950/5 sm:rounded-3xl sm:px-6"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <Icon size={23} />
              </span>
              <div>
                <p className="text-2xl font-black tracking-tight text-[#102a5c] sm:text-3xl">
                  {statisticValues[index]}
                </p>
                <p className="mt-0.5 text-xs font-semibold text-slate-500 sm:text-sm">{label}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12 sm:mt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700">
                YAYASAN BOPKRI YOGYAKARTA
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#102a5c] sm:text-4xl">
                Daftar sekolah BOPKRI
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                Gunakan pencarian atau filter tanggal untuk menemukan sekolah dengan cepat.
              </p>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-100/70 px-4 py-2 text-sm font-bold text-blue-800">
              <FolderOpen size={17} />
              {filteredSchools.length} sekolah ditemukan
            </div>
          </div>

          <div className="mt-7 rounded-3xl border border-slate-200/80 bg-white p-3 shadow-sm sm:p-4">
            <div className="flex flex-col gap-3 lg:flex-row">
              <label className="flex flex-1 items-center gap-3 rounded-2xl border border-transparent bg-slate-50 px-4 transition focus-within:border-blue-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100/70">
                <Search size={21} className="shrink-0 text-blue-700" />
                <span className="sr-only">Cari nama sekolah</span>
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Ketik nama sekolah..."
                  className="h-14 w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
              </label>

              <label className="relative">
                <span className="sr-only">Filter berdasarkan tanggal</span>
                <select
                  value={selectedDate}
                  onChange={(event) => setSelectedDate(event.target.value)}
                  className="h-14 w-full appearance-none rounded-2xl border border-transparent bg-slate-50 pl-4 pr-12 text-sm font-semibold text-slate-700 outline-none transition focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100/70 lg:min-w-72"
                >
                  <option value="all">Semua tanggal</option>
                  {dateOptions.map((date) => (
                    <option key={date} value={date}>{date}</option>
                  ))}
                </select>
                <CalendarDays
                  size={18}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-blue-700"
                />
              </label>
            </div>
          </div>
        </section>

        <section className="mt-8" aria-live="polite">
          {filteredSchools.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredSchools.map((item, index) => {
                const school: School = {
                  id: item.id,
                  name: item.school,
                  day: item.day,
                  date: item.date,
                  time: item.time,
                  driveUrl: item.driveLink,
                };

                return <SchoolCard key={school.id} school={school} index={index} />;
              })}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center shadow-sm">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <Search size={28} />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-slate-800">Sekolah tidak ditemukan</h3>
              <p className="mt-2 text-sm text-slate-500">
                Coba kata kunci atau pilihan tanggal yang berbeda.
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="mt-10 bg-[#0b214a] text-white">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white p-1.5">
                <img src={logo} alt="" className="h-full w-full object-contain" />
              </div>
              <div>
                <p className="font-extrabold">PSDM BOPKRI</p>
                <p className="mt-1 text-xs text-blue-200">Direktori dokumen unit sekolah</p>
              </div>
            </div>
            <CreateByMe />
          </div>
          <div className="mt-8 border-t border-white/10 pt-5 text-xs text-blue-200/70">
            © {new Date().getFullYear()} Yayasan BOPKRI Yogyakarta. Semua hak dilindungi.
          </div>
        </div>
      </footer>
    </div>
  );
}
