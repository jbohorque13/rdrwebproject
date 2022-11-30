import React from 'react'
import {Helmet} from 'react-helmet';
// styles 
import {
  PageMainContainer,
  Styledtitle,
  StyledContent,
  StyledText
} from './styles';

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
  many_type_church?: number | string;
  address?: string;
  locality?: string;
  service_church_assisted?: string;
  ministery_services_particitiped?: string;
  age: string | number;
}

const Leadership: React.FC<LeaderShip> = (leadership : LeaderShip) => {
  return (
    <>
      <Helmet titleTemplate='Rdr Admin - Integración'>
        <title>Integración</title>
      </Helmet>
      <PageMainContainer>
        <StyledContent>
          {/* Fullname */}
          <Styledtitle>
            Nombre completo
          </Styledtitle> 
          <StyledText> 
            {leadership?.full_name}
          </StyledText>
          {/* Email */}
          <Styledtitle>
            Email
          </Styledtitle> 
          <StyledText> 
            {leadership?.email}
          </StyledText>
        </StyledContent>
        
        <StyledContent>
          {/* Edad */}
          <Styledtitle>
            Edad
          </Styledtitle> 
          <StyledText> 
            {leadership?.age}
          </StyledText>
          {/* Numero de télefono */}
          <Styledtitle>
            Numero de télefono
          </Styledtitle> 
          <StyledText> 
            {leadership?.phone_number}
          </StyledText>
        </StyledContent>
        
        {/* Grupo info */}
        <StyledContent>
          <Styledtitle>
            Día de grupo de conexión
          </Styledtitle> 
          <StyledText> 
            {leadership?.group_day}
          </StyledText>
          <Styledtitle>
            Horario de grupo
          </Styledtitle> 
          <StyledText> 
            {leadership?.group_hour}
          </StyledText>
        </StyledContent>
        {/* Dirección */}
        <StyledContent>
          <Styledtitle>
          Dirección
          </Styledtitle> 
          <StyledText> 
            {leadership?.address}
          </StyledText>
        </StyledContent>
        {/* Localidad */}
        <StyledContent>
          <Styledtitle> Localidad </Styledtitle> 
          <StyledText> {leadership?.locality} </StyledText>
        </StyledContent>
        {/* Lugar del grupo */}
        <StyledContent>
          <Styledtitle> Lugar del grupo </Styledtitle> 
          <StyledText> {leadership?.group_place} </StyledText>
        </StyledContent>
        {/* Tipo de grupo */}
        <StyledContent>
          <Styledtitle> Tipo de grupo </Styledtitle> 
          <StyledText> {leadership?.type_group} </StyledText>
        </StyledContent>
        {/* ¿Hace cuánto asistís a la iglesia? */}
        <StyledContent>
          <Styledtitle>  Tiempo de congregacion en la Iglesia </Styledtitle> 
          <StyledText> {leadership?.many_type_church} </StyledText>
        </StyledContent>
        {/* ¿Participas en algún ministerio? ¿Cuál? */}
        <StyledContent>
          <Styledtitle>  Ministerio en el que partipa </Styledtitle> 
          <StyledText> {leadership?.ministery_services_particitiped} </StyledText>
        </StyledContent>
        {/* Sos guia o ayudante o coordinador? */}
        <StyledContent>
          <Styledtitle>  Rol en la Iglesia </Styledtitle> 
          <StyledText> {leadership?.status_leadership} </StyledText>
        </StyledContent>
        {/* Coordinador */}
        <StyledContent>
          <Styledtitle>  Coordinador </Styledtitle> 
          <StyledText> {leadership?.coordination} </StyledText>
        </StyledContent>
        {/* Rango de edades de los discipulos */}
        <StyledContent>
          <Styledtitle>  Rango de edades de los discípulos  </Styledtitle> 
          <StyledText> {leadership?.promedium_ages} </StyledText>
        </StyledContent>
        {/* Nos encontramos */}
        <StyledContent>
          <Styledtitle>  Nos encontramos de forma  </Styledtitle> 
          <StyledText> {leadership?.class_type} </StyledText>
        </StyledContent>
        {/* Si es presencial donde? */}
        <StyledContent>
          <Styledtitle>  Nos encontramos en  </Styledtitle> 
          <StyledText> {leadership?.group_place} </StyledText>
        </StyledContent>
        {/* Cantidad regular de chicos que participan en tu grupo? (en promedio) */}
        <StyledContent>
          <Styledtitle>  Cantidad regular de chicos que participan en tu grupo  </Styledtitle> 
          <StyledText> {leadership?.many_people_in_group} </StyledText>
        </StyledContent>
        {/* Si todavia no estas completando tu lista de asistencia del grupo de manera online, necesitas ayuda? */}
        <StyledContent>
          <Styledtitle> ¿Precisa ayuda para hacer la asistencia online? </Styledtitle> 
          <StyledText> {leadership?.assisted_assistance}, necesito ayuda. </StyledText>
        </StyledContent>
      </PageMainContainer>
    </>
  )
}

export default React.memo(Leadership);
