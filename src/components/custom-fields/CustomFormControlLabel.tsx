import React from "react";
import FormControlLabel, {
  FormControlLabelProps
} from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";

const CustomLabel = withStyles({
  root: {
    color: "rgb(223, 223, 223)"
  }
})((props: FormControlLabelProps) => <FormControlLabel {...props} />);

const CustomFormControlLabel: React.FC<FormControlLabelProps> = props => {
  return <CustomLabel {...props} />;
};

export default CustomFormControlLabel;
