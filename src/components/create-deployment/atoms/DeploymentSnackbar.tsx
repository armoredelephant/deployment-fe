import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

/**
 * State will DeploymentStatus state will need to be passed in
 * No inner state, the setOpen will also be added to postSuccess and postError dispatches
 * GeneratingForm & SubmitForm will both need to reset DeploymentStatus
 * handleClose will showSnackbar = false dispatch but will not reset error/success state
 */

/**
 * This function will display a snackbar for the deployment status
 */
const DeploymentSnackbar: React.FC = () => {
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    // dispatch({ type: "SET_SHOW_SNACKBAR" });
  };

  return (
    <Snackbar open={showSnackbar} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={postError ? "error" : "success"}>
        {postError
          ? "There was an error with one or more of the deployments."
          : "All deployments were successful."}
      </Alert>
    </Snackbar>
  );
};

export default DeploymentSnackbar;
