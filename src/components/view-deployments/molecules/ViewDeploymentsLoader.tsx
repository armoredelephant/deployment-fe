import React from "react";
import FlexContainer from "../../_containers/FlexContainer";
import { DeploymentViewOptionsProps } from "../deploymentViewInterfaces";
import { MuiThemeProvider, FormControlLabel } from "@material-ui/core";
import { darkTheme, lightTheme } from "../../../tableTheme";
import loadable from "@loadable/component";
import SpinnerContainer from "../../_containers/SpinnerContainer";
import CustomSwitch from "../atoms/CustomSwitch";

const LoadableAllDeploymentsTable = loadable(
  () => import("./AllDeploymentsTable"),
  {
    fallback: <SpinnerContainer />
  }
);

const LoadableDeploymentsByFieldTable = loadable(
  () => import("./DeploymentsByFieldTable"),
  {
    fallback: <SpinnerContainer />
  }
);

const ViewDeploymentsLoader: React.FC<DeploymentViewOptionsProps> = ({
  optionsState
}: DeploymentViewOptionsProps) => {
  const [dense, setDense] = React.useState(false);
  const [changeTheme, setChangeTheme] = React.useState(false);
  const { view } = optionsState;

  if (!optionsState) return null;

  const handleChangeDense = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDense(event.target.checked);
  };

  const handleChangeTheme = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setChangeTheme(event.target.checked);
  };

  // add Switch for dark/light theme table?
  return (
    <FlexContainer center="true" width="100%" marginBottom="50px" flow="column">
      <MuiThemeProvider theme={changeTheme ? darkTheme : lightTheme}>
        <FlexContainer center="true" width="100%" flow="column">
          {view === "all" ? (
            <LoadableAllDeploymentsTable dense={dense} />
          ) : (
            <LoadableDeploymentsByFieldTable
              dense={dense}
              optionsState={optionsState}
            />
          )}
        </FlexContainer>
      </MuiThemeProvider>
      <FlexContainer flow="row">
        <FormControlLabel
          control={
            <CustomSwitch checked={dense} onChange={handleChangeDense} />
          }
          label="Dense padding"
        />
        <FormControlLabel
          control={
            <CustomSwitch checked={changeTheme} onChange={handleChangeTheme} />
          }
          label="Dark mode"
        />
      </FlexContainer>
    </FlexContainer>
  );
};

export default ViewDeploymentsLoader;
