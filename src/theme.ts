import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      root: {
        color: "rgb(223, 223, 223)"
      },
      underline: {
        "&&&&:before": {
          borderBottom: "1px solid rgba(223, 223,223, 0.48)"
        },
        "&&&&:hover:before": {
          borderBottom: "1px solid rgb(223, 223, 223)"
        },
        "&&&&:after": {
          borderBottom: "2px solid rgb(223, 223, 223)"
        }
      }
    },
    MuiInputLabel: {
      root: {
        color: "rgb(223,223,223)",
        "&$focused": {
          color: "rgb(223,223,223)"
        }
      }
    }
  }
});
