import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ClearIcon from "@mui/icons-material/Clear";
import { useTheme } from "@emotion/react";

// eslint-disable-next-line react/prop-types
export default function MissingDialog({ open, handleClose }) {
    const theme = useTheme()
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}} id="alert-dialog-title">
          {"Missing Product"}
          <ClearIcon sx={{cursor:"pointer", color:theme.palette.grey[500]}} onClick={handleClose} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`is ${'Let Google help apps determine location.'} urgent ?`}
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" color="info"  onClick={handleClose}>No</Button>
          <Button variant="text" color="warning" onClick={handleClose} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
