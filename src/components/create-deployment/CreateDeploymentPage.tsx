// in the onSubmit we will loop through the data and for each input, we will post.
import React, { createContext } from "react";
import { useImmerReducer } from "use-immer";
import { deploymentOptionsReducer } from "../../immer/reducers";
import { deploymentOptionsInitialState } from "../../immer/initialStates";

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

const DispatchContext = createContext({});
const StateContext = createContext({});

const CreateDeploymentPage: React.FC = () => {
  const [optionsState, optionsDispatch] = useImmerReducer(
    deploymentOptionsReducer,
    deploymentOptionsInitialState
  );
  return (
    <>
      <DispatchContext.Provider value={optionsDispatch}>
        <div></div>
      </DispatchContext.Provider>
      <StateContext.Provider value={optionsState}>
        <div></div>
      </StateContext.Provider>
    </>
  );
};

export default CreateDeploymentPage;
