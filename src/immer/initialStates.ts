import {
  DeploymentCreateOptions,
  DeploymentCreateStatus,
  DeploymentViewStatus,
  DeploymentViewOptions,
  CreateTechStatus
} from "./stateInterfaces";

export const deploymentCreateOptionsInitialState: DeploymentCreateOptions = {
  userCount: "",
  formCounts: [],
  formValues: [],
  remoteSetup: false,
  primaryMachine: "igel",
  techName: "",
  queryError: false,
  showSnackbar: false,
  deploymentTechSelected: false,
  deploymentTechTouched: false,
  deploymentToView: 1
};

export const deploymentViewOptionsInitialState: DeploymentViewOptions = {
  selected: "",
  textToSearch: "",
  view: "all"
};

export const deploymentViewStatusInitialState: DeploymentViewStatus = {
  queryError: false
};

export const deploymentCreateStatusInitialState: DeploymentCreateStatus = {
  postAttempted: false,
  postError: false,
  postSuccessful: false,
  showDeploymentSnackbar: false
};

export const createTechStatusInitialState: CreateTechStatus = {
  postError: false,
  showSnackbar: false
};
