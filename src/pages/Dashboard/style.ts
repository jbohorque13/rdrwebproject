import styled  from 'styled-components';

export const StyledWrapper = styled.div`
  max-width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
`;

export const StyledTable = styled.table`
    width: 100%;
    border-spacing: 0;
    font-size: 0.875rem; // 14px
    line-height: 1rem; // 16px;
`;

export const StyledTableHead = styled.thead`
  display: flex;
  flex-direction: row;
`;

export const StyledTableHeadRow = styled.tr`
  height: 48px;
`;

export const StyledTableHeadCell = styled.th`
  padding: 16px 8px;
`;

export const StyledTableBody = styled.tbody`
  display: flex;
  flex-direction: row;
  height: 100px;
  color: 'grey';
`;

export const StyledTableBodyRow = styled.tr`
  min-height: 10px;
  height: auto;
  padding: 0 40px;
`;
export const StyledTableBodyCell = styled.td<{ $withOverFlow?: boolean }>`
  padding: 12px 20px;
`;