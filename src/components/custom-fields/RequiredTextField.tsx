import React from "react";
import { FieldAttributes, useField } from "formik";
import TextField from "@material-ui/core/TextField";
import SpacingWrapper from "../_wrappers/SpacingWrapper";

const CustomTextField: React.FC<FieldAttributes<{}>> = ({
  placeholder,
  ...props
}: FieldAttributes<{}>) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

const RequiredTextField: React.FC<FieldAttributes<{}>> = props => {
  return (
    <SpacingWrapper>
      <CustomTextField {...props} />
    </SpacingWrapper>
  );
};

export default RequiredTextField;
