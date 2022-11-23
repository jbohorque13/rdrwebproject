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
    lastEvaluatedKey: LeaderShip,
    page: IPaginate
  };
  headers: Array<any>;
}

const Dashboard: React.FC = () => {
  // useState
  const [leadershipsState, setLeadershipsState] = React.useState<LeaderShip[]>([]);
  const [page, setPage] = React.useState<IPaginate>({
    current_page: 1,
    has_next: false,
    next_page: 1,
    has_previous: false,
    previous_page: 1,
    page_size: 4,
  });
  const [lastEvaluatedKey, setLastEvaluatedKey] = React.useState<LeaderShip | null>(null);
  const [refreshStatus, setRefreshStatus] = React.useState<boolean>(true);
  // Hooks
  const leadershipRequest = React.useCallback( async () => {
    try {
      setRefreshStatus(false);
      console.log(
        {
          current_page: page.current_page,
          page_size: page.page_size,
        }, 
        !!lastEvaluatedKey ? {
          LastEvaluatedKey: {
            ...lastEvaluatedKey
          }
        }: null
      );

      const response: IResponse = await leaderships(
        {
          current_page: page.current_page,
          page_size: page.page_size,
        }, 
        !!lastEvaluatedKey ? {
          LastEvaluatedKey: {
            full_name: lastEvaluatedKey.full_name,
            phone_number: lastEvaluatedKey.phone_number
          }
        } : null
      );
      // updated states
      setLeadershipsState(JSON.parse(response.body.data.toString()));
      setPage(JSON.parse(response.body.page.toString()));
      setLastEvaluatedKey(JSON.parse(response.body.lastEvaluatedKey.toString()));
      
    } catch (e) {
      console.error(e);
    }
  }, [page, setLastEvaluatedKey, setLeadershipsState, setPage, lastEvaluatedKey]);


  // useEffect
  React.useEffect(() => {
    async function fn () {
      if (refreshStatus){
        await leadershipRequest();
      }
    }
    fn()
  }, [refreshStatus, page]);

  // useCallback
  const handleGoFoward = React.useCallback(() => {
    if (lastEvaluatedKey && page.has_next) {
      setRefreshStatus(true);
      setPage({
        ...page,
        current_page: page.next_page
      });
    }
  }, [page, setPage, lastEvaluatedKey]);

  const handleGoPrevious = React.useCallback( async () => {
    if (lastEvaluatedKey && page.has_previous) {
      setRefreshStatus(true);
      setLastEvaluatedKey(null);
      setPage({
        ...page,
        current_page: page.previous_page
      });
    }
  }, [page, setPage, lastEvaluatedKey, setLastEvaluatedKey]);

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
          class_names='paginate' 
          {...page}
          handleGoFoward={handleGoFoward}
          handleGoPrevious={handleGoPrevious}
        />
      </PageMainContainer>
    </>
  )
}

export default React.memo(Dashboard);