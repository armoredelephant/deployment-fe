import React from "react";
import CustomFormControlLabel from "../../custom-fields/CustomFormControlLabel";
import { FieldAttributes, useField } from "formik";
import MuiCheckbox from "@material-ui/core/Checkbox";

/**
 * Checkbox component for selecting whether the deployments will be remote setups
 * Used within CreateDeploymentOptions
 */

const RemoteCheckbox: React.FC<FieldAttributes<{
  title: string;
  remoteSetup: boolean;
}>> = ({
  title,
  remoteSetup,
  ...props
}: FieldAttributes<{ title: string; remoteSetup: boolean }>) => {
  const [field] = useField<{}>(props);
  return (
    <CustomFormControlLabel
      control={<MuiCheckbox color="default" checked={remoteSetup} {...field} />}
      label="Remote setups"
    />
  );
};

export default RemoteCheckbox;
