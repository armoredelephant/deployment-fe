import React from "react";
import FlexContainer from "../../_containers/FlexContainer";
import { DeploymentCreateOptionsProps } from "../deploymentCreateInterfaces";
import UserCountSelect from "../atoms/UserCountSelect";
import RemoteCheckbox from "../atoms/RemoteCheckbox";
import PrimaryMachineRadio from "../atoms/PrimaryMachineRadio";
import OptionsContainer from "../../_containers/OptionsContainers";

/**
 * This component contains the components that make up the options for the form
 * Located at the top of the CreateDeploymentPage.
 */

const CreateDeploymentOptions: React.FC<DeploymentCreateOptionsProps> = ({
  optionsDispatch,
  optionsState
}: DeploymentCreateOptionsProps) => {
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
