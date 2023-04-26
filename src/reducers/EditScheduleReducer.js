import uuid from "react-uuid";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          name: `${action.employee.name}`,
          daysWorking: { ...action.employee.daysWorkingSelected },
          id: uuid(),
        },
      ];

    case "REMOVE":
      // filter rows based on the id passed from action.id,
      // if the passed id does not equal to the current row id being looped
      // then keep the row, otherwise throw it away
      return state.filter((r) => r.id !== action.id);

    case "EDIT":
      const { name, employeeId, daysWorkingSelected } = action.employee;
      const editedArray = state.filter((r) => r.id !== employeeId);
      const editedEmployee = {
        name,
        id: employeeId,
        daysWorking: daysWorkingSelected,
      };
      editedArray.push(editedEmployee);
      return editedArray;

    default:
      return state;
  }
};

export default reducer;
