import React, { createContext } from "react";
import { useImmerReducer } from "use-immer";
import {
  deploymentOptionsReducer,
  deploymentStatusReducer
} from "../../immer/reducers";
import {
  deploymentOptionsInitialState,
  deploymentStatusInitialState
} from "../../immer/initialStates";
import MainContainer from "../_containers/MainContainer";
import CreateDeploymentOptions from "./molecules/CreateDeploymentOptions";
import StyledDivider from "../_dividers/StyledDivider";
import CreateDeploymentUserForms from "./molecules/CreateDeploymentUserForms";
import GenerateFormButton from "./atoms/GenerateFormButton";
import DeploymentSnackbar from "./atoms/DeploymentSnackbar";
import { DeploymentOptions } from "../../immer/stateInterfaces";
import { DeploymentOptionsDispatch } from "../../immer/actionTypes";

/**
 * This component contaains the entirety of
 * the create deployment form.
 * Contains an immer state for the options selected
 * and generate form button will create
 * a form based on those options.
 */

export const OptionsStateContext = createContext<DeploymentOptions | undefined>(
  undefined
);
export const OptionsDispatchContext = createContext<
  DeploymentOptionsDispatch | undefined
>(undefined);

const CreateDeploymentPage: React.FC = () => {
  const [optionsState, optionsDispatch] = useImmerReducer(
    deploymentOptionsReducer,
    deploymentOptionsInitialState
  );
  const [deploymentState, deploymentDispatch] = useImmerReducer(
    deploymentStatusReducer,
    deploymentStatusInitialState
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
        <OptionsDispatchContext.Provider value={optionsDispatch}>
          <OptionsStateContext.Provider value={optionsState}>
            <CreateDeploymentUserForms
              optionsDispatch={optionsDispatch}
              optionsState={optionsState}
              deploymentState={deploymentState}
              deploymentDispatch={deploymentDispatch}
            />
          </OptionsStateContext.Provider>
        </OptionsDispatchContext.Provider>
      )}
      <DeploymentSnackbar
        deploymentState={deploymentState}
        deploymentDispatch={deploymentDispatch}
      />
    </MainContainer>
  );
};

export default CreateDeploymentPage;
