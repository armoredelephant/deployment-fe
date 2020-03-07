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
    "&&:selected": {
      backgroundColor: "rgba(0, 0, 0 , 0.18)"
    },
    "&$selected": {
      backgroundColor: "rgba(0, 0, 0, 0.18)"
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
