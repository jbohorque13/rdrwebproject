import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  background-color: darkGrey;
  max-width: 290px;
  width: 100%;
`;

export const StyledList = styled.ul`
  list-style-type: none;
`;

export const StyledListRow = styled.li`
  margin: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: black;
`;