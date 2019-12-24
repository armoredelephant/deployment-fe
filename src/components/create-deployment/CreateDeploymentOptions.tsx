import React from "react";
import { DeploymentOptionsAction } from "../../immer/reducers";
import { DeploymentOptions } from "../../immer/stateInterfaces";
import CustomCheckBox from "../custom-fields/CustomCheckBox";
import FlexContainer from "../_containers/FlexContainer";
import CustomFormControlLabel from "../custom-fields/CustomFormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

// dispatch will be passed down or use DispatchContext

// amount of users
// primary machine

interface Props {
  optionsDispatch: React.Dispatch<DeploymentOptionsAction>;
  optionsState: DeploymentOptions;
}

const CreateDeploymentOptions: React.FC<Props> = ({
  optionsDispatch,
  optionsState
}: Props) => {
  const handleRemoteOption = (): void => {
    optionsDispatch({ type: "SET_REMOTE_SETUP" });
  };

  const handleUserCountOption = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const count = parseInt((event.target as HTMLInputElement).value);
    optionsDispatch({
      type: "SET_USER_COUNT",
      userCount: count
    });
  };

  const userCount: number[] = [];
  for (let i = 1; i <= 20; i++) {
    userCount.push(i);
  }

  return (
    <FlexContainer>
      <FormControl>
        <InputLabel># of Users</InputLabel>
        <Select value={optionsState.userCount} onChange={handleUserCountOption}>
          {userCount.map((num: number) => {
            <MenuItem value={num}>{num}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <CustomFormControlLabel
        control={
          <CustomCheckBox
            checked={optionsState.remoteSetup}
            onChange={handleRemoteOption}
          />
        }
        label="Remote setups"
      />
    </FlexContainer>
  );
};

export default CreateDeploymentOptions;
