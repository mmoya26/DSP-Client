import React, { useContext } from "react";
import { EditScheduleContext } from "@/contexts/EditScheduleContext";
import uuid from "react-uuid";

const daysOfTheWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

export default function ScheduleDaysOfTheWeek() {
	const { activeFilters } = useContext(EditScheduleContext);
	return (
		<div className="flex mt-6 items-center">
			<div className="text-slate-600 basis-1/4 px-4 text-center">
				Employee Name
			</div>
			<div className="flex gap-[60px]">
				{daysOfTheWeek.map((d, i) => {
					const isActive = activeFilters.includes(d.toLowerCase());

					return (
						<div
							className={`text-slate-600 text-center w-[93px] ${
								isActive ? "font-bold" : ""
							}`}
							key={uuid()}
						>
							{d} <br />
							(5/{i + 1})
						</div>
					);
				})}
			</div>
			<div className="w-[46px]"></div>
		</div>
	);
}
