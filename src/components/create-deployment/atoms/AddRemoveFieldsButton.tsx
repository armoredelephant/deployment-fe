import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import FlexContainer from "../../_containers/FlexContainer";

interface AddRemoveFieldsButtonProps {
  deploymentIndex: number;
  text: string;
  add?: boolean;
  onClick: () => void;
}

const AddRemoveFieldsButton: React.FC<AddRemoveFieldsButtonProps> = ({
  add,
  onClick,
  text
}: AddRemoveFieldsButtonProps) => {
  return (
    <FlexContainer margin="auto" flow="row">
      <Button
        color="inherit"
        size="small"
        variant="outlined"
        type="button"
        startIcon={add ? <AddIcon /> : <RemoveIcon />}
        onClick={onClick}
      >
        {text}
      </Button>
    </FlexContainer>
  );
};

export default AddRemoveFieldsButton;
