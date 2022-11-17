import React from 'react';
import { useTable } from 'react-table';
// styles
import {
  StyledContainer,
  StyledWrapper,
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledTableHeadRow,
  StyledTableHeadCell,
  StyledTableBodyRow,
  StyledTableBodyCell,
  StyledIconDropdown
} from './styles';

interface TableProps {
  data: Array<any>;
  columns: Array<any>
}

const Table = ({ data, columns }: TableProps) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  return (
    <StyledContainer>

      <StyledWrapper>
        <StyledTable {...getTableProps()}>
          <StyledTableHead>
          {headerGroups.map(headerGroup => (
          <StyledTableHeadRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => {
                console.log('column', column);
                return (

                  <StyledTableHeadCell
                    {...column.getHeaderProps()}
                    $isAction={column.Header === 'Acciones'}
                  >
                    {column.render('Header')}
                    <StyledIconDropdown />
                  </StyledTableHeadCell>
                )
              })}
            </StyledTableHeadRow>
          ))}
            </StyledTableHead>
            
            <StyledTableBody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row);
                return (
                  <StyledTableBodyRow {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return (
                        <StyledTableBodyCell
                          $withOverFlow
                          {...cell.getCellProps()}
                        >
                          {cell.render('Cell')}
                        </StyledTableBodyCell>
                      )
                    })}
                  </StyledTableBodyRow>
                )
              })}
            </StyledTableBody>
        </StyledTable>
      </StyledWrapper>
    </StyledContainer>
  )
}

export default Table