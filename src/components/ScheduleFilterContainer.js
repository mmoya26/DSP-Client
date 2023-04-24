import React, { useContext, useId } from "react";
import {
	EditScheduleContext,
	EditScheduleUpdateContext,
} from "@/contexts/EditScheduleContext";
import ScheduleDayFilter from "./ScheduleDayFilter";

const daysOfTheWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

export default function ScheduleFilterContainer() {
	const { handleFilterChange } = useContext(EditScheduleUpdateContext);
	const { activeFilters } = useContext(EditScheduleContext);

	console.log("RE_RENDERED_CONTAINER");

	return (
		<div className="flex items-center gap-6 mb-5">
			{daysOfTheWeek.map((d) => {
				const id = useId();
				const checked = activeFilters.includes(d.toLowerCase());
				return (
					<ScheduleDayFilter
						key={d}
						id={id}
						day={d}
						handleChange={handleFilterChange}
						isChecked={checked}
					/>
				);
			})}

			<button
				className="bg-gray-200 text-slate-600 py-2 px-3 rounded-[3px] cursor-pointer"
				onClick={() => handleFilterChange("reset")}
			>
				Clear All
			</button>
		</div>
	);
}
