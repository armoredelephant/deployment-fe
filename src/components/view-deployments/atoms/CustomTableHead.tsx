import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import { Column, GraphQLDeploymentData } from "../deploymentViewInterfaces";
import { makeStyles } from "@material-ui/core/styles";
import { Order } from "../../_helper-functions/tableHelpers";
import { columns } from "./tableHelpers";

const useStyles = makeStyles({
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  }
});

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof GraphQLDeploymentData
  ) => void;
  order: Order;
  orderBy: string;
}

function CustomTableHead(props: EnhancedTableProps): JSX.Element {
  const { order, orderBy, onRequestSort } = props;
  const classes = useStyles();
  const createSortHandler = (property: keyof GraphQLDeploymentData) => (
    event: React.MouseEvent<unknown>
  ): void => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((column: Column, index: number) => (
          <TableCell
            key={`${column.id}-${index}`}
            align={column.align}
            padding={column.disablePadding ? "none" : "default"}
            sortDirection={orderBy === column.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === column.id}
              direction={orderBy === column.id ? order : "asc"}
              onClick={createSortHandler(column.id)}
            >
              {column.label}
              {orderBy === column.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default CustomTableHead;
