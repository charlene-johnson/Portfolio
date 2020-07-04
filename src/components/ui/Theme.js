import { createMuiTheme } from "@material-ui/core/styles";

const pinkRed = "#E7717D";
const grey = "#C2CAD0";
const lightBrown = "#C2B9B0";
const darkBrown = "#7E685A";
const lightGreen = "#AFD275";

export default createMuiTheme({
  palette: {
    common: {
      pink: `${pinkRed}`,
      grey: `${grey}`,
      ltBrown: `${lightBrown}`,
      drkBrown: `${darkBrown}`,
      green: `${lightGreen}`,
    },
    primary: {
      main: `${lightGreen}`,
    },
    secondary: {
      main: `${lightBrown}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Montserrat",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: `${darkBrown}`,
    },
    h1: {
      fontFamily: "Montserrat",
      fontSize: "1.5rem",
      color: `${darkBrown}`,
      marginLeft: '1rem'
    },
  },
});
