import React, { memo, useContext } from "react";
import { AddEmployeeContext } from "@/contexts/AddEmployeeContext";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ScheduleAddEmployeeButton() {
	const { openAddUserModal } = useContext(AddEmployeeContext);

	return (
		<button
			className="bg-lowblue text-white px-5 py-2 rounded-[3px]"
			onClick={() => openAddUserModal()}
		>
			<FontAwesomeIcon icon={faPlus} className="text-white text-base mr-3" />
			Add Employee
		</button>
	);
}

export default memo(ScheduleAddEmployeeButton);
