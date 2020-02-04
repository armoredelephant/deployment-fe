import React, { useEffect, useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { DeploymentViewStatusDispatch } from "../../../immer/actionTypes";

function Alert(props: AlertProps): JSX.Element {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface Props {
  message: string;
  viewDispatch?: DeploymentViewStatusDispatch;
}

/**
 * This component displays a snackbar for the deployment status
 */

const ViewDeploymentsSnackbar: React.FC<Props> = ({
  message,
  viewDispatch
}: Props) => {
  const [display, setDisplay] = useState(false);
  const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
    if (reason === "clickaway") {
      return;
    }
    setDisplay(false);
    if (viewDispatch) {
      viewDispatch({ type: "RESET_DEPLOYMENT_VIEW_STATUS" });
    }
  };

  useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <Snackbar open={display} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ViewDeploymentsSnackbar;
