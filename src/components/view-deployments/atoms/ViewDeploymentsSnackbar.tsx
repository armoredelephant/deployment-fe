import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { DeploymentViewStatusProps } from "../deploymentViewInterfaces";

function Alert(props: AlertProps): JSX.Element {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

/**
 * This component displays a snackbar for the deployment status
 */

const ViewDeploymentsSnackbar: React.FC<DeploymentViewStatusProps> = ({
  viewDispatch,
  viewState
}: DeploymentViewStatusProps) => {
  const { queryError, showSnackbar } = viewState;

  const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
    if (reason === "clickaway") {
      return;
    }
    viewDispatch({ type: "RESET_DEPLOYMENT_VIEW_STATUS" });
  };

  return (
    <Snackbar open={showSnackbar} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={queryError ? "error" : "success"}>
        {queryError
          ? "There was an error while fetching the deployments."
          : "Deployment list has been updated."}
      </Alert>
    </Snackbar>
  );
};

export default ViewDeploymentsSnackbar;
