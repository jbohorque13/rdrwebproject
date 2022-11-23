import React from 'react';
import { Column } from 'react-table';
import { Helmet } from 'react-helmet';
// Table
import Table from 'components/UI/Table';
import { IconEyeOpenSVG, IconEditSVG } from 'components/UI/Icon';
import Paginate from 'components/UI/Paginate';

import {
  StyledActionBodyCell,
  PageMainContainer,
  StyledTempText
} from './style';

import {leaderships} from 'utils/api';

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

interface IPaginate {
  current_page: number;
  has_next: boolean;
  next_page: number;
  has_previous: boolean;
  previous_page: number;
  page_size: number;
}

type IResponse = {
  statusCode: number;
  body: {
    data: LeaderShip[],
    page: IPaginate
  };
  headers: Array<any>;
}

const Dashboard: React.FC = () => {
  // useState
  const [leadershipsState, setLeadershipsState] = React.useState<LeaderShip[]>([]);
  // useEffect
  React.useEffect(() => {
    async function fn () {
      const response: IResponse = await leaderships();
      let leader: LeaderShip[] = Object.values(JSON.parse(response.body.data.toString() as string));
      setLeadershipsState([
        ...leader
      ]);
    }
    fn()
  }, []);
  // useCallback
  const handleGoFoward = React.useCallback(() => {
    console.log('Next ')
  }, []);

  const handleGoPrevious = React.useCallback(() => {
    console.log('Back ')
  }, []);

  // useMemo
  const data = React.useMemo<LeaderShip[]>(() => leadershipsState, [leadershipsState]);
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
        Header: 'dia del grupo',
        accessor: 'group_day'
      },
      {
        Header: 'Hora del grupo',
        accessor: 'group_hour'
      },
      {
        Header: 'Acciones',
        Cell: ({ row: { original } }: any) => {
          return (
            <StyledActionBodyCell> 
              <IconEyeOpenSVG title='Mirar informacion completa' /> 
              <IconEditSVG title='Editar estado del guia' />
            </StyledActionBodyCell>
          )
        }
      }
    ],
    []
  );

  return (
    <>
      <Helmet titleTemplate='Rdr Admin - Integracion'>
        <title> Integracion </title>
      </Helmet>
      <PageMainContainer>
        <StyledTempText>
          Lideres de todas las lineas
        </StyledTempText>
        <Table 
          data={data} 
          columns={columns} 
        />
        <Paginate 
          current_page={1}
          class_names='paginate' 
          handleGoFoward={handleGoFoward}
          handleGoPrevious={handleGoPrevious}
        />
      </PageMainContainer>
    </>
  )
}

export default React.memo(Dashboard);