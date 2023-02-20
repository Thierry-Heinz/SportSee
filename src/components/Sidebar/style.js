import styled from "styled-components";
import colors from "../../utils/colors";

import { device } from "../../utils/Devices";

export const Aside = styled.aside`
  flex: 0 0 ${(props) => props.sideBarWidth}px;
  background-color: ${colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 50px;
  padding-bottom: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media ${device.laptopL.mediaQuery} {
    gap: 164px;
  }
`;

export const IconButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const CopyRight = styled.div`
  position: relative;

  height: 170px;

  .rotate {
    position: absolute;
    width: 100%;
    height: 100%;
    /* top: 50%;
    left: 50%; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: ${colors.white};
    transform: rotate(-90deg);
    /* transform-origin: top left; */
    /* width: max-content; */

    white-space: nowrap;
  }
`;
