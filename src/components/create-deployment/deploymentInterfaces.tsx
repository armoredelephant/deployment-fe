import {
  DeploymentOptions,
  DeploymentForms,
  DeploymentStatus
} from "../../immer/stateInterfaces";
import {
  DeploymentFormsAction,
  DeploymentOptionsAction,
  DeploymentStatusAction
} from "../../immer/actionTypes";

/**
 * Props interface from deploymentOptionsReducer
 */
export interface DeploymentOptionsProps {
  optionsDispatch: React.Dispatch<DeploymentOptionsAction>;
  optionsState: DeploymentOptions;
}

/**
 * Props interface from deploymentStatusReducer
 */
export interface DeploymentStatusProps {
  deploymentDispatch: React.Dispatch<DeploymentStatusAction>;
  deploymentState: DeploymentStatus;
}

/**
 * Props interface from deploymentStatusReducer and deploymentOptionsReducer
 */
export interface DeploymentStatusAndOptionsProps {
  deploymentDispatch: React.Dispatch<DeploymentStatusAction>;
  deploymentState: DeploymentStatus;
  optionsDispatch: React.Dispatch<DeploymentOptionsAction>;
  optionsState: DeploymentOptions;
}

/**
 * Props interface from deploymentFormsReducer
 */
export interface DeploymentFormProps {
  deploymentFormDispatch: React.Dispatch<DeploymentFormsAction>;
  deploymentFormState: DeploymentForms;
}

/**
 * Props interface from both deploymentFormsReducer & deploymentOptionsReducer
 */
export interface CreateDeploymentStateProps {
  optionsProps: DeploymentOptionsProps;
  formsProps: DeploymentFormProps;
}

export interface IndividualDeploymentItem {
  product: string;
  modelType: string;
  serialNumber: string;
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
  timeStamp: string;
  ticketNumber: number;
  techId?: number;
}
