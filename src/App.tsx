import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  Building2,
  CheckCircle2,
  Search,
  ShieldCheck,
  Video,
} from "lucide-react";
import SchoolCard, { type School } from "./components/SchoolCard";
import CreateByMe from "./components/CreateByMe";
import schools from "./data/schools";
import logo from "./assets/logo.png";

const DEADLINE = new Date("2026-08-01T00:00:00+07:00").getTime();

function formatCountdown(distance: number) {
  if (distance <= 0) return "Akses telah ditutup";

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
}

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [remainingTime, setRemainingTime] = useState(
    () => DEADLINE - Date.now(),
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemainingTime(DEADLINE - Date.now());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const isExpired = remainingTime <= 0;

  const filteredSchools = useMemo(() => {
    const keyword = searchTerm.trim().toLowerCase();

    return schools.filter((item) =>
      item.school.toLowerCase().includes(keyword),
    );
  }, [searchTerm]);

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
            Portal Pertemuan Resmi PSDM
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-8 sm:px-8 sm:pb-20 sm:pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:pb-24 lg:pt-16">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-300/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-100">
              <Video size={15} />
              Portal Dokumen Yayasan
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              Ruang pertemuan sekolah,
              <span className="block text-[#f6d768]">lebih mudah diakses.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100/80 sm:text-lg sm:leading-8">
              Temukan unit sekolah Anda dan masuk ke link melalui satu
              tautan resmi yang tersedia.
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
        <section className="-mt-16 grid grid-cols-1 gap-4 sm:-mt-20 sm:grid-cols-2">
          <div className="relative flex min-h-32 items-center gap-4 overflow-hidden rounded-2xl border border-white/80 bg-white px-5 py-5 shadow-lg shadow-blue-950/5 sm:rounded-3xl sm:px-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <Building2 size={23} />
            </span>
            <div>
              <p className="text-2xl font-black tracking-tight text-[#102a5c] sm:text-3xl">
                {schools.length}
              </p>
              <p className="mt-0.5 text-xs font-semibold text-slate-500 sm:text-sm">
                Unit sekolah
              </p>
            </div>
          </div>
          <div className={`relative flex min-h-32 items-center gap-4 overflow-hidden rounded-2xl border px-5 py-5 shadow-lg sm:rounded-3xl sm:px-6 ${isExpired ? "border-red-200 bg-red-50" : "border-amber-200 bg-amber-50"}`}>
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-amber-600">
              ⏳
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider">Batas Akses</p>
              <p className="font-extrabold">31 Juli 2026</p>
              <p className="text-sm">{formatCountdown(remainingTime)}</p>
            </div>
          </div>
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
                Gunakan pencarian untuk menemukan unit sekolah, lalu buka tautan Link yang tersedia.
              </p>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-blue-100/70 px-4 py-2 text-sm font-bold text-blue-800">
              <Building2 size={17} />
              {filteredSchools.length} sekolah ditemukan
            </div>
          </div>

          <div className="mt-7 rounded-3xl border border-slate-200/80 bg-white p-3 shadow-sm sm:p-4">
            <div>
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
            </div>
          </div>
        </section>

        <section className="mt-8" aria-live="polite">
          {filteredSchools.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredSchools.map((item) => {
                const school: School = {
                  id: item.id,
                  name: item.school,
                  link: item.link,
                };

                return <SchoolCard key={school.id} school={school} isExpired={isExpired} />;
              })}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center shadow-sm">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                <Search size={28} />
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-slate-800">Sekolah tidak ditemukan</h3>
              <p className="mt-2 text-sm text-slate-500">
                Coba gunakan kata kunci nama sekolah yang berbeda.
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
                <p className="mt-1 text-xs text-blue-200">Portal tautan Dokumen unit sekolah</p>
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
