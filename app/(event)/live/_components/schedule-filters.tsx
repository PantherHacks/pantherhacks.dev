import { Dispatch, FC, SetStateAction } from "react";
import { CheckCircle, Circle } from "lucide-react";

import { getCalendarEventColors } from "@/app/(event)/live/_components/schedule-helpers";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ScheduleFiltersProps {
  activeFilters: string[];
  setActiveFilters: Dispatch<SetStateAction<string[]>>;
}

const ScheduleFilters: FC<ScheduleFiltersProps> = ({ activeFilters, setActiveFilters }) => {
  const activityTypes: string[] = [
    "Check-in",
    "Main Event",
    "Hacking Time",
    "Office Hours",
    "Food",
    "Social Event",
    "Guest Speaker",
  ];

  // toggles filter item for schedule filters
  const handleFilterChange = (type: string) => {
    if (activeFilters.includes(type)) {
      setActiveFilters(activeFilters.filter((filter) => filter !== type));
    } else {
      setActiveFilters([...activeFilters, type]);
    }
  };

  return (
    <div className="flex flex-row justify-center items-center gap-2 flex-wrap max-w-[30rem]">
      {activityTypes.map((type) => {
        const isFilterActive = activeFilters.includes(type);
        return (
          <Badge
            key={type}
            role="button"
            aria-pressed={isFilterActive}
            style={{ "--accent": getCalendarEventColors(type)[4], "--card-bg": getCalendarEventColors(type)[5] } as React.CSSProperties}
            className={cn(
              "min-h-6 cursor-pointer select-none transition-all duration-300 rounded-none font-UbuntuMono tracking-wide",
              isFilterActive
                ? `${getCalendarEventColors(type)[0]} text-white`
                : "bg-transparent text-white/50 border border-white/20 hover:bg-[var(--card-bg)] hover:text-white hover:border-[var(--accent)]"
            )}
            aria-label={`Toggle filter for ${type} events`}
            onClick={() => handleFilterChange(type)}
          >
            {isFilterActive ? <CheckCircle className="pr-2" /> : <Circle className="pr-2" />}
            {type}
          </Badge>
        );
      })}
    </div>
  );
};

export default ScheduleFilters;
