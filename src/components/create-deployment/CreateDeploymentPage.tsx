import React, { createContext } from "react";
import { useImmerReducer } from "use-immer";
import {
  deploymentCreateOptionsReducer,
  deploymentCreateStatusReducer
} from "../../immer/reducers";
import {
  deploymentCreateOptionsInitialState,
  deploymentCreateStatusInitialState
} from "../../immer/initialStates";
import MainContainer from "../_containers/MainContainer";
import CreateDeploymentOptions from "./molecules/CreateDeploymentOptions";
import StyledDivider from "../_dividers/StyledDivider";
import CreateDeploymentUserForms from "./molecules/CreateDeploymentUserForms";
import GenerateFormButton from "./atoms/GenerateFormButton";
import DeploymentSnackbar from "./atoms/DeploymentSnackbar";
import { DeploymentCreateOptions } from "../../immer/stateInterfaces";
import { DeploymentCreateOptionsDispatch } from "../../immer/actionTypes";

/**
 * This component contaains the entirety of
 * the create deployment form.
 * Contains an immer state for the options selected
 * and generate form button will create
 * a form based on those options.
 */

export const DeploymentCreateOptionsStateContext = createContext<
  DeploymentCreateOptions | undefined
>(undefined);
export const DeploymentCreateOptionsDispatchContext = createContext<
  DeploymentCreateOptionsDispatch | undefined
>(undefined);

const CreateDeploymentPage: React.FC = () => {
  const [optionsState, optionsDispatch] = useImmerReducer(
    deploymentCreateOptionsReducer,
    deploymentCreateOptionsInitialState
  );
  const [deploymentState, deploymentDispatch] = useImmerReducer(
    deploymentCreateStatusReducer,
    deploymentCreateStatusInitialState
  );

  return (
    <MainContainer content="flex-start">
      <CreateDeploymentOptions
        optionsDispatch={optionsDispatch}
        optionsState={optionsState}
      />
      <GenerateFormButton
        optionsDispatch={optionsDispatch}
        optionsState={optionsState}
      />
      <StyledDivider />
      {optionsState.formValues.length >= 1 && (
        <DeploymentCreateOptionsDispatchContext.Provider
          value={optionsDispatch}
        >
          <DeploymentCreateOptionsStateContext.Provider value={optionsState}>
            <CreateDeploymentUserForms
              optionsDispatch={optionsDispatch}
              optionsState={optionsState}
              deploymentState={deploymentState}
              deploymentDispatch={deploymentDispatch}
            />
          </DeploymentCreateOptionsStateContext.Provider>
        </DeploymentCreateOptionsDispatchContext.Provider>
      )}
      <DeploymentSnackbar
        deploymentState={deploymentState}
        deploymentDispatch={deploymentDispatch}
      />
    </MainContainer>
  );
};

export default CreateDeploymentPage;
