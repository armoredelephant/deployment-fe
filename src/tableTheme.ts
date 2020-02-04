import { createMuiTheme } from "@material-ui/core/styles";

const colors = {
  primary: "rgb(223,223,223)",
  red: "rgb(232, 89, 67)",
  blue: "rgb(131, 208, 242)"
};

export const darkTheme = createMuiTheme({
  overrides: {
    MuiFormControlLabel: {
      root: {
        color: colors.primary
      }
    }
  },
  palette: {
    type: "dark"
  }
});
