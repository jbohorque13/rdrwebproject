import React from 'react';
import { Column, useTable } from 'react-table';
// Table
import Table from 'components/UI/Table';

import {
  StyledWrapper,
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledTableHeadRow,
  StyledTableHeadCell,
  StyledTableBodyRow,
  StyledTableBodyCell,
  StyledIconDropdown
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

  return (
    <Table 
      data={data} 
      columns={columns} 
    />
  )
}

export default React.memo(Dashboard);