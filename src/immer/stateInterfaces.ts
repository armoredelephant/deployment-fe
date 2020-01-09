import { EndUserDeploymentFormField } from "../components/create-deployment/deploymentInterfaces";

export interface DeploymentOptions {
  userCount: number | string;
  formCounts: number[];
  formValues: EndUserDeploymentFormField[];
  remoteSetup: boolean;
  primaryMachine: string;
  tech: string;
}

export interface DeploymentForms {
  endUser: string;
  product: string;
  modelType: string;
  serialNumber: string;
  techName: string;
  ticketNumber: number;
}
