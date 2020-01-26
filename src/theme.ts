import { createMuiTheme } from "@material-ui/core/styles";

const colors = {
  primary: "rgb(223,223,223)",
  red: "rgb(232, 89, 67)",
  blue: "rgb(131, 208, 242)"
};

export const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      root: {
        color: colors.primary
      },
      underline: {
        "&&&&:before": {
          borderBottom: "1px solid rgba(223, 223,223, 0.48)"
        },
        "&&&&:hover:before": {
          borderBottom: `1px solid ${colors.primary}`
        },
        "&&&&:after": {
          borderBottom: `1px solid ${colors.primary}`
        }
      }
    },
    MuiInputLabel: {
      root: {
        color: colors.primary,
        "&$focused": {
          color: colors.primary
        }
      }
    },
    MuiRadio: {
      root: {
        color: colors.primary,
        "&$checked": {
          color: colors.primary
        }
      }
    },
    MuiFormLabel: {
      root: {
        color: colors.primary,
        "&$focused": {
          color: colors.primary
        }
      }
    },
    MuiSelect: {
      icon: {
        color: colors.primary
      }
    },
    MuiFormControl: {
      root: {
        minWidth: "9.375rem"
      }
    },
    MuiButton: {
      colorInherit: {
        color: colors.primary
      }
    }
  }
});
