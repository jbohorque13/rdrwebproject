import styled from "styled-components";
import { IconArrowRightSVG, IconArrowLeftSVG } from "components/UI/Icon";
export const StyledWraper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledIconArrowRight = styled(IconArrowRightSVG)`
  width: 40px;
  height: 30px;
  cursor: pointer;
`;
export const StyledIconArrowLeft = styled(IconArrowLeftSVG)`
  width: 40px;
  height: 30px;
  cursor: pointer;
`;

export const StyledContentNumber = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
`;
