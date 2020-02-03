import React, { createContext } from "react";
import MainContainer from "../_containers/MainContainer";
import StyledDivider from "../_dividers/StyledDivider";
import ViewDeploymentsOptions from "./molecules/ViewDeploymentOptions";
import { useImmerReducer } from "use-immer";
import {
  DeploymentViewStatus,
  DeploymentViewOptions
} from "../../immer/stateInterfaces";
import {
  DeploymentViewStatusDispatch,
  DeploymentViewOptionsDispatch
} from "../../immer/actionTypes";
import {
  deploymentViewStatusReducer,
  deploymentViewOptionsReducer
} from "../../immer/reducers";
import {
  deploymentViewStatusInitialState,
  deploymentViewOptionsInitialState
} from "../../immer/initialStates";
import ViewDeploymentsLoader from "./molecules/ViewDeploymentsLoader";

export const DeploymentViewsStatusStateContext = createContext<
  DeploymentViewStatus | undefined
>(undefined);
export const DeploymentViewStatusDispatchContext = createContext<
  DeploymentViewStatusDispatch | undefined
>(undefined);

export const DeploymentViewOptionsStateContext = createContext<
  DeploymentViewOptions | undefined
>(undefined);
export const DeploymentViewOptionsDispatchContext = createContext<
  DeploymentViewOptionsDispatch | undefined
>(undefined);

const ViewDeploymentsPage: React.FC = () => {
  const [deploymentViewState, deploymentViewDispatch] = useImmerReducer(
    deploymentViewStatusReducer,
    deploymentViewStatusInitialState
  );
  const [
    deploymentViewOptionsState,
    deploymentViewOptionsDispatch
  ] = useImmerReducer(
    deploymentViewOptionsReducer,
    deploymentViewOptionsInitialState
  );

  return (
    <MainContainer content="flex-start">
      <ViewDeploymentsOptions
        optionsState={deploymentViewOptionsState}
        optionsDispatch={deploymentViewOptionsDispatch}
        viewState={deploymentViewState}
        viewDispatch={deploymentViewDispatch}
      />
      <StyledDivider />
      <ViewDeploymentsLoader
        optionsState={deploymentViewOptionsState}
        optionsDispatch={deploymentViewOptionsDispatch}
        viewState={deploymentViewState}
        viewDispatch={deploymentViewDispatch}
      />
      {/* <ViewDeploymentsTable optionsState={optionsState} /> */}
    </MainContainer>
  );
};

export default ViewDeploymentsPage;
