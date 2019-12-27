import { Draft } from "immer";
import { DeploymentOptions, DeploymentForms } from "./stateInterfaces";
import { DeploymentOptionsAction, DeploymentFormsAction } from "./actionTypes";
import { deploymentOptionsInitialState } from "./initialStates";

/**
 * Reducer for the DeploymentOptions logic
 */

export function deploymentOptionsReducer(
  draft: Draft<DeploymentOptions>,
  action: DeploymentOptionsAction
): Draft<DeploymentOptions> | void {
  switch (action.type) {
    case "SET_USER_COUNT":
      draft.userCount = action.userCount;
      draft.formCount = action.formCount;
      draft.formValues = action.formValues;
      return;
    case "SET_REMOTE_SETUP":
      draft.remoteSetup = !draft.remoteSetup;
      return;
    case "SET_PRIMARY_MACHINE":
      draft.primaryMachine = action.primaryMachine;
      return;
    case "RESET":
      return deploymentOptionsInitialState;
    default:
      return draft;
  }
}

/**
 * Reducer for the DeploymentForms logic
 */

export function deploymentFormsReducer(
  draft: Draft<DeploymentForms>,
  action: DeploymentFormsAction
): Draft<DeploymentForms> | void {
  switch (action.type) {
    case "SET_ENDUSER":
      draft.endUser = action.endUser;
      return;
    case "SET_MODEL_TYPE":
      draft.modelType = action.modelType;
      return;
    case "SET_PRODUCT":
      draft.product = action.product;
      return;
    case "SET_SERIAL_NUMBER":
      draft.serialNumber = action.serialNumber;
      return;
    case "SET_TECH_NAME":
      draft.techName = action.techName;
      return;
    case "SET_TICKET_NUMBER":
      draft.ticketNumber = action.ticketNumber;
      return;
    default:
      return draft;
  }
}
