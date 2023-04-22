import React, { useContext, useId } from "react";
import { EditScheduleUpdateContext } from "@/contexts/EditScheduleContext";
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

	return (
		<div className="flex gap-6 mb-5">
			{daysOfTheWeek.map((d) => {
				const id = useId();

				return (
					<ScheduleDayFilter
						key={d}
						id={id}
						day={d}
						handleChange={handleFilterChange}
					/>
				);
			})}
		</div>
	);
}
