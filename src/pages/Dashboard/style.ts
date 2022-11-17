import styled  from 'styled-components';
import { IconEditSVG, IconEyeClosedSVG } from 'components/UI/Icon';
import { theme } from 'theme';

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
