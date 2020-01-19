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

/**
 * This component contaains the entirety of
 * the create deployment form.
 * Contains an immer state for the options selected
 * and generate form button will create
 * a form based on those options.
 */

/**
 * Form should reset if posted with no errors
 * Generate form button should reset initialState of deploymentState
 * onSubmit will handle the deploymentState
 * onSubmit will dispatch SET_POST_ATTEMPT
 * at end of onSubmit will SET_POST_SUCCESSFUL
 * if any errors during the posts, catch will dispatch custom Error with SET_POST_ERROR
 * Create a field next to submit button that will display deploymentState successful or error
 */

const StateContext = createContext({});

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
        <StateContext.Provider value={optionsState}>
          <CreateDeploymentUserForms
            optionsDispatch={optionsDispatch}
            optionsState={optionsState}
            deploymentState={deploymentState}
            deploymentDispatch={deploymentDispatch}
          />
        </StateContext.Provider>
      )}
    </MainContainer>
  );
};

export default CreateDeploymentPage;
