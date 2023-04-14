import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { AddEmployeeContext } from "@/contexts/AddEmployeeContext";
import { EditScheduleUpdateContext } from "@/contexts/EditScheduleContext";

export default function AddUserDialog() {
  const { addUserModalOpen, closeUserModal } = useContext(AddEmployeeContext);
  const { handleSnackBar, dispatch } = useContext(EditScheduleUpdateContext);

  return (
    <Dialog
      open={addUserModalOpen}
      onClose={closeUserModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">
        {"Use Google's location service?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeUserModal}>Disagree</Button>
        <Button
          onClick={() => {
            dispatch({ type: "ADD" });
            handleSnackBar("Employee successfully added");
            closeUserModal();
          }}
          autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
