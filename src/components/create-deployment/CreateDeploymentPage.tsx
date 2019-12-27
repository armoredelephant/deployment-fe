import React, { createContext, useEffect } from "react";
import { useImmerReducer } from "use-immer";
import { deploymentOptionsReducer } from "../../immer/reducers";
import { deploymentOptionsInitialState } from "../../immer/initialStates";
import MainContainer from "../_containers/MainContainer";
import CreateDeploymentOptions from "./molecules/CreateDeploymentOptions";
import StyledDivider from "../_dividers/StyledDivider";
import CreateDeploymentUserForms from "./molecules/CreateDeploymentUserForms";

/**
 * top form that asks:
 * How many users are you deploying equipment to? Dropdown with #?
 * Will these be remote setups? No defaulted, with Yes radio button
 * Primary PC for the majority? Laptop/Desktop/Igel
 */

/**
 * bottom form is populated based on responses:
 *
 */

const StateContext = createContext({});

const CreateDeploymentPage: React.FC = () => {
  const [optionsState, optionsDispatch] = useImmerReducer(
    deploymentOptionsReducer,
    deploymentOptionsInitialState
  );
  useEffect(() => {
    console.log(optionsState);
  });
  return (
    <MainContainer content="flex-start">
      <CreateDeploymentOptions
        optionsDispatch={optionsDispatch}
        optionsState={optionsState}
      />
      <StyledDivider />
      <StateContext.Provider value={optionsState}>
        {optionsState.formValues.length >= 1 && (
          <CreateDeploymentUserForms
            optionsDispatch={optionsDispatch}
            optionsState={optionsState}
          />
        )}
      </StateContext.Provider>
    </MainContainer>
  );
};

export default CreateDeploymentPage;
