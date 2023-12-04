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

import apple from "../assets/apple.png";
import avocado from "../assets/Avocado.jpg";
import StatusChips from "./StatusChips";
import MissingDialog from "./MissingDialog";

import { fetchData, postData } from "../store/dataSlice";

function createData(img, name, calories, fat, carbs, protein) {
  return { img, name, calories, fat, carbs, protein };
}

const rows = [
  createData(apple, "Apple", "new", "$60.67 / 6+1LB", "0 x 6 *1LB", "0"),
  createData(
    avocado,
    "avocado",
    "newFirst",
    "$60.67 / 6+1LB",
    "15 x 6 *1LB",
    "$9000.88"
  ),
  createData(
    avocado,
    "avocado",
    "newFirst",
    "$60.67 / 6+1LB",
    "15 x 6 *1LB",
    "$9000.88"
  ),
  createData(apple, "Apple", "new", "$60.67 / 6+1LB", "0 x 6 *1LB", "0"),
  createData(
    avocado,
    "avocado",
    "newFirst",
    "$60.67 / 6+1LB",
    "13 x 6 *1LB",
    "$9000.88"
  ),
];

export default function Tables() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const data = useSelector((state) => state.data);

  React.useEffect(() => {
    // Fetch data when the component mounts
    // dispatch(fetchData());
    dispatch(
      postData({
        endPoint: 1,

        body: {
          firstName: "Fred",
          lastName: "Flintstone",
        },
      })
    );
  }, [dispatch]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          // minWidth: 650,
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
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <img src={row.img} alt="apple" width="40px" height="40px" />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.protein}</TableCell>
                <TableCell>
                  <StatusChips />
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
                      sx={{ color: theme.palette.grey[500], cursor: "pointer" }}
                    />
                    <ClearIcon
                      onClick={handleClickOpen}
                      sx={{ color: theme.palette.grey[500], cursor: "pointer" }}
                    />
                    <Typography sx={{ color: theme.palette.grey[500] }}>
                      {" "}
                      Edit
                    </Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {open && <MissingDialog open={open} handleClose={handleClose} />}
    </Box>
  );
}
