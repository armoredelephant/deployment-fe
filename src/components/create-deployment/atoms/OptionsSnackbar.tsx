import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { DeploymentCreateOptionsDispatch } from "../../../immer/actionTypes";

function Alert(props: AlertProps): JSX.Element {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface Props {
  showSnackbar: boolean;
  optionsDispatch: DeploymentCreateOptionsDispatch;
}

/**
 * This component displays a snackbar for the deployment status
 */

const OptionsSnackbar: React.FC<Props> = ({
  showSnackbar,
  optionsDispatch
}: Props) => {
  const handleClose = (event?: React.SyntheticEvent, reason?: string): void => {
    if (reason === "clickaway") {
      return;
    }
    if (optionsDispatch) {
      optionsDispatch({ type: "RESET_QUERY_ERROR" });
    }
  };

  return (
    <Snackbar open={showSnackbar} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error">
        There was a problem with fetching the techs. Please refresh to try
        again.
      </Alert>
    </Snackbar>
  );
};

export default OptionsSnackbar;
