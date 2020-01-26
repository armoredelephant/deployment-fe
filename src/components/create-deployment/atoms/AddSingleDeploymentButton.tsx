import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import FlexContainer from "../../_containers/FlexContainer";
import {
  OptionsDispatchContext,
  OptionsStateContext
} from "../CreateDeploymentPage";
import { IndividualDeploymentItem } from "../deploymentInterfaces";

interface AddSingleDeploymentProps {
  deploymentIndex: number;
}

const AddSingleDeploymentButton: React.FC<AddSingleDeploymentProps> = ({
  deploymentIndex
}: AddSingleDeploymentProps) => {
  const optionsDispatch = useContext(OptionsDispatchContext);
  const optionsState = useContext(OptionsStateContext);

  const addSingleDeployment = (): void => {
    const newDeploymentItems: IndividualDeploymentItem = {
      product: "",
      modelType: "",
      serialNumber: ""
    };
    console.log(optionsState?.formValues, deploymentIndex);
    if (optionsState) {
      if (optionsState.formValues.length && optionsDispatch) {
        const deployments = Array.from(optionsState.formValues);
        const length = deployments[deploymentIndex].items.length;
        deployments[deploymentIndex] = {
          endUser: "",
          ticketNumber: "",
          items: []
        };
        for (let i = 0; i <= length; i++)
          deployments[deploymentIndex].items.push(newDeploymentItems);

        // ADD INDEX TO UPDATE TO STATE WITH A DISPATCH, THEN THE USEEFFECT CAN LISTEN FOR IT?

        optionsDispatch({
          type: "SET_INITIAL_FORM_VALUES",
          formValues: deployments
        });
      }
    }
  };

  return (
    <FlexContainer margin="auto" flow="row">
      <Button
        color="inherit"
        size="small"
        variant="outlined"
        type="button"
        startIcon={<AddIcon />}
        onClick={addSingleDeployment}
      >
        Add Deployment
      </Button>
    </FlexContainer>
  );
};

export default AddSingleDeploymentButton;
