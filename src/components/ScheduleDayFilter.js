import React from "react";

export default function ScheduleDayFilter({ handleChange, day, id }) {
	return (
		<div className="flex gap-2 cursor-pointer">
			<input
				id={id}
				type="checkbox"
				className="checkbox"
				onChange={() => handleChange(day)}
			/>
			<label htmlFor={id} className="text-slate-600 text-base cursor-pointer">
				{day}
			</label>
		</div>
	);
}
