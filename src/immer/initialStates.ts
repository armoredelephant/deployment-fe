import { DeploymentOptions, DeploymentStatus } from "./stateInterfaces";

export const deploymentOptionsInitialState: DeploymentOptions = {
  userCount: "",
  formCounts: [],
  formValues: [],
  remoteSetup: false,
  primaryMachine: "igel",
  tech: "Keith Alleman"
};

export const deploymentStatusInitialState: DeploymentStatus = {
  postAttempted: false,
  postError: false,
  postSuccessful: false,
  showDeploymentSnackbar: false
};
