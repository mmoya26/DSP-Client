import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarPlus,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function index() {
	const [rows, setRows] = useState(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch("/api/users")
			.then((res) => res.json())
			.then((data) => {
				setRows(data.rows);
				setLoading(false);
			});
	}, []);

	return (
		<div className="mx-auto mt-5 max-w-screen-2xl">
			<div className="flex justify-between items-start">
				<h1 className="text-slate-600 font-bold text-3xl mb-20">
					List of Schedules
				</h1>
				<button
					className="bg-lowblue py-2 px-5 rounded-[3px] text-white text-base"
					onClick={() => alert("Generate")}
				>
					<FontAwesomeIcon
						icon={faCalendarPlus}
						className="cursor-pointer text-base mr-3 text-white"
					/>
					Generate Schedule
				</button>
			</div>

			{rows && (
				// Current Section
				<>
					<div className="flex gap-3 flex-col mb-8">
						<h3 className="text-slate-600 font-semibold text-2xl mb-3">
							Current
						</h3>
						<Link
							href={`/schedules/${rows[0].scheduleId}`}
							className="shadow-sm py-4 px-4 bg-white rounded-md border border-gray-200 flex gap-3 items-center justify-between"
							key={rows[0].scheduleId}
						>
							<span>May 5/1 - 5/7</span>
							<FontAwesomeIcon
								icon={faChevronRight}
								className="cursor-pointer text-base text-slate-500 "
							/>
						</Link>
					</div>

					<div className="flex gap-3 flex-col">
						<h3 className="text-slate-600 font-semibold text-2xl mb-3">
							Previous
						</h3>
						{rows.map((r, i) => {
							console.log(i);
							if (i !== 0) {
								return (
									<Link
										href={`/schedules/${r.scheduleId}`}
										className="shadow-sm py-4 px-4 bg-white rounded-md border border-gray-200 flex gap-3 items-center justify-between"
										key={r.scheduleId}
									>
										<span>May 5/1 - 5/7</span>
										<FontAwesomeIcon
											icon={faChevronRight}
											className="cursor-pointer text-base text-slate-500 "
										/>
									</Link>
								);
							}
						})}
					</div>
				</>
			)}
		</div>
	);
}
