function generateScheduleBadge(text) {
	switch (text) {
		case "ON":
			return (
				<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
					{text}
				</span>
			);
		case "OFF":
			return (
				<span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
					{text}
				</span>
			);

		case "OPS":
			return (
				<span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
					{text}
				</span>
			);

		case "D": {
			return (
				<span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
					{text}
				</span>
			);
		}

		case "OC":
			return (
				<span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
					{text}
				</span>
			);

		default:
			return (
				<span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
					{text}
				</span>
			);
	}
}

export { generateScheduleBadge };
