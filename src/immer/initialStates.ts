import {
  DeploymentCreateOptions,
  DeploymentCreateStatus,
  // DeploymentViewOptions,
  DeploymentViewStatus
} from "./stateInterfaces";

export const deploymentCreateOptionsInitialState: DeploymentCreateOptions = {
  userCount: "",
  formCounts: [],
  formValues: [],
  remoteSetup: false,
  primaryMachine: "igel",
  tech: "Keith Alleman"
};

// export const deploymentViewOptionsInitialState: DeploymentViewOptions = {
//   selected: "",
//   textToSearch: ""
// };

export const deploymentViewStatusInitialState: DeploymentViewStatus = {
  deploymentData: [],
  queryAttempted: false,
  queryError: false,
  querySuccessful: false,
  showSnackbar: false
};

export const deploymentCreateStatusInitialState: DeploymentCreateStatus = {
  postAttempted: false,
  postError: false,
  postSuccessful: false,
  showDeploymentSnackbar: false
};
