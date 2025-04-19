import { Dispatch, FC, SetStateAction } from "react";

interface ScheduleFiltersProps {
  activeFilters: string[];
  setActiveFilters: Dispatch<SetStateAction<string[]>>;
}

const ScheduleFilters: FC<ScheduleFiltersProps> = ({ activeFilters, setActiveFilters }) => {
  const activityTypes: string[] = [
    "Check In",
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
    <div className="flex flex-row gap-2">
      {activityTypes.map((type) => (
        <label key={type}>
          <input type="checkbox" checked={activeFilters.includes(type)} onChange={() => handleFilterChange(type)} />
          {type}
        </label>
      ))}
    </div>
  );
};

export default ScheduleFilters;
