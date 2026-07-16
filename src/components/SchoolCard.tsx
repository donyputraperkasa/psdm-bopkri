import { ArrowUpRight, Building2, Link2 } from "lucide-react";

export interface School {
  id: number;
  name: string;
  link: string;
}

interface SchoolCardProps {
  school: School;
  isExpired: boolean;
}

export default function SchoolCard({ school, isExpired }: SchoolCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/8 sm:p-6">
      <div className="absolute inset-x-0 top-0 h-1 bg-blue-600" />

      <div className="flex items-start justify-between gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
          <Building2 size={23} strokeWidth={2.2} />
        </span>
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-700">Unit sekolah</p>
        <h3 className="mt-2 text-xl font-extrabold leading-7 tracking-tight text-[#102a5c]">
          {school.name}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
          Klik tombol dibawah ini untuk mengisi profil SDM Sekolah Anda.
        </p>

        {isExpired ? (
          <button
            type="button"
            disabled
            className="mt-6 flex min-h-14 w-full cursor-not-allowed items-center justify-center gap-2 rounded-2xl bg-slate-300 px-5 py-4 text-base font-extrabold text-slate-600"
          >
            Akses Sudah Ditutup
          </button>
        ) : (
          <a
            href={school.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Buka Dokumen ${school.name}`}
            className="mt-6 flex min-h-14 w-full items-center justify-center gap-2.5 rounded-2xl bg-[#102a5c] px-5 py-4 text-base font-extrabold text-white shadow-md shadow-blue-950/10 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-100"
          >
            <Link2 size={20} />
            Buka Profil SDM
            <ArrowUpRight size={19} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        )}
      </div>
    </article>
  );
}
