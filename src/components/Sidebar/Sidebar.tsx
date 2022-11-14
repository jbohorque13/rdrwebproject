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
            Home
          </StyledLink>
        </StyledListRow>
        <StyledListRow>
          <StyledLink to="/dashboard">
            Dashboard
          </StyledLink>
        </StyledListRow>
        <StyledListRow>
          <StyledLink to="/person-to-group">
            Person to group
          </StyledLink>
        </StyledListRow>
      </StyledList>
    </StyledNav>
  )
}

export default Sidebar