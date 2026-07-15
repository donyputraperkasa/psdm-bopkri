import { ArrowUpRight, Building2, CalendarDays, Clock3, FolderOpen } from "lucide-react";

export interface School {
  id: number;
  name: string;
  day: string;
  date: string;
  time: string;
  driveUrl: string;
}

interface SchoolCardProps {
  school: School;
  index: number;
}

const accents = [
  { icon: "bg-blue-100 text-blue-700", line: "bg-blue-600", soft: "bg-blue-50 text-blue-700" },
  { icon: "bg-violet-100 text-violet-700", line: "bg-violet-600", soft: "bg-violet-50 text-violet-700" },
  { icon: "bg-emerald-100 text-emerald-700", line: "bg-emerald-600", soft: "bg-emerald-50 text-emerald-700" },
];

export default function SchoolCard({ school, index }: SchoolCardProps) {
  const accent = accents[index % accents.length];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/8 sm:p-6">
      <div className={`absolute inset-x-0 top-0 h-1 ${accent.line}`} />

      <div className="flex items-start justify-between gap-4">
        <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${accent.icon}`}>
          <Building2 size={23} strokeWidth={2.2} />
        </span>
        <span className="text-xs font-extrabold tracking-[0.14em] text-slate-300">
          #{String(school.id).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-700">Unit sekolah</p>
        <h3 className="mt-2 min-h-14 text-xl font-extrabold leading-7 tracking-tight text-[#102a5c]">
          {school.name}
        </h3>

        <div className="mt-5 space-y-2.5 border-t border-slate-100 pt-5">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${accent.soft}`}>
              <CalendarDays size={16} />
            </span>
            <span><strong className="font-bold text-slate-700">{school.day}</strong>, {school.date}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${accent.soft}`}>
              <Clock3 size={16} />
            </span>
            <span>{school.time}</span>
          </div>
        </div>

        <a
          href={school.driveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Buka folder Google Drive ${school.name}`}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#102a5c] px-4 py-3.5 text-sm font-extrabold text-white transition duration-200 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
        >
          <FolderOpen size={18} />
          Buka folder Drive
          <ArrowUpRight size={17} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}
