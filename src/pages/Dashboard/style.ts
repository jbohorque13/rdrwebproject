import styled  from 'styled-components';
import { IconEditSVG, IconEyeClosedSVG } from 'components/UI/Icon';
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

export const StyledIconEditSVG = styled(IconEditSVG)`
  color: ${theme.colors.darkGrey};
  width: 40px;
  height: 40px;
`;
export const StyledIconEyeClosedSVG = styled(IconEyeClosedSVG)`
  color: ${theme.colors.darkGrey};
  width: 40px;
  height: 40px;
`;

export const StyledActionBodyCell = styled.div`
  text-align: left;
  cursor: pointer;
`;
