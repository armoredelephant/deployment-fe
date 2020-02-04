import React from "react";
import FlexContainer from "../../_containers/FlexContainer";
import AllDeploymentsTable from "./AllDeploymentsTable";
import DeploymentsByFieldTable from "./DeploymentsByFieldTable";
import { DeploymentViewOptionsProps } from "../deploymentViewInterfaces";
import { MuiThemeProvider } from "@material-ui/core";
import { darkTheme } from "../../../tableTheme";

const ViewDeploymentsLoader: React.FC<DeploymentViewOptionsProps> = ({
  optionsDispatch,
  optionsState
}: DeploymentViewOptionsProps) => {
  const { view } = optionsState;
  if (!optionsState) return null;
  // add Switch for dark/light theme table?
  return (
    <MuiThemeProvider theme={darkTheme}>
      <FlexContainer center="true" width="100%" marginBottom="50px" flow="row">
        {view === "all" ? (
          <AllDeploymentsTable />
        ) : (
          <DeploymentsByFieldTable
            optionsDispatch={optionsDispatch}
            optionsState={optionsState}
          />
        )}
      </FlexContainer>
    </MuiThemeProvider>
  );
};

export default ViewDeploymentsLoader;
