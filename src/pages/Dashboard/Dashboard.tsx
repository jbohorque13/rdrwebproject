import React from 'react';
import { Column, useTable } from 'react-table';
import {useParams} from 'react-router-dom';
import {
  StyledWrapper,
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledTableHeadRow,
  StyledTableHeadCell,
  StyledTableBodyRow,
  StyledTableBodyCell
} from './style';

interface LeaderShip {
  fullName: string;
  email: string;
  phone: string;
  coordinator?: string;
  dayGroup: string;
  hourStarted: string;
  multiLeaderShip?: boolean;
  agePromedium?: string;
  typeGroup?: string;
  numberDiscipules?: number | string;
  receivedNewPersonFromPointConection?: boolean;
  typeAssistant?: string;
  placeMeeting?: string;
  status?: 'guia' | 'ayudante' | 'coordinador';
  completingListAssistentStatus?: boolean;
  timeChurch?: number | string;
  address?: string;
  locality?: string;
  reunionCongregation?: string;
  ministery?: string;
  ageOwn: string | number;
}

const Dashboard: React.FC = () => {
  // Hook
  const {accessToken} = useParams();
  // useMemo
  const data = React.useMemo<LeaderShip[]>(() => [
    {
      fullName: 'Josue',
      email: '23',
      phone: '1158676125',
      coordinator: 'Vicente Loli',
      ageOwn: '29',
      dayGroup: 'Viernes',
      hourStarted: '21:00',
    }
  ], []);

  const columns: Column<LeaderShip>[] = React.useMemo(
    () => [
      {
        Header: 'Nombre y apellido',
        accessor: 'fullName'
      },
      {
        Header: 'Email',
        accessor: 'email'
      }
    ],
    []
  );
  
  console.log(data, accessToken, columns);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable<LeaderShip>({ columns, data });

  return (
    <StyledWrapper>
      <StyledTable {...getTableProps()}>
        <StyledTableHead>
        {headerGroups.map(headerGroup => (
        <StyledTableHeadRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <StyledTableHeadCell
                {...column.getHeaderProps()}
              >
                {column.render('Header')}
              </StyledTableHeadCell>
            ))}
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
                        $withOverFlow={true}
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
  )
}

export default React.memo(Dashboard);