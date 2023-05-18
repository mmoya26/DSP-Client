import React, { useContext } from "react";
import { Inter } from "next/font/google";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {
	EditScheduleContext,
	EditScheduleUpdateContext,
} from "@/contexts/EditScheduleContext";

const inter = Inter({ subsets: ["latin"] });

export default function RemoveDialog({ text, employee }) {
	const { removeDialogState } = useContext(EditScheduleContext);
	const { handleOpenRemoveDialogStateClose, dispatch, handleSnackBar } =
		useContext(EditScheduleUpdateContext);

	const { name, id } = employee;

	return (
		<Dialog
			open={removeDialogState}
			onClose={handleOpenRemoveDialogStateClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
			maxWidth="md"
			PaperProps={{
				style: {
					backgroundColor: "#f9fafb",
				},
			}}
		>
			<DialogTitle
				id="alert-dialog-title"
				className={`${inter.className} text-slate-600 text-3xl font-bold`}
			>
				Removing {name}
			</DialogTitle>
			<p className="px-7">{text}</p>
			<div className="flex justify-start px-6 py-4 mt-auto">
				<button
					className="font-base bg-lowblue text-white px-7 py-2 rounded-[3px]"
					onClick={() => {
						dispatch({ type: "REMOVE", id });
						handleSnackBar("Employee sucessfully removed");
						handleOpenRemoveDialogStateClose();
					}}
				>
					Remove
				</button>
				<button
					className="text-slate-600 font-base px-7 py-2"
					onClick={handleOpenRemoveDialogStateClose}
				>
					Cancel
				</button>
			</div>
		</Dialog>
	);
}
