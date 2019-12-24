import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";

interface FormLabelProps {
  control: React.ReactElement;
  label: React.ReactNode;
}

const CustomLabel = withStyles({
  root: {
    color: "rgb(223, 223, 223)"
  }
})((props: FormLabelProps) => <FormControlLabel {...props} />);

const CustomFormControlLabel: React.FC<FormLabelProps> = props => {
  return <CustomLabel {...props} />;
};

export default CustomFormControlLabel;
