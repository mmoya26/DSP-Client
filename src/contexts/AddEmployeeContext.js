import React, { createContext, useState } from "react";

export const AddEmployeeContext = createContext();

export function AddEmployeeContextProvider({ children }) {
  const [addUserModalOpen, setAddUserModalOpen] = useState(false);
  const [employeeName, setEmployeeName] = useState("");
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const [daysWorking, setDaysWorking] = useState({
    sunday: "off",
    monday: "off",
    tuesday: "off",
    wednesday: "off",
    thursday: "off",
    friday: "off",
    saturday: "off",
  });
  const [editingSchedule, setEditingSchedule] = useState(false);
  const [employeeId, setEmployeeId] = useState("");

  const handleDaysSelected = (day, tag) => {
    let newVal = "";
    let newObj = { ...daysWorking };

    if (tag) {
      newVal =
        newObj[day.toLowerCase()] === tag.toLowerCase()
          ? "off"
          : tag.toLowerCase();
    } else {
      if (newObj[day.toLowerCase()] === "off") {
        newVal = "on";
      } else {
        newVal = "off";
      }
    }

    newObj[day.toLowerCase()] = newVal;

    setDaysWorking(newObj);
  };

  const openAddUserModal = () => {
    setAddUserModalOpen(true);
  };

  const closeUserModal = () => {
    // Reset all of the state of dialog when closing it
    setAddUserModalOpen(false);
    setDaysWorking({
      sunday: "off",
      monday: "off",
      tuesday: "off",
      wednesday: "off",
      thursday: "off",
      friday: "off",
      saturday: "off",
    });
    setEmployeeName("");
    setShowAdvancedOptions(false);
    setEditingSchedule(false);
    setEmployeeId("");
  };

  const handleEmployeeName = (e) => {
    setEmployeeName(e.target.value);
  };

  const setEditingEmployeeShift = ({ name, id, daysWorking }) => {
    setAddUserModalOpen(true);
    setEmployeeName(name);
    setDaysWorking(daysWorking);
    setEditingSchedule(true);
    setEmployeeId(id);
  };

  return (
    <AddEmployeeContext.Provider
      value={{
        openAddUserModal,
        closeUserModal,
        addUserModalOpen,
        handleDaysSelected,
        employeeName,
        editingSchedule,
        employeeId,
        handleEmployeeName,
        showAdvancedOptions,
        setShowAdvancedOptions,
        daysWorking,
        setEditingEmployeeShift,
      }}>
      {children}
    </AddEmployeeContext.Provider>
  );
}
