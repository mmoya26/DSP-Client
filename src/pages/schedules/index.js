import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarPlus,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function index() {
	const [data, setData] = useState(null);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch("/api/")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
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

			<div>
				<h3 className="text-slate-600 font-semibold text-2xl mb-5">Current</h3>

				<Link
					href="/schedules/1"
					className="shadow-sm py-4 px-4 bg-white rounded-md border border-gray-200 flex gap-3 items-center justify-between"
				>
					<span>May 5/1 - 5/7</span>
					<FontAwesomeIcon
						icon={faChevronRight}
						className="cursor-pointer text-base text-slate-500 "
					/>
				</Link>
			</div>
		</div>
	);
}
