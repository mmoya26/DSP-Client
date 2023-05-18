import React, { createContext, useReducer, useState, useEffect } from "react";
import scheduleReducer from "@/reducers/EditScheduleReducer";
import uuid from "react-uuid";
import { sortScheduleRows } from "@/helpers/sortScheduleRows";
import { useRouter } from "next/router";

export const EditScheduleContext = createContext();
export const EditScheduleUpdateContext = createContext();

export function EditScheduleContextProvider({ children }) {
	const [rows, dispatch] = useReducer(scheduleReducer, []);
	const router = useRouter();
	const { id } = router.query;

	useEffect(() => {
		// If {id} equals undefined there is no need for us to fetch data since we won't be using
		// the only time {id} won't be undefined is when an user clicks on a schedule from the schedules list at /schedules
		if (id) {
			console.log("Fetching...");
			fetch("/api/users/2")
				.then((res) => res.json())
				.then((data) => {
					const { rows } = data.schedule;
					dispatch({ type: "INITIAL_SET", rows });
				});
		} else {
			console.log("Don't fetch");
		}
	}, [id]);

	const [snackBarState, setSnackBarState] = useState({
		message: "Task Sucessful",
		open: false,
	});

	const [removeDialogState, setRemoveDialogState] = useState(false);

	const handleRemoveDialogStateOpen = () => {
		setRemoveDialogState(true);
	};

	const handleOpenRemoveDialogStateClose = () => {
		setRemoveDialogState(false);
	};

	const [activeFilters, setActiveFilters] = useState([]);

	const handleSnackBarClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setSnackBarState({ ...snackBarState, open: false });
	};

	const handleSnackBar = (message) => {
		setSnackBarState({ message, open: true });
	};

	function handleFilterChange(day) {
		// If day === reset then set activeFilters to an empty array
		if (day === "reset") {
			setActiveFilters([]);
		} else {
			// check if the passed filtered is alredy in the activeFilters array
			// if so then we want to remove it by filtering
			if (activeFilters.includes(day.toLowerCase())) {
				let filteredFilters = activeFilters.filter(
					(f) => f !== day.toLowerCase()
				);

				setActiveFilters(filteredFilters);
			} else {
				// Otherwise add the passed day to the activeFilters array
				setActiveFilters((oldFilters) => [...oldFilters, day.toLowerCase()]);
			}
		}
	}

	function filterRows() {
		// If the activeFilters array count is not equals to 0 that means that there are filters currently applied
		// so lets filter the rows that will be set to the edit schedule page
		if (activeFilters.length !== 0) {
			// Filter all rows
			const newRows = rows.filter((r) => {
				// test every active filter and if the return of the fuction is true then we want to keep
				// that row, which will be returned by the row.filter()
				return activeFilters.every((filter) => {
					return r.daysWorking[filter] !== "off";
				});
			});

			sortScheduleRows(newRows);
			return newRows;
		} else {
			sortScheduleRows(rows);
			return rows;
		}
	}

	return (
		<EditScheduleContext.Provider
			value={{
				rows: filterRows(),
				activeFilters,
				snackBarState,
				removeDialogState,
			}}
		>
			<EditScheduleUpdateContext.Provider
				value={{
					handleSnackBarClose,
					handleSnackBar,
					handleRemoveDialogStateOpen,
					handleOpenRemoveDialogStateClose,
					handleFilterChange,
					dispatch,
				}}
			>
				{children}
			</EditScheduleUpdateContext.Provider>
		</EditScheduleContext.Provider>
	);
}
