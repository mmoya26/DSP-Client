function sortScheduleRows(rows) {
	// sort() automatically sorts the referenced array passed so no need to return a new array since
	// the return value of sort doesn't make a new copy of the sorted array
	rows.sort((a, b) => {
		if (a.name < b.name) {
			return -1;
		}
		if (a.name > b.name) {
			return 1;
		}
		return 0;
	});
}

export { sortScheduleRows };
