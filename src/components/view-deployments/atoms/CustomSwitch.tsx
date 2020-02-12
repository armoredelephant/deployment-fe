import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

const CustomSwitch = withStyles({
  switchBase: {
    color: "#eeeeee",
    "&$checked": {
      color: "#b2dfdb"
    },
    "&$checked + $track": {
      backgroundColor: "#b2dfdb"
    },
    "&&:hover": {
      backgroundColor: "rgba(223, 223, 223, 0.08)"
    }
  },
  checked: {
    "&&:hover": {
      backgroundColor: "rgba(178, 223, 219, .08)"
    }
  },
  track: {
    color: "#e0e0e0",
    backgroundColor: "#e0e0e0"
  }
})(Switch);

export default CustomSwitch;
