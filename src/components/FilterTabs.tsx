import { cn } from "@/lib/utils";

export type FilterType = "sura" | "juz" | "page" | "bookmark";

interface FilterTabsProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: { id: FilterType; label: string }[] = [
  { id: "sura", label: "Sura" },
  { id: "juz", label: "Juz" },
  { id: "page", label: "Page" },
  { id: "bookmark", label: "Bookmark" },
];

export function FilterTabs({ activeFilter, onFilterChange }: FilterTabsProps) {
  return (
    <div className="flex gap-1.5 sm:gap-2 p-1 rounded-xl bg-muted/50 w-fit">
      {filters.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => onFilterChange(id)}
          className={cn(
            "px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200",
            activeFilter === id
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
