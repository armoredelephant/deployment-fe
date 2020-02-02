import React from "react";
import Button from "@material-ui/core/Button";
import { DeploymentCreateOptionsProps } from "../deploymentCreateInterfaces";
import FlexContainer from "../../_containers/FlexContainer";
import { generateInitialFormValues } from "../../_helper-functions/helpers";

/**
 * Button used to generate the initial deployment form.
 */

const GenerateFormButton: React.FC<DeploymentCreateOptionsProps> = ({
  optionsDispatch,
  optionsState
}: DeploymentCreateOptionsProps) => {
  const handleFormCreation = async (): Promise<void> => {
    await optionsDispatch({ type: "RESET" });

    const initialFormValues = await generateInitialFormValues({ optionsState });

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
