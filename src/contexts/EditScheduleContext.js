import React, { createContext, useState } from "react";
import uuid from "react-uuid";

export const EditScheduleContext = createContext();
export const EditScheduleUpdateContext = createContext();

export function EditScheduleContextProvider({ children }) {
  const [rows, setRows] = useState([
    {
      firstName: "Miguel",
      lastName: "Moya",
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
      firstName: "Lorinda",
      lastName: "Hahn",
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
      firstName: "Tanner",
      lastName: "Jepsen",
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
      firstName: "Eric",
      lastName: "Winkler",
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
      firstName: "Mike Salazar",
      lastName: "Hahn",
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
      firstName: "Carly",
      lastName: "Jossart",
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
      firstName: "Loren",
      lastName: "Schuhart",
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
      firstName: "Ethan",
      lastName: "Hayes",
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

  function removeEmployee(id) {
    console.log(id);
    const newRows = rows.filter((r) => r.id !== id);
    setRows(newRows);
  }

  return (
    <EditScheduleContext.Provider value={{ rows: rows }}>
      <EditScheduleUpdateContext.Provider value={removeEmployee}>
        {children}
      </EditScheduleUpdateContext.Provider>
    </EditScheduleContext.Provider>
  );
}
