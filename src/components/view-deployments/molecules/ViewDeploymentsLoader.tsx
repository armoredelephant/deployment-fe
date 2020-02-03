import React from "react";
import FlexContainer from "../../_containers/FlexContainer";
import AllDeploymentsTable from "./AllDeploymentsTable";
import DeploymentsByFieldTable from "./DeploymentsByFieldTable";
import { DeploymentViewOptionsAndStatusProps } from "../deploymentViewInterfaces";

const ViewDeploymentsLoader: React.FC<DeploymentViewOptionsAndStatusProps> = ({
  optionsDispatch,
  optionsState,
  viewDispatch,
  viewState
}: DeploymentViewOptionsAndStatusProps) => {
  const { view } = optionsState;

  return (
    <FlexContainer flow="row">
      {view === "all" ? (
        <AllDeploymentsTable />
      ) : (
        <DeploymentsByFieldTable
          optionsDispatch={optionsDispatch}
          optionsState={optionsState}
          viewDispatch={viewDispatch}
          viewState={viewState}
        />
      )}
    </FlexContainer>
  );
};

export default ViewDeploymentsLoader;
