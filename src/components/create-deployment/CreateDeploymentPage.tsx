import React, { createContext } from "react";
import { useImmerReducer } from "use-immer";
import { deploymentOptionsReducer } from "../../immer/reducers";
import { deploymentOptionsInitialState } from "../../immer/initialStates";
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

const StateContext = createContext({});

const CreateDeploymentPage: React.FC = () => {
  const [optionsState, optionsDispatch] = useImmerReducer(
    deploymentOptionsReducer,
    deploymentOptionsInitialState
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
              />
          </StateContext.Provider>
      )}
    </MainContainer>
  );
};

export default CreateDeploymentPage;
