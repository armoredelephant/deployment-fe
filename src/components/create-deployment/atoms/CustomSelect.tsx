import React from "react";
import { FieldAttributes, useField } from "formik";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import SpacingWrapper from "../../_wrappers/SpacingWrapper";

/**
 * Custom field for the product select withint the deployment form.
 */

const CustomSelect: React.FC<FieldAttributes<{
  options: string[];
  title: string;
}>> = ({
  options,
  title,
  ...props
}: FieldAttributes<{ options: string[]; title: string }>) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? "Invalid option." : "";

  return (
    <SpacingWrapper>
      <FormControl>
        <InputLabel id="option">{title}</InputLabel>
        <Select
          labelId="option"
          {...field}
          MenuProps={{
            getContentAnchorEl: null,
            anchorOrigin: { vertical: "bottom", horizontal: "left" }
          }}
        >
          {options.map((option: string, index: number) => {
            return (
              <MenuItem key={`option-${index}`} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText error={errorText === "Invalid option."}>
          {errorText}
        </FormHelperText>
      </FormControl>
    </SpacingWrapper>
  );
};

export default CustomSelect;
