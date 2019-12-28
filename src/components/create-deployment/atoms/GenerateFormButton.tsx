import React from "react";
import Button from "@material-ui/core/Button";
import { DeploymentOptionsProps } from "../deploymentInterfaces";
import FlexContainer from "../../_containers/FlexContainer";
import { generateInitialFormValues } from "../../_helper-functions/helpers";

const GenerateFormButton: React.FC<DeploymentOptionsProps> = ({
  optionsDispatch,
  optionsState
}: DeploymentOptionsProps) => {
  const handleFormCreation = async (): Promise<void> => {
    await optionsDispatch({ type: "RESET" });

    const initialFormValues = generateInitialFormValues({ optionsState });

    if (initialFormValues) {
      await optionsDispatch({
        type: "SET_INITIAL_FORM_VALUES",
        formValues: initialFormValues
      });
    }
  };

  return (
    <FlexContainer flow="row">
      <Button variant="contained" type="button" onClick={handleFormCreation}>
        Generate Form
      </Button>
    </FlexContainer>
  );
};

export default GenerateFormButton;
