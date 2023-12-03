import Paper from "@mui/material/Paper";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Headers() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Orders
    </Link>,
    <Link
      underline="always"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Orders 32457ABC
    </Link>,
  ];
  return (
    <Paper elevation={5} sx={{ borderRadius: "0px", padding: "20px 20px 0px 40px" }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"20px 10px 10px 0px"}}>
        <Typography variant="h5" component="h2">
          Orders 32457ABC
        </Typography>
        <Button sx={{marginLeft:"auto", marginRight:"10px"}} variant="outlined" color="secondary">
          Outlined
        </Button>
        <Button variant="contained" color="secondary">
          Outlined
        </Button>
      </Box>
    </Paper>
  );
}

export default Headers;
