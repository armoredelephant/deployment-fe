import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { DeploymentViewOptionsAndStatusProps } from "../deploymentViewInterfaces";
import FlexContainer from "../../_containers/FlexContainer";
import { querySelector } from "../../_helper-functions/querySelector";
import ViewDeploymentsSnackbar from "../atoms/ViewDeploymentsSnackbar";

const DeploymentsByFieldTable: React.FC<DeploymentViewOptionsAndStatusProps> = ({
  optionsState,
  viewState,
  viewDispatch
}: DeploymentViewOptionsAndStatusProps) => {
  const { loading, error, data } = useQuery(
    querySelector(optionsState.selected),
    {
      variables: { option: optionsState.textToSearch }
    }
  );

  console.log(data);
  return (
    <>
      <FlexContainer flow="row">
        <> </>
      </FlexContainer>
      <ViewDeploymentsSnackbar
        viewDispatch={viewDispatch}
        viewState={viewState}
      />
    </>
  );
};

export default DeploymentsByFieldTable;
