import { EndUserDeploymentFormField } from "../components/create-deployment/deploymentCreateInterfaces";

export interface DeploymentCreateOptions {
  userCount: number | string;
  formCounts: number[];
  formValues: EndUserDeploymentFormField[];
  remoteSetup: boolean;
  primaryMachine: string;
  tech: string;
}

export interface DeploymentViewOptions {
  selected: string;
  textToSearch: string | number;
  view: string;
}

export interface DeploymentForms {
  endUser: string;
  product: string;
  modelType: string;
  serialNumber: string;
  techName: string;
  ticketNumber: number;
}

export interface DeploymentCreateStatus {
  postAttempted: boolean;
  postError: boolean;
  postSuccessful: boolean;
  showDeploymentSnackbar: boolean;
}

export interface DeploymentViewStatus {
  isFetching: boolean;
  queryAttempted: boolean;
  queryError: boolean;
  querySuccessful: boolean;
  showSnackbar: boolean;
}
