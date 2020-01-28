import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import FlexContainer from "../../_containers/FlexContainer";
// import {
// OptionsDispatchContext,
// OptionsStateContext
// } from "../CreateDeploymentPage";
// import { IndividualDeploymentItem } from "../deploymentInterfaces";

interface AddSingleDeploymentProps {
  deploymentIndex: number;
  onClick: () => void;
}

const AddSingleDeploymentButton: React.FC<AddSingleDeploymentProps> = ({
  // deploymentIndex,
  onClick
}: AddSingleDeploymentProps) => {
  // const optionsDispatch = useContext(OptionsDispatchContext);
  // const optionsState = useContext(OptionsStateContext);

  // const addSingleDeployment = async (): Promise<void> => {
  //   const newDeploymentItems: IndividualDeploymentItem = {
  //     product: "",
  //     modelType: "",
  //     serialNumber: ""
  //   };
  //   console.log(optionsState?.formValues, deploymentIndex);
  //   if (optionsState) {
  //     if (optionsState.formValues.length && optionsDispatch) {
  //       const deployments = Array.from(optionsState.formValues);
  //       const length = deployments[deploymentIndex].items.length;
  //       deployments[deploymentIndex] = {
  //         endUser: "",
  //         ticketNumber: "",
  //         items: []
  //       };
  //       for (let i = 0; i <= length; i++)
  //         deployments[deploymentIndex].items.push(newDeploymentItems);

  //       await optionsDispatch({
  //         type: "SET_INDEX_TO_UPDATE",
  //         indexToUpdate: deploymentIndex
  //       });

  //       await optionsDispatch({
  //         type: "SET_INITIAL_FORM_VALUES",
  //         formValues: deployments
  //       });
  //     }
  //   }
  // };

  return (
    <FlexContainer margin="auto" flow="row">
      <Button
        color="inherit"
        size="small"
        variant="outlined"
        type="button"
        startIcon={<AddIcon />}
        onClick={onClick}
      >
        Add Deployment
      </Button>
    </FlexContainer>
  );
};

export default AddSingleDeploymentButton;
