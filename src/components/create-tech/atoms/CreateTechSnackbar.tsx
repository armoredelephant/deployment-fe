import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { CreateTechStatusProps } from "../createTechInterfaces";

function Alert(props: AlertProps): JSX.Element {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

/**
 * This component displays a snackbar for the deployment status
 */

const CreateTechSnackbar: React.FC<CreateTechStatusProps> = ({
  statusDispatch,
  statusState
}: CreateTechStatusProps) => {
  const { postError, showSnackbar } = statusState;

  const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
    if (reason === "clickaway") {
      return;
    }
    statusDispatch({ type: "RESET_CREATE_TECH_STATUS" });
  };

  return (
    <Snackbar open={showSnackbar} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={postError ? "error" : "success"}>
        {postError
          ? "Unable to add a tech at this time."
          : "Tech was added successfully."}
      </Alert>
    </Snackbar>
  );
};

export default CreateTechSnackbar;
