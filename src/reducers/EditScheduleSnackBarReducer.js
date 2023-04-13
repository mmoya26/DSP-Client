const reducer = (state, action) => {
  switch (action.type) {
    case "REMOVE":
      return "Employee removed sucessfully";

    default:
      return "Task succesful";
  }
};

export default reducer;
