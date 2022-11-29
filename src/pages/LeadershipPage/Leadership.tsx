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
  many_time_church?: number | string;
  address?: string;
  locality?: string;
  service_church_assisted?: string;
  ministery?: string;
  age: string | number;
}

const Leadership: React.FC<LeaderShip> = (leadership: LeaderShip) => {
  return (
    <>
      <Helmet titleTemplate='Rdr Admin - Integración'>
        <title>Integración</title>
      </Helmet>
      <PageMainContainer>
        {/* Fullname */}
        <StyledContent>
          <Styledtitle>
            Nombre completo:
          </Styledtitle> 
          <StyledText> 
            {leadership?.full_name}
          </StyledText>
        </StyledContent>
        {/* Email */}
        <StyledContent>
          <Styledtitle>
            Email
          </Styledtitle> 
          <StyledText> 
            {leadership?.email}
          </StyledText>
        </StyledContent>
        {/* Edad */}
        <StyledContent>
          <Styledtitle>
            Edad
          </Styledtitle> 
          <StyledText> 
            {leadership?.age}
          </StyledText>
        </StyledContent>
        {/* Numero de télefono */}
        <StyledContent>
          <Styledtitle>
            Numero de télefono
          </Styledtitle> 
          <StyledText> 
            {leadership?.phone_number}
          </StyledText>
        </StyledContent>
        {/* Dia de grupo */}
        <StyledContent>
          <Styledtitle>
            Día de grupo
          </Styledtitle> 
          <StyledText> 
            {leadership?.group_day}
          </StyledText>
        </StyledContent>
        {/* Horario de grupo */}
        <StyledContent>
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
      </PageMainContainer>
    </>
  )
}

export default React.memo(Leadership);
