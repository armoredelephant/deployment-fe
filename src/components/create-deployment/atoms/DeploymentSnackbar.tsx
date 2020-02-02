import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { DeploymentStatusProps } from "../deploymentCreateInterfaces";

function Alert(props: AlertProps): JSX.Element {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

/**
 * This component displays a snackbar for the deployment status
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
    deploymentDispatch({ type: "RESET_DEPLOYMENT_CREATE_STATUS" });
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
          : "All deployments were created successfully."}
      </Alert>
    </Snackbar>
  );
};

export default DeploymentSnackbar;
