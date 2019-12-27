import { IndividualDeploymentFormField } from "../components/create-deployment/deploymentInterfaces";

export interface DeploymentOptions {
  userCount: number | string;
  formCount: number[];
  formValues: IndividualDeploymentFormField[];
  remoteSetup: boolean;
  primaryMachine: string;
}

export interface DeploymentForms {
  endUser: string;
  product: string;
  modelType: string;
  serialNumber: string;
  techName: string;
  ticketNumber: number;
}
