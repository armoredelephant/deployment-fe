import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { DeploymentCreateOptionsAction } from "../../../immer/actionTypes";
import { DeploymentCreateOptions } from "../../../immer/stateInterfaces";
import { GraphQLTech } from "../deploymentCreateInterfaces";
import FormHelperText from "@material-ui/core/FormHelperText";

interface TechSelectProps {
  optionsState: DeploymentCreateOptions;
  optionsDispatch: React.Dispatch<DeploymentCreateOptionsAction>;
  techList: GraphQLTech[];
}

const TechSelect: React.FC<TechSelectProps> = ({
  optionsDispatch,
  optionsState,
  techList
}: TechSelectProps) => {
  const handleTechSelect = async (
    event: React.ChangeEvent<{ value: unknown }>
  ): Promise<void> => {
    const [touched, setTouched] = useState(false);
    const techName = event.target.value as string;
    const selectedTech = await techList.find(
      (tech: GraphQLTech) => techName === tech.name
    );

    const techId = selectedTech?.id;

    await optionsDispatch({
      type: "SET_TECH",
      techName: techName,
      techId: techId
    });
  };

  const handleTouched = (): void => {
    // setTouched(true);
  };
  // handle touch inner state

  // const { requiredField } = optionsState;
  console.log(techList);

  return (
    <></>
    // <FormControl>
    //   <InputLabel id="tech-name">Deployment Tech</InputLabel>
    //   <Select
    //     labelId="tech-name"
    //     value={optionsState.techName}
    //     onTouchStart={handleTouched}
    //     onChange={handleTechSelect}
    //     MenuProps={{
    //       getContentAnchorEl: null,
    //       anchorOrigin: { vertical: "bottom", horizontal: "left" }
    //     }}
    //   >
    //     {techList.map((tech: GraphQLTech, index: number) => {
    //       const { name } = tech;
    //       return (
    //         <MenuItem key={`options-${tech}-${index}`} value={name}>
    //           {name}
    //         </MenuItem>
    //       );
    //     })}
    //   </Select>
    //   <FormHelperText error={requiredField}>
    //     You must select a deployment tech.
    //   </FormHelperText>
    // </FormControl>
  );
};

export default TechSelect;
