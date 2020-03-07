import { EndUserDeploymentFormField } from "../components/create-deployment/deploymentCreateInterfaces";

export interface DeploymentCreateOptions {
  userCount: number | string;
  formCounts: number[];
  formValues: EndUserDeploymentFormField[];
  remoteSetup: boolean;
  primaryMachine: string;
  techName: string;
  techId?: number;
  queryError: boolean;
  showSnackbar: boolean;
  deploymentTechSelected: boolean;
  deploymentTechTouched: boolean;
  deploymentToView: number;
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
  queryError: boolean;
}

export interface CreateTechStatus {
  postError: boolean;
  showSnackbar: boolean;
}
