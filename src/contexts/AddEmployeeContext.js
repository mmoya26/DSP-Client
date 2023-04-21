import React, { createContext, useState } from "react";

export const AddEmployeeContext = createContext();

export function AddEmployeeContextProvider({ children }) {
  const [addUserModalOpen, setAddUserModalOpen] = useState(false);
  const [daysSelected, setDaysSelected] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);
  const [employeeName, setEmployeeName] = useState("");
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);

  const [daysWorkingSelected, setDaysWorkingSelected] = useState({
    sunday: "off",
    monday: "off",
    tuesday: "off",
    wednesday: "off",
    thursday: "off",
    friday: "off",
    saturday: "off",
  });

  const handleDaysSelected = (day, tag) => {
    let newVal = "";
    let newObj = { ...daysWorkingSelected };

    if (tag) {
      newVal = newObj[day.toLowerCase()] === tag ? "off" : tag;
    } else {
      if (newObj[day.toLowerCase()] === "off") {
        newVal = "on";
      } else {
        newVal = "off";
      }
    }

    newObj[day.toLowerCase()] = newVal;

    setDaysWorkingSelected(newObj);
  };

  const openAddUserModal = () => {
    setAddUserModalOpen(true);
  };

  const closeUserModal = () => {
    setAddUserModalOpen(false);
    setDaysSelected([]);
    setEmployeeName("");
  };

  const handleEmployeeName = (e) => {
    setEmployeeName(e.target.value);
  };

  return (
    <AddEmployeeContext.Provider
      value={{
        openAddUserModal,
        closeUserModal,
        addUserModalOpen,
        handleDaysSelected,
        daysSelected,
        employeeName,
        handleEmployeeName,
        showAdvancedOptions,
        setShowAdvancedOptions,
        daysWorkingSelected,
      }}>
      {children}
    </AddEmployeeContext.Provider>
  );
}
