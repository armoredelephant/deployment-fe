import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    minHeight: 400,
    maxHEight: 750
  },
  spinnerProgress: {
    color: "rgb(223,223,223)",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
});

const SpinnerContainer: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress size={40} className={classes.spinnerProgress} />
    </div>
  );
};

export default SpinnerContainer;
