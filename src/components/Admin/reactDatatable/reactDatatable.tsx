import React, { useMemo } from 'react';
import { useTable, usePagination, useFilters, useSortBy, Column, TableInstance } from 'react-table';
import { TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter, TablePagination, Paper, makeStyles } from '@material-ui/core';
import { BsSortDown } from "react-icons/bs";
import { BsSortUp } from "react-icons/bs";

// Define types for the table data
interface Data {
  name: string;
  age: number;
}

// Custom filter component
const DefaultColumnFilter: React.FC<any> = ({
  column: { filterValue, setFilter },
}) => {
  return (
    <TextField
      value={filterValue || ''}
      onChange={e => setFilter(e.target.value || undefined)}
      placeholder={`Search...`}
    />
  );
};

// Custom pagination component
const TablePaginationActions: React.FC<any> = ({
  pageOptions, pageIndex, gotoPage, previousPage, nextPage, canPreviousPage, canNextPage
}) => {
  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          rowsPerPageOptions={[10]}
          count={pageOptions.length * 10} // Adjust the total count accordingly
          rowsPerPage={10}
          page={pageIndex}
          onPageChange={(event, newPage) => gotoPage(newPage)}
          backIconButtonProps={{ onClick: previousPage, disabled: !canPreviousPage }}
          nextIconButtonProps={{ onClick: nextPage, disabled: !canNextPage }}
        />
      </TableRow>
    </TableFooter>
  );
};

const useStyles = makeStyles({
  tableContainer: {
    width: '100%',
  },
});

const ReactTableComponent: React.FC<{ columns: Column<Data>[]; data: Data[] }> = ({ columns, data }) => {
  const classes = useStyles();

  const defaultColumn = useMemo(() => ({
    Filter: DefaultColumnFilter,
  }), []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state: { pageIndex },
    gotoPage,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
  }: TableInstance<Data> = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <TableContainer component={Paper} className={`${classes.tableContainer} mb-5`}>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {column.render('Header')}
                    <span className='ms-2'>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? <BsSortDown />
                          : <BsSortUp />
                        : ''}
                    </span>
                  </div>
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
        <TablePaginationActions
          pageOptions={pageOptions}
          pageIndex={pageIndex}
          gotoPage={gotoPage}
          previousPage={previousPage}
          nextPage={nextPage}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
        />
      </Table>
    </TableContainer>
  );
};

export default ReactTableComponent;
