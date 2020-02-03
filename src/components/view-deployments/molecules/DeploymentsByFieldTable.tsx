import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { DeploymentViewOptionsProps } from "../deploymentViewInterfaces";
import FlexContainer from "../../_containers/FlexContainer";
import { querySelector } from "../../_helper-functions/querySelector";

const DeploymentsByFieldTable: React.FC<DeploymentViewOptionsProps> = ({
  optionsState
}: DeploymentViewOptionsProps) => {
  const { loading, error, data } = useQuery(
    querySelector(optionsState.selected),
    {
      variables: { option: optionsState.textToSearch }
    }
  );

  console.log(data);
  return (
    <FlexContainer flow="row">
      <> </>
    </FlexContainer>
  );
};

export default DeploymentsByFieldTable;
