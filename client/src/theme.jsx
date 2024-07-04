// src/theme.js

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      sedundary: "rgb(255, 230, 0)",
      lightest: "rgba(255, 230, 0, 0.7)",
      bgText: "#BDBDBD",
      textContrast: "#000000",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;
