import { CreateTechStatus } from "../../immer/stateInterfaces";
import { CreateTechStatusAction } from "../../immer/actionTypes";

export interface CreateTechStatusProps {
  statusDispatch: React.Dispatch<CreateTechStatusAction>;
  statusState: CreateTechStatus;
}
