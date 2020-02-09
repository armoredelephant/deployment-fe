import React from "react";
import CustomFormControlLabel from "../../custom-fields/CustomFormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { FieldAttributes, useField } from "formik";

/**
 * Custom radio button component used within the CreateDeploymentOptions component.
 */

const PrimaryMachineRadio: React.FC<FieldAttributes<{
  primaryMachine: string;
}>> = ({
  primaryMachine,
  ...props
}: FieldAttributes<{ primaryMachine: string }>) => {
  const [field] = useField<{}>(props);

  const machines: string[] = ["desktop", "igel", "laptop"];
  console.log(primaryMachine);

  return (
    <FormControl>
      <FormLabel color="primary">Primary machine for majority?</FormLabel>
      <RadioGroup
        {...field}
        aria-label="primary-machine"
        value={primaryMachine}
        row
      >
        {machines.map((machine, index: number) => {
          return (
            <CustomFormControlLabel
              control={<Radio color="default" />}
              key={`${machine}-${index}`}
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
