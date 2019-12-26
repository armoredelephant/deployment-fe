import {
  DeploymentOptions,
  DeploymentForms
} from "../../immer/stateInterfaces";
import {
  DeploymentFormsAction,
  DeploymentOptionsAction
} from "../../immer/actionTypes";

/**
 * Props interface from deploymentOptionsReducer
 */
export interface DeploymentOptionsProps {
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

/**
 * Interface for the form fields that make up a deployment
 */
export interface IndividualDeploymentFormField {
  endUser: string;
  product: string;
  modelType: string;
  serialNumber: string;
  techName: string;
  ticketNumber: number;
}

/**
 * Interface for an array containing all deployments
 */
export interface DeploymentFormValues {
  deployments: IndividualDeploymentFormField[];
}
