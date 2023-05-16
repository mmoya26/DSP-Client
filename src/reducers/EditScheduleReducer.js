import uuid from "react-uuid";

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			return [
				...state,
				{
					name: `${action.employee.name}`,
					daysWorking: { ...action.employee.daysWorking },
					id: uuid(),
				},
			];

		case "REMOVE":
			// filter rows based on the id passed from action.id,
			// if the passed id does not equal to the current row id being looped
			// then keep the row, otherwise throw it away
			return state.filter((r) => r.id !== action.id);

		case "EDIT":
			const { name, employeeId, daysWorking } = action.employee;
			const editedArray = state.filter((r) => r.id !== employeeId);
			const editedEmployee = {
				name,
				id: employeeId,
				daysWorking,
			};
			editedArray.push(editedEmployee);
			return editedArray;

		case "INITIAL_SET":
			return action.rows;

		default:
			return state;
	}
};

export default reducer;
