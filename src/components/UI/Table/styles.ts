import styled  from 'styled-components';
import { IconArrowDown } from 'components/UI/Icon';
import {theme} from 'theme';

export const StyledContainer = styled.div`
  display: block;
  max-width: 100%;
  padding: 10px 0;
  background: ${theme.colors.white};
`;

export const StyledWrapper = styled.div`
  max-width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
`;

export const StyledTable = styled.table`
    width: 100%;
    border-spacing: 0;
    font-family: ${theme.fontNames.inter};
    font-size: 0.875rem; // 14px
    line-height: 1rem; // 16px;
`;

export const StyledTableHead = styled.thead`
  display: flex;
  flex-direction: row;
  color: ${theme.colors.black};
`;

export const StyledTableHeadRow = styled.tr`
  height: 48px;
  background: ${theme.colors.grey2};
  font-weight: ${theme.fontWeights.normal};
  flex-grow: 1;
`;

export const StyledTableHeadCell = styled.th`
  text-align: left;
  font-weight: ${theme.fontWeights.semiBold};
  padding: 16px 8px;
  width: 180px;
`;

export const StyledTableBody = styled.tbody`
  color: ${theme.colors.darkGrey};
  display: flex;
  flex-direction: column;
  height: 490px;
  
`;

export const StyledTableBodyRow = styled.tr`
  min-height: 40px;
  height: auto;
  padding: 0 4px;
  border-bottom: 2px solid ${theme.colors.grey3};
`;

export const StyledTableBodyCell = styled.td<{ $withOverFlow?: boolean }>`
  padding: 12px 20px;
  padding-left: 8px;
  text-overflow: ellipsis;
  min-width: 160px;
  max-width: 180px;
  text-align: left;
  ${({ $withOverFlow }) => ($withOverFlow ? `
    overflow: hidden;
  ` : 'display: flex; justify-content: flex-end;')}
`;

export const StyledIconDropdown = styled(IconArrowDown)`
  color: ${theme.colors.black};
`;