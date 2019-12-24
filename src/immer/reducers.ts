import { Draft } from "immer";
import { DeploymentOptions } from "./stateInterfaces";

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

export function deploymentOptionsReducer(
  draft: Draft<DeploymentOptions>,
  action: DeploymentOptionsAction
): Draft<DeploymentOptions> | void {
  switch (action.type) {
    case "SET_USER_COUNT":
      draft.userCount = action.userCount;
      return;
    case "SET_REMOTE_SETUP":
      draft.remoteSetup = !draft.remoteSetup;
      return;
    case "SET_PRIMARY_MACHINE":
      draft.primaryMachine = action.primaryMachine;
      return;
    default:
      return draft;
  }
}
