import React from "react";
import { DeploymentOptionsProps } from "../deploymentInterfaces";
import CustomFormControlLabel from "../../custom-fields/CustomFormControlLabel";
import CustomCheckBox from "../../custom-fields/CustomCheckBox";

const RemoteCheckbox: React.FC<DeploymentOptionsProps> = ({
  optionsDispatch,
  optionsState
}: DeploymentOptionsProps) => {
  const handleRemoteOption = (): void => {
    optionsDispatch({ type: "SET_REMOTE_SETUP" });
  };

  return (
    <CustomFormControlLabel
      control={
        <CustomCheckBox
          checked={optionsState.remoteSetup}
          onChange={handleRemoteOption}
        />
      }
      label="Remote setups"
    />
  );
};

export default RemoteCheckbox;
