import styled  from 'styled-components';
import { theme } from 'theme';

export const PageMainContainer = styled.div`
  flex: 1;
  padding: 20px 0;
  max-width: ${theme.pageContainerWidth}px;
`;

export const StyledTempText = styled.h2`
  color: ${theme.colors.black};
  padding: 10px 20px;
`;

export const StyledActionBodyCell = styled.div`
  text-align: left;
  cursor: pointer;
`;

export const StyledBodyCell = styled.div`
  text-align: left;
`;
