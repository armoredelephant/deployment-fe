import { EndUserDeploymentFormField } from "../components/create-deployment/deploymentInterfaces";

/**
 * Action for DeploymentOptions
 */

interface SetUserCount {
  type: "SET_USER_COUNT";
  userCount: number;
  formCounts: number[];
}

interface SetRemoteSetup {
  type: "SET_REMOTE_SETUP";
}

interface SetPrimaryMachine {
  type: "SET_PRIMARY_MACHINE";
  primaryMachine: string;
}

interface SetInitialFormValues {
  type: "SET_INITIAL_FORM_VALUES";
  formValues: EndUserDeploymentFormField[];
}

interface ResetForm {
  type: "RESET";
}

export type DeploymentOptionsAction =
  | SetUserCount
  | SetRemoteSetup
  | SetPrimaryMachine
  | SetInitialFormValues
  | ResetForm;

export type DeploymentOptionsDispatch = (
  action: DeploymentOptionsAction
) => void;

/**
 * Action for DeploymentForms
 */

interface SetEndUser {
  type: "SET_ENDUSER";
  endUser: string;
}

interface SetProduct {
  type: "SET_PRODUCT";
  product: string;
}

interface SetModelType {
  type: "SET_MODEL_TYPE";
  modelType: string;
}

interface SetSerialNumber {
  type: "SET_SERIAL_NUMBER";
  serialNumber: string;
}
// may be moved out
interface SetTechName {
  type: "SET_TECH_NAME";
  techName: string;
}

interface SetTicketNumber {
  type: "SET_TICKET_NUMBER";
  ticketNumber: number;
}

export type DeploymentFormsAction =
  | SetEndUser
  | SetProduct
  | SetModelType
  | SetSerialNumber
  | SetTechName
  | SetTicketNumber;

/**
 * Actions for DeploymentStatus
 */

interface SetPostAttempt {
  type: "SET_POST_ATTEMPT";
}

interface SetPostError {
  type: "SET_POST_ERROR";
}

interface SetPostSuccessful {
  type: "SET_POST_SUCCESSFUL";
}

interface ResetDeploymentStatus {
  type: "RESET_DEPLOYMENT_STATUS";
}

export type DeploymentStatusAction =
  | SetPostAttempt
  | SetPostError
  | SetPostSuccessful
  | ResetDeploymentStatus;
