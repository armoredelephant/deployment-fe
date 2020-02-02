import React, { createContext } from "react";
import MainContainer from "../_containers/MainContainer";
import StyledDivider from "../_dividers/StyledDivider";
import ViewDeploymentsOptions from "./molecules/ViewDeploymentOptions";
// import { DeploymentViewOptions } from "../../immer/stateInterfaces";
// import { DeploymentViewOptionsDispatch } from "../../immer/actionTypes";
// import { deploymentViewOptionsReducer } from "../../immer/reducers";
// import { deploymentViewOptionsInitialState } from "../../immer/initialStates";
// import { useImmerReducer } from "use-immer";

// export const DeploymentViewOptionsStateContext = createContext<
//   DeploymentViewOptions | undefined
// >(undefined);
// export const DeploymentViewOptionsDispatchContext = createContext<
//   DeploymentViewOptionsDispatch | undefined
// >(undefined);

const ViewDeploymentsPage: React.FC = () => {
  // const [optionsState, optionsDispatch] = useImmerReducer(
  //   deploymentViewOptionsReducer,
  //   deploymentViewOptionsInitialState
  // );

  return (
    <MainContainer content="flex-start">
      <ViewDeploymentsOptions />
      <StyledDivider />
      {/* <ViewDeploymentsTable optionsState={optionsState} /> */}
    </MainContainer>
  );
};

export default ViewDeploymentsPage;
