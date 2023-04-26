import React, { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { AddEmployeeContext } from "@/contexts/AddEmployeeContext";
import { EditScheduleUpdateContext } from "@/contexts/EditScheduleContext";
import { Inter } from "next/font/google";
import uuid from "react-uuid";

const inter = Inter({ subsets: ["latin"] });

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const tags = ["D", "OC", "OPS"];

export default function AddUserDialog() {
  const {
    addUserModalOpen,
    closeUserModal,
    handleDaysSelected,
    employeeName,
    employeeId,
    editingSchedule,
    handleEmployeeName,
    showAdvancedOptions,
    setShowAdvancedOptions,
    daysWorking,
  } = useContext(AddEmployeeContext);
  const { handleSnackBar, dispatch } = useContext(EditScheduleUpdateContext);

  return (
    <Dialog
      open={addUserModalOpen}
      onClose={closeUserModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth="md"
      PaperProps={{
        style: {
          backgroundColor: "#f9fafb",
          height: "472px",
        },
      }}>
      <DialogTitle
        id="alert-dialog-title"
        className={`${inter.className} text-slate-600 text-3xl font-bold`}>
        {"Add Employee"}
      </DialogTitle>
      <DialogContent>
        <div className="relative mb-5">
          <label
            className={`text-slate-600 text-base mb-2 block ${inter.className}`}
            htmlFor="dialog-employe-name">
            Employee Name
          </label>
          <div className="rounded-md shadow-sm">
            <input
              type="text"
              name="search"
              id="dialog-employe-name"
              className="h-10 block w-full rounded-md border border-gray-200 pl-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              spellCheck="false"
              value={employeeName}
              onChange={handleEmployeeName}
            />
          </div>
        </div>

        <div>
          {/* Header 2nd section */}
          <div className="flex justify-between">
            <p className="text-slate-600 text-base">Select days working</p>

            <div className="flex gap-2 mb-4">
              <input
                type="checkbox"
                className="checkbox dialog-advanced-options-checkbox"
                id="dialog-advanced-options-checkbox"
                onChange={() => setShowAdvancedOptions(!showAdvancedOptions)}
              />
              <label
                className={`text-slate-600 text-base mb-2 block ${inter.className}`}
                htmlFor="dialog-advanced-options-checkbox">
                Show advanced options
              </label>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-center">
            {daysOfTheWeek.map((d) => {
              const daySelected =
                daysWorking[d.toLowerCase()] !== "off" ? true : false;

              return (
                <div
                  className="flex flex-col justify-start items-start"
                  key={uuid()}>
                  <button
                    key={uuid()}
                    className={`border rounded-[3px] w-[170px] h-[48px] border-gray-200 ${
                      daySelected
                        ? "bg-slate-600 text-gray-50 font-semibold"
                        : "bg-white text-slate-600 font-normal"
                    }`}
                    onClick={() => handleDaysSelected(d)}>
                    {d}
                  </button>

                  {showAdvancedOptions && (
                    <div className="flex gap-2 justify-center w-full">
                      {tags.map((t) => {
                        const tagSelected =
                          t.toLowerCase() ===
                          daysWorking[d.toLowerCase()].toLowerCase()
                            ? true
                            : false;
                        return (
                          <button
                            key={uuid()}
                            className={`mt-1 border rounded-[3px] flex-grow border-gray-200 ${
                              tagSelected
                                ? "bg-slate-600 text-gray-50 font-semibold"
                                : "bg-white text-slate-600 font-normal"
                            }`}
                            onClick={() => handleDaysSelected(d, t)}>
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </DialogContent>
      <DialogActions className="flex justify-start pl-6 py-4">
        <button
          className="font-base bg-lowblue text-white px-7 py-2 rounded-[3px]"
          onClick={() => {
            dispatch({
              type: editingSchedule ? "EDIT" : "ADD",
              employee: { name: employeeName, daysWorking, employeeId },
            });
            handleSnackBar(
              editingSchedule
                ? "Employee shift successfully edited"
                : "Employee successfully added"
            );
            closeUserModal();
          }}>
          {editingSchedule ? "Done" : "Add"}
        </button>
        <button
          className="text-slate-600 font-base px-7 py-2"
          onClick={closeUserModal}>
          Cancel
        </button>
      </DialogActions>
    </Dialog>
  );
}
