import { ThemeProvider, createTheme } from "@mui/material/styles";

import Layout from "./Layout";

import { CssBaseline } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#EAEEF5", // text/primary
      light: "#EAEEF5", // paletone/blue 2  border-primary
      dark: "#11184F",
      contrastText: "#EAEEF5", // text/primary-active
      // grey: "#ffffffb3", // text/primary-active
      contrastColor: "#3E8DDD",
      green: "#32A05F",
    },
    secondary: {
      main: "#06662e", // surface/surface-brand
      // dark: "#294E95", // deeptone/deepBlue  primary button
    },
    success:{
      main: "#06662e",
    },
    warning:{
      main: "#b60523",
    },
    info:{
      main: "#c9430f",
    },
    grey: {
      100: "#f6f6f6",
      300: "#DDDDDD", 
      500: "#a5a5a5", // surface/secondary-default
    },
    action: {
      hover: "#EBF3FB", // card/primary-hover
    },
    background: {
      paper: "#FFFFFF",
      default: "#FFFFFF", // surafce/primary
      contentBG: "#242D33",
    },

    // primary:red
  },
  shape: {
    borderRadius: "8px",
  },
  typography: {
    fontFamily: ["poppins", "sans-serif", "Lato"].join(","),
    body1: {
      fontSize: "0.875rem",
      fontFamily: "Lato",
      fontWeight: 700,
    },
    body2: {
      fontSize: "0.875rem",
      fontFamily: "Lato",
      fontWeight: 400,
    },
    body3: {
      fontSize: "0.75rem",
      fontFamily: "Lato",
      fontWeight: 400,
    },
    h6: {
      fontSize: "1rem",
      fontFamily: "Lato",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.5rem",
      fontFamily: "Lato",
      fontWeight: 400,
      textTransform: "uppercase",
      letterSpacing: "2px",
    },
  },
  overrides: {
    MuiTabs: {
      indicator: {
        // color: "#5198E0",
        border: "1px solid #5198E0",
        // backgroundColor: "#32A05F",
      },
    },
    // MuiGrid:{
    //   root:{
    //     backgroundColor:"red"
    //   }
    // }
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;
