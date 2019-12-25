import { DeploymentOptions } from "../../immer/stateInterfaces";
import { DeploymentOptionsAction } from "../../immer/reducers";

export interface DeploymentOptionsProps {
  optionsDispatch: React.Dispatch<DeploymentOptionsAction>;
  optionsState: DeploymentOptions;
}
