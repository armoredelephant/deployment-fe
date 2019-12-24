import { Draft } from "immer";
import { DeploymentOptions } from "./stateInterfaces";

interface SetUserCount {
  type: "SET_USER_COUNT";
  userCount: number;
}

interface SetRemoteSetup {
  type: "SET_REMOTE_SETUP";
  remoteSetup: boolean;
}

interface SetPrimaryMachine {
  type: "SET_PRIMARY_MACHINE";
  primaryMachine: string;
}

type Action = SetUserCount | SetRemoteSetup | SetPrimaryMachine;

export function deploymentOptionsReducer(
  draft: Draft<DeploymentOptions>,
  action: Action
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
