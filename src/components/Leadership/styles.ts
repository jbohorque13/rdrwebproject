import styled from "styled-components";
import {theme} from 'theme';
// components
import { IconCloseSVG } from 'components/UI/Icon';

export const PageMainContainer = styled.div`
  left: 250px;
  top: 0;
  width: 100%;
  position: absolute;
  height: 100%;
  background-color: ${theme.colors.white};
  padding-left:10px;
`;

export const Styledtitle = styled.h2``;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  padding:10px;
`;

export const StyledText = styled.p`
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-right: 20px;
`;

export const StyledIconClose = styled(IconCloseSVG)`
  position: absolute;
  left: ${window.innerWidth - 300}px;
  top: 10px;
  cursor: pointer;
`;