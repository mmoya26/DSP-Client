import React, { useState, useContext, useId } from "react";
import ScheduleLineItem from "@/components/ScheduleLineItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import uuid from "react-uuid";
import {
	faChevronLeft,
	faChevronRight,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
	EditScheduleContext,
	EditScheduleUpdateContext,
} from "@/contexts/EditScheduleContext";
import { AddEmployeeContext } from "@/contexts/AddEmployeeContext";
import AddUserDialog from "@/components/AddUserDialog";
import ScheduleSearchBar from "@/components/ScheduleSearchBar";
import ScheduleFilterContainer from "@/components/ScheduleFilterContainer";

const daysOfTheWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

export default function Schedules() {
	const { rows, activeFilters, snackBarState } =
		useContext(EditScheduleContext);
	const { handleSnackBarClose, handleSnackBar, dispatch } = useContext(
		EditScheduleUpdateContext
	);

	const { openAddUserModal } = useContext(AddEmployeeContext);

	const action = (
		<React.Fragment>
			{/* <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button> */}
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleSnackBarClose}
			>
				<CloseIcon fontSize="small" />
			</IconButton>
		</React.Fragment>
	);

	return (
		<div className="mx-auto mt-5 max-w-screen-2xl">
			<h1 className="text-slate-600 font-bold text-2xl mb-12">
				<p className="text-slate-500 font-normal text-base">
					Schedule for week of:
				</p>
				May 5/1 - 5/7
			</h1>

			{/* Filters */}
			<ScheduleFilterContainer />

			{/* Search Bar */}
			<ScheduleSearchBar />

			{/* Days of the week */}
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

			{/* Table Structure */}
			<div className="mt-5">
				{/* Line Item */}
				{rows.map((r, n) => {
					return (
						<ScheduleLineItem
							n={n}
							row={r}
							removeEmployee={() => {
								dispatch({ type: "REMOVE", id: r.id });
								handleSnackBar("Employee sucessfuly removed");
							}}
							key={r.id}
						/>
					);
				})}
			</div>

			{/* Pagination */}
			<div className="mt-6 mb-10 flex items-center justify-between text-base">
				<button
					className="bg-lowblue text-white px-5 py-2 rounded-[3px]"
					onClick={() => openAddUserModal()}
				>
					<FontAwesomeIcon
						icon={faPlus}
						className="text-white text-base mr-3"
					/>
					Add Employee
				</button>
				<div className="flex items-center gap-5">
					<span className="text-slate-500 text-base">Page 1 of 10</span>
					<div className="flex gap-3">
						{/* Reduce opacity of left or right arrow depending if there is any available pages on either
            direction */}
						<button className="w-8 h-8 rounded-[3px] border border-gray-200 shadow-sm">
							<FontAwesomeIcon
								icon={faChevronLeft}
								className="text-slate-500 cursor-pointer text-base"
							/>
						</button>
						<button className="w-8 h-8 rounded-[3px] border border-gray-200 shadow-sm">
							<FontAwesomeIcon
								icon={faChevronRight}
								className="text-slate-500 cursor-pointer text-base"
							/>
						</button>
					</div>
				</div>
			</div>

			<AddUserDialog />
			<Snackbar
				open={snackBarState.open}
				autoHideDuration={6000}
				onClose={handleSnackBarClose}
				message={snackBarState.message}
				action={action}
				ContentProps={{
					className: "bg-slate-600",
				}}
			/>
		</div>
	);
}
