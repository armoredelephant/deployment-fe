import { Draft } from "immer";
import {
  DeploymentCreateOptions,
  DeploymentCreateStatus,
  // DeploymentViewOptions,
  DeploymentViewStatus,
  DeploymentViewOptions
} from "./stateInterfaces";
import {
  DeploymentCreateOptionsAction,
  DeploymentCreateStatusAction,
  // DeploymentViewOptionsAction,
  DeploymentViewStatusAction,
  DeploymentViewOptionsAction
} from "./actionTypes";
import {
  deploymentCreateOptionsInitialState,
  deploymentCreateStatusInitialState,
  deploymentViewStatusInitialState,
  deploymentViewOptionsInitialState
} from "./initialStates";

/**
 * Reducer for the DeploymentCreateOptions logic
 */

export function deploymentCreateOptionsReducer(
  draft: Draft<DeploymentCreateOptions>,
  action: DeploymentCreateOptionsAction
): Draft<DeploymentCreateOptions> | void {
  switch (action.type) {
    case "SET_USER_COUNT":
      draft.userCount = action.userCount;
      draft.formCounts = action.formCounts;
      return;
    case "SET_REMOTE_SETUP":
      draft.remoteSetup = !draft.remoteSetup;
      return;
    case "SET_PRIMARY_MACHINE":
      draft.primaryMachine = action.primaryMachine;
      return;
    case "SET_INITIAL_FORM_VALUES":
      draft.formValues = action.formValues;
      return;
    case "RESET":
      return deploymentCreateOptionsInitialState;
    default:
      return draft;
  }
}
/**
 * Reducer for the Deployment status logic
 */

export function deploymentCreateStatusReducer(
  draft: Draft<DeploymentCreateStatus>,
  action: DeploymentCreateStatusAction
): Draft<DeploymentCreateStatus> | void {
  switch (action.type) {
    case "SET_POST_ATTEMPT":
      draft.postAttempted = true;
      return;
    case "SET_POST_SUCCESSFUL":
      draft.postSuccessful = true;
      draft.showDeploymentSnackbar = true;
      return;
    case "SET_POST_ERROR":
      draft.postError = true;
      draft.showDeploymentSnackbar = true;
      return;
    case "RESET_DEPLOYMENT_CREATE_STATUS":
      return deploymentCreateStatusInitialState;
    default:
      return draft;
  }
}

/**
 * Reducer for the DeploymentQueryStatus logic
 */

export function deploymentViewStatusReducer(
  draft: Draft<DeploymentViewStatus>,
  action: DeploymentViewStatusAction
): Draft<DeploymentViewStatus> | void {
  switch (action.type) {
    case "SET_QUERY_ATTEMPT":
      draft.queryAttempted = true;
      draft.isFetching = true;
      return;
    case "SET_QUERY_SUCCESSFUL":
      draft.querySuccessful = true;
      draft.isFetching = false;
      draft.showSnackbar = true;
      return;
    case "SET_QUERY_ERROR":
      draft.queryError = true;
      draft.isFetching = false;
      draft.showSnackbar = true;
      return;
    case "RESET_DEPLOYMENT_VIEW_STATUS":
      return deploymentViewStatusInitialState;
    default:
      return draft;
  }
}

/**
 * Reducer for the DeploymentViewOptions logic
 */

export function deploymentViewOptionsReducer(
  draft: Draft<DeploymentViewOptions>,
  action: DeploymentViewOptionsAction
): Draft<DeploymentViewOptions> | void {
  switch (action.type) {
    case "SET_DEPLOYMENT_VIEW_OPTIONS":
      draft.selected = action.selected;
      draft.textToSearch = action.textToSearch;
      draft.view = "custom";
      return;
    case "RESET_DEPLOYMENT_VIEW_OPTIONS":
      return deploymentViewOptionsInitialState;
    default:
      return draft;
  }
}

/**
 * Reducer for the DeploymentForms logic
 */

// export function deploymentFormsReducer(
//   draft: Draft<DeploymentForms>,
//   action: DeploymentFormsAction
// ): Draft<DeploymentForms> | void {
//   switch (action.type) {
//     case "SET_ENDUSER":
//       draft.endUser = action.endUser;
//       return;
//     case "SET_MODEL_TYPE":
//       draft.modelType = action.modelType;
//       return;
//     case "SET_PRODUCT":
//       draft.product = action.product;
//       return;
//     case "SET_SERIAL_NUMBER":
//       draft.serialNumber = action.serialNumber;
//       return;
//     case "SET_TECH_NAME":
//       draft.techName = action.techName;
//       return;
//     case "SET_TICKET_NUMBER":
//       draft.ticketNumber = action.ticketNumber;
//       return;
//     default:
//       return draft;
//   }
// }
