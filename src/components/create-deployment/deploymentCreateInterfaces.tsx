import {
  DeploymentCreateOptions,
  DeploymentCreateStatus
} from "../../immer/stateInterfaces";
import {
  DeploymentCreateOptionsAction,
  DeploymentCreateStatusAction
} from "../../immer/actionTypes";

/**
 * Props interface from deploymentOptionsReducer
 */
export interface DeploymentCreateOptionsProps {
  optionsDispatch: React.Dispatch<DeploymentCreateOptionsAction>;
  optionsState: DeploymentCreateOptions;
}

/**
 * Props interface from deploymentStatusReducer
 */
export interface DeploymentStatusProps {
  deploymentDispatch: React.Dispatch<DeploymentCreateStatusAction>;
  deploymentState: DeploymentCreateStatus;
}

/**
 * Props interface from deploymentStatusReducer and deploymentOptionsReducer
 */
export interface DeploymentStatusAndOptionsProps {
  deploymentDispatch: React.Dispatch<DeploymentCreateStatusAction>;
  deploymentState: DeploymentCreateStatus;
  optionsDispatch: React.Dispatch<DeploymentCreateOptionsAction>;
  optionsState: DeploymentCreateOptions;
}

/**
 * Props interface from deploymentFormsReducer
 */
// export interface DeploymentFormProps {
//   deploymentFormDispatch: React.Dispatch<DeploymentFormsAction>;
//   deploymentFormState: DeploymentForms;
// }

/**
 * Props interface from both deploymentFormsReducer & deploymentOptionsReducer
 */
// export interface CreateDeploymentStateProps {
//   optionsProps: DeploymentCreateOptionsProps;
//   formsProps: DeploymentFormProps;
// }

export interface IndividualDeploymentItem {
  product: string;
  modelType: string;
  serialNumber: string;
  asset: string;
}

/**
 * Interface for the form fields that make up a deployment
 */
export interface EndUserDeploymentFormField {
  endUser: string;
  ticketNumber: string;
  items: IndividualDeploymentItem[];
}

/**
 * Interface for an array containing all deployments
 */
export interface DeploymentFormValues {
  deployments: EndUserDeploymentFormField[];
}

/**
 * Interface for data sent to gql for creating a deployment
 */
export interface GraphQLDeployment {
  techName: string;
  endUser: string;
  product: string;
  modelType: string;
  serialNumber: string;
  asset: string;
  timeStamp: string;
  ticketNumber: number;
  techId: number;
}

export interface GraphQLTech {
  id: number;
  name: string;
}
