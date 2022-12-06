import React from 'react';
// import {Column} from 'react-table';
import {Helmet} from 'react-helmet';
import { Column } from 'react-table';

// Table
import Table from 'components/UI/Table';
import { IconEyeOpenSVG, IconEditSVG } from 'components/UI/Icon';
// Utils 
import { getPersonsPreached } from 'utils/api/index';
// Styles
import {
  PageMainContainer,
  StyledActionBodyCell,
  StyledTempText,
  StyledBodyCell
} from './style';
import Paginate from 'components/UI/Paginate';

interface Person_Preached {
  person_preached_id: number;
  email: string;
  name: string;
  lastname: string;
  phone_number: string;
  age: string;
  genre: string;
  day_to_connecting: string;
  comments: string;
}

interface Page {
  current_page: number;
  page_size: number;
  has_next: boolean;
  next_page: number;
  has_previous: boolean;
  previous_page: number;
}

type IResponse = {
  statusCode: string;
  body: {
    data: Array<Person_Preached>,
    page: Page
  };
  headers: Array<any>;
}

const Person = () => {
  // states
  const [refreshStatus, setRefreshStatus] = React.useState<boolean>(true);
  const [persons_preached, setPersonsPreached] = React.useState<Person_Preached[]>([]);
  const [page, setPage] = React.useState<Page>({
    current_page: 1,
    page_size: 10,
    has_next: false,
    next_page: 1,
    has_previous: false,
    previous_page: 1
  });
  // function
  const personsPreachedRequest = async () => {
    try {
      setRefreshStatus(false);

      const data: IResponse = await getPersonsPreached({
        current_page: page.current_page,
        page_size: page.page_size
      });
      setPersonsPreached(JSON.parse(data.body.data.toString()));
      setPage(JSON.parse(data.body.page.toString()));
    } catch (e) {
      console.error(e)
    }
  }

  React.useEffect(() => {
    async function main () {
      if (refreshStatus) {
        await personsPreachedRequest();
      }
    }
    main();
  }, [refreshStatus]);

  // useCallback
  const handleGoFoward = React.useCallback(async () => {
    if (page.has_next) {
      setRefreshStatus(true);
      setPage({
        ...page,
        current_page: page.next_page,
        next_page: page.next_page + 1,
        previous_page: page.previous_page + 1
      })
    }
  }, [page, setPage, setRefreshStatus]);

  // useCallback
  const handleGoPrevious = React.useCallback(async () => {
    if (page.has_previous) {
      setRefreshStatus(true);
      setPage({
        ...page,
        current_page: page.previous_page,
        previous_page: page.previous_page - 1,
        next_page: page.next_page - 1
      })
    }
  }, [page, setPage, setRefreshStatus]);

  // useMemo
  const data = React.useMemo<Person_Preached[]>(
    () => persons_preached, [persons_preached]
  );
  const columns: Column<Person_Preached>[] = React.useMemo(
    () => [
      {
        Header: 'Nombre Completo',
        Cell: ({row: {original}} : any) => {
          return (
            <StyledBodyCell>
              {original?.name} {original?.lastname}
            </StyledBodyCell>
          )
        }
      },
      {
        Header: 'Email',
        accessor: 'email'
      },
      {
        Header: 'Edad',
        Cell: ({row: {original}} : any) => {
          return (
            <StyledBodyCell>
              {original?.age} Años 
            </StyledBodyCell>
          )
        }
      },
      {
        Header: 'Teléfono',
        accessor: 'phone_number'
      },
      {
        Header: 'dia de conexión',
        accessor: 'day_to_connecting'
      },
      {
        Header: 'Estado',
        Cell: ({row: {original}} : any) => {
          return (
            <StyledBodyCell>
              En progreso a consolidar
            </StyledBodyCell>
          )
        }
      },
      {
        Header: 'Acciones',
        Cell: ({ row: { original } }: any) => {
          return (
            <StyledActionBodyCell> 
              <IconEyeOpenSVG title='Mirar información completa' /> 
            </StyledActionBodyCell>
          )
        }
      }
    ], []
  )
  return (
    <>
      <Helmet titleTemplate='Rdr Admin - Integración'>
        <title> Integración </title>
      </Helmet>
      <PageMainContainer>
        <StyledTempText>
          Personas a consolidar
        </StyledTempText>
        <Table
          key={2}
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

export default Person