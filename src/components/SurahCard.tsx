import { Surah } from "@/types/quran";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SurahCardProps {
  surah: Surah;
  index: number;
}

export function SurahCard({ surah, index }: SurahCardProps) {
  return (
    <Link
      to={`/surah/${surah.nomor}`}
      className="group block rounded-2xl bg-card hover:bg-card/80 p-3.5 sm:p-4 border border-border hover:border-primary/30 transition-all duration-200 hover:shadow-md animate-fade-in"
      style={{ animationDelay: `${Math.min(index * 15, 200)}ms` }}
    >
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Surah Number - Diamond style like reference */}
        <div className={cn(
          "relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11",
          "rounded-xl rotate-0",
          "bg-gradient-to-br from-primary/10 to-primary/5",
          "border border-primary/20",
          "group-hover:border-primary/40 group-hover:from-primary/15 transition-all"
        )}>
          <span className="text-sm sm:text-base font-bold text-primary">
            {surah.nomor}
          </span>
        </div>

        {/* Surah Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm sm:text-base text-foreground group-hover:text-primary transition-colors">
            {surah.namaLatin}
          </h3>
          <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5">
            <span className="text-xs text-muted-foreground">
              {surah.jumlahAyat} Ayat
            </span>
            <span className="text-muted-foreground/50">•</span>
            <span className={cn(
              "text-xs",
              surah.tempatTurun === "Mekah" 
                ? "text-amber-600" 
                : "text-emerald-600"
            )}>
              {surah.tempatTurun === "Mekah" ? "Meccan" : "Medinan"}
            </span>
          </div>
        </div>

        {/* Arabic Name */}
        <div className="text-right shrink-0">
          <p className="font-arabic text-xl sm:text-2xl text-quran-gold leading-tight">
            {surah.nama}
          </p>
        </div>
      </div>
    </Link>
  );
}
