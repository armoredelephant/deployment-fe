import React from "react";
import { DeploymentOptionsProps } from "../deploymentInterfaces";
import CustomFormControlLabel from "../../custom-fields/CustomFormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

const PrimaryMachineRadio: React.FC<DeploymentOptionsProps> = ({
  optionsDispatch,
  optionsState
}: DeploymentOptionsProps) => {
  const handlePrimaryMachineOption = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const machine = (event.target as HTMLInputElement).value;
    optionsDispatch({ type: "SET_PRIMARY_MACHINE", primaryMachine: machine });
  };
  const machines: string[] = ["desktop", "igel", "laptop"];
  return (
    <FormControl>
      <FormLabel color="primary">Primary machine for majority?</FormLabel>
      <RadioGroup
        aria-label="primary-machine"
        name="primary-machine"
        value={optionsState.primaryMachine}
        onChange={handlePrimaryMachineOption}
        row
      >
        {machines.map(machine => {
          const rdmKey = Math.random()
            .toString(36)
            .substring(7);
          return (
            <CustomFormControlLabel
              control={<Radio color="default" />}
              key={rdmKey}
              label={machine}
              labelPlacement="bottom"
              value={machine}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default PrimaryMachineRadio;
