import uuid from "react-uuid";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      // TODO: add new user logic
      return [
        ...state,
        {
          firstName: "Jose",
          lastName: "Alvarez",
          daysWorking: {
            sunday: false,
            monday: false,
            tuesday: true,
            wednesday: true,
            thursday: true,
            friday: true,
            saturday: true,
          },
          id: uuid(),
        },
      ];

    case "REMOVE":
      // filter rows based on the id passed from action.id,
      // if the passed id does not equal to the current row id being looped
      // then keep the row, otherwise throw it away
      return state.filter((r) => r.id !== action.id);

    default:
      return state;
  }
};

export default reducer;
