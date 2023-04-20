import React, { createContext, useState } from "react";

export const AddEmployeeContext = createContext();

export function AddEmployeeContextProvider({ children }) {
  const [addUserModalOpen, setAddUserModalOpen] = useState(false);
  const [daysSelected, setDaysSelected] = useState([]);
  const [employeeName, setEmployeeName] = useState("");

  const handleDaysSelected = (day) => {
    if (daysSelected.includes(day)) {
      const newDays = daysSelected.filter((d) => d !== day);
      setDaysSelected(newDays);
    } else {
      setDaysSelected((prevDays) => [...prevDays, day]);
    }
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
      }}>
      {children}
    </AddEmployeeContext.Provider>
  );
}
