import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { querySelector } from "../../_helper-functions/querySelector";
import { columns } from "../atoms/tableHelpers";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { Column, GraphQLDeploymentData } from "../deploymentViewInterfaces";
import SpinnerContainer from "../../_containers/SpinnerContainer";
import TablePagination from "@material-ui/core/TablePagination";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  container: {
    maxHeight: 800
  }
});

const tableColumns = columns;

const AllDeploymentsTable: React.FC = () => {
  const { loading, error, data } = useQuery(querySelector("All"));
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(30);

  // display error

  // display loading

  const handleChangePage = (event: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if (loading) return <SpinnerContainer />;

  const { findDeployments } = data;

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader size="small" aria-label="sticky table">
          <TableHead>
            <TableRow>
              {tableColumns.map((column: Column, index) => (
                <TableCell
                  key={`${column.id}-${index}`}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {findDeployments
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: GraphQLDeploymentData, index: number) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={`${row.ticketNumber}-${index}`}
                  >
                    {tableColumns.map((column: Column, index: number) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={`${column.label}-${index}`}
                          align={column.align}
                        >
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[30, 50, 100]}
        component="div"
        count={findDeployments.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default AllDeploymentsTable;
