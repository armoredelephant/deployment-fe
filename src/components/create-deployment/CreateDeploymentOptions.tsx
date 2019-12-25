import React from "react";
import FlexContainer from "../_containers/FlexContainer";
import { DeploymentOptionsProps } from "./deploymentInterfaces";
import UserCountSelect from "./option-fields/UserCountSelect";
import RemoteCheckbox from "./option-fields/RemoteCheckbox";

const CreateDeploymentOptions: React.FC<DeploymentOptionsProps> = ({
  optionsDispatch,
  optionsState
}: DeploymentOptionsProps) => {
  return (
    <FlexContainer>
      <UserCountSelect
        optionsDispatch={optionsDispatch}
        optionsState={optionsState}
      />
      <RemoteCheckbox
        optionsDispatch={optionsDispatch}
        optionsState={optionsState}
      />
    </FlexContainer>
  );
};

export default CreateDeploymentOptions;
