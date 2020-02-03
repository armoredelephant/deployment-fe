import React from "react";
import MainContainer from "../_containers/MainContainer";
import StyledDivider from "../_dividers/StyledDivider";
import ViewDeploymentsOptions from "./molecules/ViewDeploymentOptions";
import { useImmerReducer } from "use-immer";
import {
  deploymentViewStatusReducer,
  deploymentViewOptionsReducer
} from "../../immer/reducers";
import {
  deploymentViewStatusInitialState,
  deploymentViewOptionsInitialState
} from "../../immer/initialStates";
import ViewDeploymentsLoader from "./molecules/ViewDeploymentsLoader";

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
      />
      {/* <ViewDeploymentsTable optionsState={optionsState} /> */}
    </MainContainer>
  );
};

export default ViewDeploymentsPage;
