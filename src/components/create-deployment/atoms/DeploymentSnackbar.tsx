import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { DeploymentStatusProps } from "../deploymentInterfaces";

function Alert(props: AlertProps): JSX.Element {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

/**
 * This function will display a snackbar for the deployment status
 */
const DeploymentSnackbar: React.FC<DeploymentStatusProps> = ({
  deploymentDispatch,
  deploymentState
}: DeploymentStatusProps) => {
  const { postError, showDeploymentSnackbar } = deploymentState;

  const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
    if (reason === "clickaway") {
      return;
    }
    deploymentDispatch({ type: "RESET_DEPLOYMENT_STATUS" });
  };

  return (
    <Snackbar
      open={showDeploymentSnackbar}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={postError ? "error" : "success"}>
        {postError
          ? "There was an error with one or more of the deployments."
          : "All deployments were successful."}
      </Alert>
    </Snackbar>
  );
};

export default DeploymentSnackbar;
