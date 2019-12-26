import React from "react";
import { CreateDeploymentStateProps } from "../deploymentInterfaces";
import FlexContainer from "../../_containers/FlexContainer";

const CreateDeploymentUserForms: React.FC<CreateDeploymentStateProps> = ({
  optionsProps,
  formsProps
}: CreateDeploymentStateProps) => {
  return (
    <FlexContainer flow="row">
      <div></div>
    </FlexContainer>
  );
};

export default CreateDeploymentUserForms;
