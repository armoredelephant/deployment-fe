import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { DeploymentOptionsProps } from "../deploymentInterfaces";
import { makeStyles, createStyles } from "@material-ui/core/styles";

/**
 * Select field for CreateDeploymentOptions
 */

const useStyles = makeStyles(() =>
  createStyles({
    formControl: {
      minWidth: 100
    }
  })
);

const UserCountSelect: React.FC<DeploymentOptionsProps> = ({
  optionsState,
  optionsDispatch
}: DeploymentOptionsProps) => {
  const classes = useStyles();

  const handleUserCountOption = (
    event: React.ChangeEvent<{ value: unknown }>
  ): void => {
    const count = event.target.value as number;
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
    <FormControl className={classes.formControl}>
      <InputLabel id="user-count">User count</InputLabel>
      <Select
        labelId="user-count"
        value={optionsState.userCount}
        onChange={handleUserCountOption}
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
