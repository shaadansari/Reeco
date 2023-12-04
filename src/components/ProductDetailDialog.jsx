/* eslint-disable react/prop-types */
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ClearIcon from "@mui/icons-material/Clear";
import { useTheme } from "@emotion/react";
import { Box, TextField, Typography } from "@mui/material";

import apple from "../assets/apple.png";
import avocado from "../assets/Avocado.jpg";

const images = { apple, avocado };

// eslint-disable-next-line react/prop-types
export default function ProductDetailDialog({
  open,
  handleClose,
  selectedRow,
}) {
  const theme = useTheme();

  const Input1 = 9992;
  const Input2 = 9856;

  return (
    <React.Fragment>
      <Dialog
        open={open}
        fullWidth={true}
        maxWidth="sm"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          id="alert-dialog-title"
        >
          {selectedRow?.productName}
          <ClearIcon
            sx={{ cursor: "pointer", color: theme.palette.grey[500] }}
            onClick={handleClose}
          />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {selectedRow?.brand}
          </DialogContentText>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Box>
              <img
                src={images[selectedRow?.image]}
                alt="apple"
                width="100px"
                height="100px"
              />
            </Box>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                justifyContent: "center",
                rowGap: "1rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "80%",
                  justifyContent: "space-between",
                  marginLeft: "1rem",
                  alignItems: "center",
                }}
              >
                <Typography>Price ($)</Typography>
                <TextField
                  defaultValue={selectedRow?.price}
                  size="small"
                  sx={{ width: "6rem", marginRight: "-9.55rem" }}
                />
                <Typography>/ 6 *1LB</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  width: "80%",
                  justifyContent: "space-between",
                  marginLeft: "1rem",
                  alignItems: "center",
                }}
              >
                <Typography>Quantity</Typography>
                <TextField
                  defaultValue={Input2}
                  size="small"
                  sx={{ width: "6rem", marginRight: "-9.55rem" }}
                />
                <Typography> x 6 *1LB</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  width: "34%",
                  justifyContent: "space-between",
                  marginLeft: "1rem",
                  alignItems: "center",
                }}
              >
                <Typography>Total</Typography>
                <Typography
                  value={9999.99}
                  size="small"
                  sx={{ width: "6rem", marginRight: "-10rem" }}
                >
                  $ {Input1 * Input2}
                </Typography>
              </Box>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => handleClose(false)}
          >
            cancel
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleClose(true)}
            autoFocus
          >
            send
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
