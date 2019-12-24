import React from "react";
import { withStyles } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

/**
 * Custom Styled Checkbox from MaterialUI
 * with props passed down
 */

interface BoxProps {
  checked: boolean | undefined;
  onChange?:
    | ((event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void)
    | undefined;
}

const CheckBox = withStyles({
  root: {
    color: "rgb(223, 223, 223)",
    "&$checked": {
      color: "rgb(223, 223, 223)"
    }
  },
  checked: {}
})((props: BoxProps) => <Checkbox color="default" {...props} />);

const CustomCheckBox: React.FC<BoxProps> = props => {
  return <CheckBox {...props} />;
};

export default CustomCheckBox;