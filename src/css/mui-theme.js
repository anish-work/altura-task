/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Also see /css/px-bootstrap.scss
const PXPrimary = "#D73CBE";
const PXSecondary = "#7b67e0";
const PXSecondaryDark = "#3b316c";
const PXBodyBG = "#f5f5f5";

const theme = createTheme({
  components: {
    MuiDivider:{
      root:{
        backgroundColor:"#D3D9DB",
        height:"1px",
        '&.dense':{
          height:"2px",
        }
      },
    },
    MuiMenu: {
      paper: {
        "&.small": {
          maxWidth: "270px"
        }
      }
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1440,
      xl: 1920
    }
  },
  palette: {
    primary: {
      light: '#757ce8',
      main: PXPrimary,
      dark: PXPrimary,
      contrastText: '#fff',
    },
    secondary: {
      light: PXSecondary,
      main: PXSecondary,
      dark: PXSecondaryDark,
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: '  "Montserrat", "Open Sans", "Helvetica", "Arial", sans-serif',
    lineHeight: "normal",
    h1: {
      fontSize: "30px",
      fontWeight: "600",
      lineHeight: "normal"
    },
    h2: {
      fontSize: "20px",
      fontWeight: "600",
      lineHeight: "normal"
    },
    h3: {
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: "normal"
    },
    h4: {
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "normal"
    },
    h5: {
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "normal"
    },
    h6: {
      fontSize: "13px",
      fontWeight: "700",
    },
    body1: {
      fontSize: "15px",
      fontWeight: "500",
      lineHeight: "normal"
    },
    body2: {
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "normal"
    },
    caption: {
      fontSize: "11px",
      fontWeight: "700",
      lineHeight: "normal"
    },
    subtitle1: {
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "normal"
    },
    subtitle2: {
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "normal"
    }
  }
});

export default props => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  );
};
