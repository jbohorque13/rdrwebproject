import React from 'react';
import {
  StyledNav,
  StyledList,
  StyledListRow,
  StyledLink
} from './styles';

const Sidebar = () => {
  return (
    <StyledNav>
      <StyledList>
        <StyledListRow>
          <StyledLink to='/'>
            Inicio
          </StyledLink>
        </StyledListRow>
        <StyledListRow>
          <StyledLink to="/dashboard">
            Guías
          </StyledLink>
        </StyledListRow>
        <StyledListRow>
          <StyledLink to="/person-to-group">
            Personas a consolidar
          </StyledLink>
        </StyledListRow>
      </StyledList>
    </StyledNav>
  )
}

export default Sidebar