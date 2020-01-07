import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { DeploymentOptionsProps } from "../deploymentInterfaces";

/**
 * Select field for CreateDeploymentOptions
 */

const UserCountSelect: React.FC<DeploymentOptionsProps> = ({
  optionsState,
  optionsDispatch
}: DeploymentOptionsProps) => {
  const userCount: number[] = [];
  for (let i = 1; i <= 20; i++) {
    userCount.push(i);
  }
  const handleUserCountOption = async (
    event: React.ChangeEvent<{ value: unknown }>
  ): Promise<void> => {
    const count = event.target.value as number;
    const formCounts = userCount.slice(0, count);

    await optionsDispatch({
      type: "SET_USER_COUNT",
      userCount: count,
      formCounts: formCounts
    });
  };

  return (
    <FormControl>
      <InputLabel id="user-count">User count</InputLabel>
      <Select
        labelId="user-count"
        value={optionsState.userCount}
        onChange={handleUserCountOption}
        MenuProps={{
          getContentAnchorEl: null,
          anchorOrigin: { vertical: "bottom", horizontal: "left" }
        }}
      >
        {userCount.map((num: number) => {
          const rdmKey = Math.random()
            .toString(36)
            .substring(7);
          return (
            <MenuItem key={rdmKey} value={num}>
              {num}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default UserCountSelect;
