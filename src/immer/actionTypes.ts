/**
 * Action for DeploymentOptions
 */

interface SetUserCount {
  type: "SET_USER_COUNT";
  userCount: number;
}

interface SetRemoteSetup {
  type: "SET_REMOTE_SETUP";
}

interface SetPrimaryMachine {
  type: "SET_PRIMARY_MACHINE";
  primaryMachine: string;
}

export type DeploymentOptionsAction =
  | SetUserCount
  | SetRemoteSetup
  | SetPrimaryMachine;

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
