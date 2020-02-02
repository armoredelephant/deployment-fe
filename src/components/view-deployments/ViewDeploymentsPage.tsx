import React, { createContext } from "react";
import MainContainer from "../_containers/MainContainer";
import StyledDivider from "../_dividers/StyledDivider";
import ViewDeploymentsOptions from "./molecules/ViewDeploymentOptions";
import { useImmerReducer } from "use-immer";
import { DeploymentViewStatus } from "../../immer/stateInterfaces";
import { DeploymentViewStatusDispatch } from "../../immer/actionTypes";
import { deploymentViewStatusReducer } from "../../immer/reducers";
import { deploymentViewStatusInitialState } from "../../immer/initialStates";
import ViewDeploymentsSnackbar from "./atoms/ViewDeploymentsSnackbar";

export const DeploymentViewsStatusStateContext = createContext<
  DeploymentViewStatus | undefined
>(undefined);
export const DeploymentViewStatusDispatchContext = createContext<
  DeploymentViewStatusDispatch | undefined
>(undefined);

const ViewDeploymentsPage: React.FC = () => {
  const [deploymentViewState, deploymentViewDispatch] = useImmerReducer(
    deploymentViewStatusReducer,
    deploymentViewStatusInitialState
  );

  return (
    <MainContainer content="flex-start">
      <ViewDeploymentsOptions
        viewState={deploymentViewState}
        viewDispatch={deploymentViewDispatch}
      />
      <StyledDivider />
      {/* <ViewDeploymentsTable optionsState={optionsState} /> */}
      <ViewDeploymentsSnackbar
        viewDispatch={deploymentViewDispatch}
        viewState={deploymentViewState}
      />
    </MainContainer>
  );
};

export default ViewDeploymentsPage;
