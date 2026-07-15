import { Heart } from "lucide-react";

export default function CreateByMe() {
  return (
    <a
      href="https://portofolio-ku-gold.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-xs font-bold text-blue-50 transition hover:border-white/30 hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-white/10"
    >
      Created with
      <Heart size={15} className="fill-[#f6d768] text-[#f6d768] transition group-hover:scale-110" />
      by Mas Don
    </a>
  );
}
