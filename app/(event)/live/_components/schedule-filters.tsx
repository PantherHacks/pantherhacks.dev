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
            role="button" // Explicitly define as a button
            aria-pressed={isFilterActive} // Indicate the toggle state
            className={cn(
              "min-h-6 cursor-pointer select-none transition-colors duration-300 ",
              isFilterActive
                ? `${getCalendarEventColors(type)[2]} ${getCalendarEventColors(type)[3]} hover:${getCalendarEventColors(type)[2]}/75`
                : "bg-white/20 hover:bg-white/30"
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
