import React from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface SpinnerProps {
  isSubmitting: boolean;
  handleClick?: () => void;
  title: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center"
    },
    wrapper: {
      margin: theme.spacing(1),
      position: "relative"
    },
    buttonProgress: {
      color: "rgb(223,223,223)",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12
    }
  })
);

const SpinnerButton: React.FC<SpinnerProps> = ({
  isSubmitting,
  handleClick,
  title
}: SpinnerProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        {handleClick ? (
          <Button
            variant="contained"
            onClick={handleClick}
            disabled={isSubmitting}
          >
            {title}
          </Button>
        ) : (
          <Button variant="contained" type="submit" disabled={isSubmitting}>
            {title}
          </Button>
        )}
        {isSubmitting && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    </div>
  );
};

export default SpinnerButton;
