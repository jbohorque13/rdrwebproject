import React from 'react';
import { Column, useTable } from 'react-table';
// Table
import Table from 'components/UI/Table';

import {
  StyledTableHeadRowCustom
} from './style';


interface LeaderShip {
  full_name: string;
  phone_number: string;
  email: string;
  coordination?: string;
  group_day: string;
  group_hour: string;
  many_leadership?: boolean;
  promedium_ages?: string;
  type_group?: string;
  many_people_in_group?: number | string;
  received_peole_pount_conection?: boolean;
  class_type?: string;
  group_place?: string;
  status_leadership?: 'guia' | 'ayudante' | 'coordinador';
  assisted_assistance?: boolean;
  many_time_church?: number | string;
  address?: string;
  locality?: string;
  service_church_assisted?: string;
  ministery?: string;
  age: string | number;
}

const Dashboard: React.FC = () => {
  // useMemo
  const data = React.useMemo<LeaderShip[]>(() => [
    {
      full_name: 'Josue',
      email: 'josuebohorquezc@gmail.com',
      phone_number: '1158676125',
      coordination: 'Vicente Loli',
      age: '29',
      group_day: 'Viernes',
      group_hour: '21:00',
    }
  ], []);

  const columns: Column<LeaderShip>[] = React.useMemo(
    () => [
      {
        Header: 'Nombre y apellido',
        accessor: 'full_name'
      },
      {
        Header: 'telefono',
        accessor: 'phone_number'
      },
      {
        Header: 'Email',
        accessor: 'email',
        
      },
      {
        Header: 'Coordinacion',
        accessor: 'coordination'
      },
      {
        Header: 'Que dia da el grupo',
        accessor: 'group_day'
      },
      {
        Header: 'A que hora da el grupo',
        accessor: 'group_hour'
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