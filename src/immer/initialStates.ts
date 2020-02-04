import {
  DeploymentCreateOptions,
  DeploymentCreateStatus,
  DeploymentViewStatus,
  DeploymentViewOptions
} from "./stateInterfaces";

export const deploymentCreateOptionsInitialState: DeploymentCreateOptions = {
  userCount: "",
  formCounts: [],
  formValues: [],
  remoteSetup: false,
  primaryMachine: "igel",
  tech: "Keith Alleman"
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
