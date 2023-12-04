import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useTheme } from "@emotion/react";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import Typography from "@mui/material/Typography";

import { useDispatch, useSelector } from "react-redux";
import { fetchData, postData } from "../store/dataSlice";

import apple from "../assets/apple.png";
import avocado from "../assets/Avocado.jpg";
import StatusChips from "./StatusChips";
import MissingDialog from "./MissingDialog";
import ProductDetailDialog from "./ProductDetailDialog";

const images = { apple, avocado };
const colors = { success: "#06662e", warning: "#b60523", info: "#c9430f" };

export default function Tables() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openDetail, setOpenDetail] = React.useState(false);

  const [selectedRow, setSelectedRow] = React.useState({});
  const data = useSelector((state) => state.data);

  React.useEffect(() => {
    dispatch(fetchData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickOpen = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  const handleClose = (response) => {
    if (response === true) {
      dispatch(
        postData({
          endPoint: selectedRow?.id,

          body: {
            ...selectedRow,
            status: selectedRow?.status === "warning" ? "" : "warning",
          },
        })
      );
      setOpen(false);
      setSelectedRow({});
    } else if (response === false) {
      dispatch(
        postData({
          endPoint: selectedRow?.id,

          body: {
            ...selectedRow,
            status: selectedRow?.status === "info" ? "" : "info",
          },
        })
      );
      setOpen(false);
      setSelectedRow({});
    } else {
      setOpen(false);
      setSelectedRow({});
    }
  };

  const handleClickOpenDialog = (row) => {
    setSelectedRow(row);
    setOpenDetail(true);
  };

  const handleCloseDialog = (response) => {
    if (response === true) {
      dispatch(
        postData({
          endPoint: selectedRow?.id,

          body: {
            ...selectedRow,
            status: selectedRow?.status === "warning" ? "" : "warning",
          },
        })
      );
      setOpen(false);
      setSelectedRow({});
    } else if (response === false) {
      dispatch(
        postData({
          endPoint: selectedRow?.id,

          body: {
            ...selectedRow,
            status: selectedRow?.status === "info" ? "" : "info",
          },
        })
      );
      setOpen(false);
      setSelectedRow({});
    } else {
      setOpenDetail(false);
      setSelectedRow({});
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          border: `1px solid ${theme.palette.grey[300]}`,
          width: { xs: "100%", md: "80%" },
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell width={"20px"}></TableCell>
              <TableCell width={"150px"}>Product Name</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Status</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.status === "succeeded" &&
              data?.items.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <img
                      src={images[row.image]}
                      alt="apple"
                      width="40px"
                      height="40px"
                    />
                  </TableCell>
                  <TableCell>{row.productName}</TableCell>
                  <TableCell>{row.brand}</TableCell>
                  <TableCell>{`${row.price} / 6+1LB`}</TableCell>
                  <TableCell>{`${row.quantity} x 6*1LB`}</TableCell>
                  <TableCell>{row.price * row.quantity}</TableCell>
                  <TableCell>
                    {row?.status && <StatusChips status={row?.status} />}
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <DoneIcon
                        sx={{
                          color:
                            row.status === "success"
                              ? colors[row.status]
                              : theme.palette.grey[500],
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          dispatch(
                            postData({
                              endPoint: row?.id,

                              body: {
                                ...row,
                                status:
                                  row?.status === "success" ? "" : "success",
                              },
                            })
                          )
                        }
                      />

                      <ClearIcon
                        onClick={() => handleClickOpen(row)}
                        sx={{
                          color:
                            row.status === "info" || row.status === "warning"
                              ? colors[row.status]
                              : theme.palette.grey[500],
                          cursor: "pointer",
                        }}
                      />
                      <Typography onClick={() => handleClickOpenDialog(row)} sx={{ color: theme.palette.grey[500], cursor: "pointer", }}>
                        Edit
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            {data?.status === "loading" && (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Loading...</TableCell>
              </TableRow>
            )}
            {data?.status === "failed" && (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Error loading data</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {open && (
        <MissingDialog
          open={open}
          handleClose={handleClose}
          selectedRow={selectedRow}
        />
      )}
      {openDetail && (
        <ProductDetailDialog
          open={openDetail}
          handleClose={handleCloseDialog}
          selectedRow={selectedRow}
        />
      )}
    </Box>
  );
}
