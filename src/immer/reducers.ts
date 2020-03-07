import { Draft } from "immer";
import {
  DeploymentCreateOptions,
  DeploymentCreateStatus,
  DeploymentViewStatus,
  DeploymentViewOptions,
  CreateTechStatus
} from "./stateInterfaces";
import {
  DeploymentCreateOptionsAction,
  DeploymentCreateStatusAction,
  DeploymentViewStatusAction,
  DeploymentViewOptionsAction,
  CreateTechStatusAction
} from "./actionTypes";
import {
  deploymentCreateOptionsInitialState,
  deploymentCreateStatusInitialState,
  deploymentViewStatusInitialState,
  deploymentViewOptionsInitialState,
  createTechStatusInitialState
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
    case "SET_QUERY_ERROR":
      draft.queryError = true;
      draft.showSnackbar = true;
      return;
    case "SET_TECH":
      draft.techName = action.techName;
      draft.techId = action.techId;
      return;
    case "SET_INITIAL_FORM_VALUES":
      draft.formValues = action.formValues;
      draft.techId = action.techId;
      draft.techName = action.techName;
      return;
    case "SET_DEPLOYMENT_TECH_TOUCHED":
      draft.deploymentTechTouched = true;
      return;
    case "SET_DEPLOYMENT_TECH_SELECTED":
      draft.deploymentTechSelected = true;
      return;
    case "SET_DEPLOYMENT_TO_VIEW":
      draft.deploymentToView = action.deploymentToView;
      return;
    case "RESET_QUERY_ERROR":
      draft.queryError = false;
      draft.showSnackbar = false;
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
    case "SET_QUERY_ERROR":
      draft.queryError = true;
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
 * Reducer for the CreateTechStatus logic
 */

export function createTechStatusReducer(
  draft: Draft<CreateTechStatus>,
  action: CreateTechStatusAction
): Draft<CreateTechStatus> | void {
  switch (action.type) {
    case "SET_POST_ERROR":
      draft.postError = true;
      draft.showSnackbar = true;
      return;
    case "SET_POST_SUCCESSFUL":
      draft.showSnackbar = true;
      return;
    case "RESET_CREATE_TECH_STATUS":
      return createTechStatusInitialState;
  }
}
