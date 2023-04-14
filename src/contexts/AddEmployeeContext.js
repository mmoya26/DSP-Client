import React, { createContext, useState } from "react";

export const AddEmployeeContext = createContext();

export function AddEmployeeContextProvider({ children }) {
  const [addUserModalOpen, setAddUserModalOpen] = useState(false);

  const openAddUserModal = () => {
    setAddUserModalOpen(true);
  };

  const closeUserModal = () => {
    setAddUserModalOpen(false);
  };

  return (
    <AddEmployeeContext.Provider
      value={{
        openAddUserModal,
        closeUserModal,
        addUserModalOpen,
      }}>
      {children}
    </AddEmployeeContext.Provider>
  );
}
