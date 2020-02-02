import { EndUserDeploymentFormField } from "../components/create-deployment/deploymentCreateInterfaces";
import { GraphQLDeploymentData } from "../components/view-deployments/deploymentViewInterfaces";

export interface DeploymentCreateOptions {
  userCount: number | string;
  formCounts: number[];
  formValues: EndUserDeploymentFormField[];
  remoteSetup: boolean;
  primaryMachine: string;
  tech: string;
}

// export interface DeploymentViewOptions {
//   selected: string;
//   textToSearch: string;
// }

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
  deploymentData: GraphQLDeploymentData[];
  queryAttempted: boolean;
  queryError: boolean;
  querySuccessful: boolean;
  showSnackbar: boolean;
}
