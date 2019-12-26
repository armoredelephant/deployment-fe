export interface DeploymentOptions {
  userCount: number | string;
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
