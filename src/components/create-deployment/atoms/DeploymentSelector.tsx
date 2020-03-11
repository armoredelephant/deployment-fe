import React, { ReactChild } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { DeploymentCreateOptionsProps } from "../deploymentCreateInterfaces";
import PaginationItem from "@material-ui/lab/PaginationItem";

// pagination item will be either the EndUserFieldArray or blank adn disabled.
// count, if index is greater than count, then disabled.
// need a currentDeployment reducer.

interface Props extends DeploymentCreateOptionsProps {
  count: number;
}

const useStyles = makeStyles({
  root: {
    color: "rgb(223, 223, 223)",
    "&&:hover": {
      color: "#212121",
      backgroundColor: "rgb(178, 223, 219)"
    },
    "&&:selected": {
      color: "#212121",
      backgroundColor: "#b2dfdb"
    },
    "&$hover": {
      color: "#212121",
      backgroundColor: "rgb(178, 223, 219)"
    },
    "&$selected": {
      color: "#212121",
      backgroundColor: "#b2dfdb"
    }
  },
  selected: {}
});

const DeploymentSelector: React.FC<Props> = ({
  count,
  optionsDispatch,
  optionsState
}: Props) => {
  const { root, selected } = useStyles();
  const { deploymentToView } = optionsState;
  const handlePageChange = (event: unknown, value: number): void => {
    optionsDispatch({
      type: "SET_DEPLOYMENT_TO_VIEW",
      deploymentToView: value
    });
  };
  return (
    <Pagination
      count={count}
      page={deploymentToView}
      onChange={handlePageChange}
      showFirstButton
      showLastButton
      renderItem={(item: unknown): ReactChild => (
        <PaginationItem
          classes={{ root: root, selected: selected }}
          {...item}
        />
      )}
    />
  );
};

export default DeploymentSelector;
