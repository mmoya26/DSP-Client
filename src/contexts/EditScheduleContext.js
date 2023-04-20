import React, { createContext, useReducer, useState } from "react";
import scheduleReducer from "@/reducers/EditScheduleReducer";
import uuid from "react-uuid";

export const EditScheduleContext = createContext();
export const EditScheduleUpdateContext = createContext();

export function EditScheduleContextProvider({ children }) {
  const [rows, dispatch] = useReducer(scheduleReducer, [
    {
      name: "Miguel Moya",
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
    {
      name: "Lorinda Hahn",
      daysWorking: {
        sunday: false,
        monday: true,
        tuesday: true,
        wednesday: false,
        thursday: false,
        friday: true,
        saturday: true,
      },
      id: uuid(),
    },
    {
      name: "Tanner Jepsen",
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
    {
      name: "Eric Winkler",
      daysWorking: {
        sunday: true,
        monday: true,
        tuesday: true,
        wednesday: false,
        thursday: false,
        friday: true,
        saturday: false,
      },
      id: uuid(),
    },
    {
      name: "Mike Salazar",
      daysWorking: {
        sunday: true,
        monday: false,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: false,
        saturday: false,
      },
      id: uuid(),
    },
    {
      name: "Carl Jossart",
      daysWorking: {
        sunday: true,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: true,
        friday: true,
        saturday: true,
      },
      id: uuid(),
    },
    {
      name: "Loren Schuhart",
      daysWorking: {
        sunday: false,
        monday: false,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: false,
        saturday: true,
      },
      id: uuid(),
    },
    {
      name: "Ethan Hayes",
      daysWorking: {
        sunday: false,
        monday: true,
        tuesday: true,
        wednesday: false,
        thursday: true,
        friday: true,
        saturday: true,
      },
      id: uuid(),
    },
  ]);

  const [snackBarState, setSnackBarState] = useState({
    message: "Task Sucessful",
    open: false,
  });

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

  function handleFilterChange(e, day) {
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

  function filterRows() {
    // If the activeFilters array count is not equals to 0 that means that there are filters currently applied
    // so lets filter the rows that will be set to the edit schedule page
    if (activeFilters.length !== 0) {
      // Filter all rows
      const newRows = rows.filter((r) => {
        // test every active filter and if the return of the fuction is true then we want to keep
        // that row, which will be returned by the row.filter()
        return activeFilters.every((filter) => r.daysWorking[filter]);
      });

      return newRows;
    } else {
      return rows;
    }
  }

  return (
    <EditScheduleContext.Provider
      value={{ rows: filterRows(), activeFilters, snackBarState }}>
      <EditScheduleUpdateContext.Provider
        value={{
          handleSnackBarClose,
          handleSnackBar,
          handleFilterChange,
          dispatch,
        }}>
        {children}
      </EditScheduleUpdateContext.Provider>
    </EditScheduleContext.Provider>
  );
}
