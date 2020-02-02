import React from "react";
import { DeploymentCreateOptionsProps } from "../deploymentCreateInterfaces";
import CustomFormControlLabel from "../../custom-fields/CustomFormControlLabel";
import CustomCheckBox from "../../custom-fields/CustomCheckBox";

/**
 * Checkbox component for selecting whether the deployments will be remote setups
 * Used within CreateDeploymentOptions
 */

const RemoteCheckbox: React.FC<DeploymentCreateOptionsProps> = ({
  optionsDispatch,
  optionsState
}: DeploymentCreateOptionsProps) => {
  const handleRemoteOption = (): void => {
    optionsDispatch({ type: "SET_REMOTE_SETUP" });
  };

  return (
    <CustomFormControlLabel
      control={
        <CustomCheckBox
          checked={optionsState.remoteSetup}
          onChange={handleRemoteOption}
          value="remote-setup"
          inputProps={{ "aria-label": "Remote Setup" }}
        />
      }
      label="Remote setups"
    />
  );
};

export default RemoteCheckbox;
