import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

function Alert(props: AlertProps): JSX.Element {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

/**
 * This component displays a snackbar for the deployment status
 */
const ViewDeploymentsSnackbar: React.FC = () => {
  const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
    if (reason === "clickaway") {
      return;
    }
  };

  return (
    <Snackbar open={true} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        There was an error while fetching the deployments.
      </Alert>
    </Snackbar>
  );
};

export default ViewDeploymentsSnackbar;
