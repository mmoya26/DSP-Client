import React from "react";

export default function ScheduleSearchBar() {
	return (
		<div className="relative mb-5">
			<div className="rounded-md shadow-sm">
				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						aria-hidden="true"
						className="mr-3 h-4 w-4 text-gray-400"
					>
						<path
							fillRule="evenodd"
							d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 
          1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
							clipRule="evenodd"
						></path>
					</svg>
				</div>

				<input
					type="text"
					name="search"
					id="search"
					className="h-10 block w-full rounded-md border border-gray-200 pl-9 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					placeholder="Search by name"
					spellCheck="false"
				/>
			</div>
		</div>
	);
}
