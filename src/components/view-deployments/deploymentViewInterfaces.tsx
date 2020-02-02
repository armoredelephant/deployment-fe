import { DeploymentViewStatusAction } from "../../immer/actionTypes";
import { DeploymentViewStatus } from "../../immer/stateInterfaces";

export interface GraphQLDeploymentData {
  techName: string;
  endUser: string;
  product: string;
  modelType: string;
  serialNumber: string;
  timeStamp: string;
  ticketNumber: string;
}

export interface DeploymentViewOptions {
  selected: string;
  textToSearch: string;
}

export interface DeploymentViewStatusProps {
  viewDispatch: React.Dispatch<DeploymentViewStatusAction>;
  viewState: DeploymentViewStatus;
}
