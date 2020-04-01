import React, { useState, useEffect } from "react";
import { FieldAttributes, useField } from "formik";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import SpacingWrapper from "../../_wrappers/SpacingWrapper";
import { modelSelectSwitch } from "../../_helper-functions/modelSelectSwitch";

/**
 * Custom field for the product select withint the deployment form.
 */

const useStyles = makeStyles({
  root: {
    minWidth: 180
  }
});

const ModelSelect: React.FC<FieldAttributes<{
  options: string;
  title: string;
}>> = ({
  options,
  title,
  ...props
}: FieldAttributes<{ options: string; title: string }>) => {
  const [field, meta] = useField<{}>(props);
  const [modelOptions, setModelOptions] = useState();
  const errorText = meta.error && meta.touched ? "Invalid option." : "";
  const { root } = useStyles();

  useEffect(() => {
    const modelList = modelSelectSwitch(options);
    setModelOptions(modelList);
  }, [options]);
  if (!modelOptions) return <> </>;
  return (
    <SpacingWrapper>
      <FormControl>
        <InputLabel id={`${title}-option`}>{title}</InputLabel>
        <Select
          className={root}
          labelId="option"
          {...field}
          MenuProps={{
            getContentAnchorEl: null,
            anchorOrigin: { vertical: "bottom", horizontal: "left" }
          }}
        >
          {modelOptions.map((option: string, index: number) => {
            return (
              <MenuItem key={`${option}-${index}`} value={option}>
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

export default ModelSelect;
