import React from "react";
import FlexContainer from "../../_containers/FlexContainer";
import { DeploymentOptionsProps } from "../deploymentInterfaces";
import UserCountSelect from "../atoms/UserCountSelect";
import RemoteCheckbox from "../atoms/RemoteCheckbox";
import PrimaryMachineRadio from "../atoms/PrimaryMachineRadio";
import OptionsContainer from "../../_containers/OptionsContainers";

const CreateDeploymentOptions: React.FC<DeploymentOptionsProps> = ({
  optionsDispatch,
  optionsState
}: DeploymentOptionsProps) => {
  return (
    <FlexContainer flow="row">
      <OptionsContainer>
        <UserCountSelect
          optionsDispatch={optionsDispatch}
          optionsState={optionsState}
        />
        <RemoteCheckbox
          optionsDispatch={optionsDispatch}
          optionsState={optionsState}
        />
      </OptionsContainer>
      <OptionsContainer>
        <PrimaryMachineRadio
          optionsDispatch={optionsDispatch}
          optionsState={optionsState}
        />
      </OptionsContainer>
    </FlexContainer>
  );
};

export default CreateDeploymentOptions;
