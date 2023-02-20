import styled from "styled-components";
import colors from "../../utils/colors";

import { hexToRgb } from "../../utils/colors";

import { device } from "../../utils/Devices";

export const InfoCard = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 16px;
  gap: ${device.laptop.gap};
  max-height: 100px;
  background-color: #fbfbfb;
  border-radius: 5px;
  .icon {
    border-radius: 6px;
    background-color: rgba(${(props) => hexToRgb(props.backgroundColor)}, 10%);
    // opacity: 10%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      width: 15px;
    }
  }

  h2 {
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: ${colors.secondary};
  }
  h3 {
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 12px;
    color: ${colors.mediumgrey};
  }

  @media ${device.laptopL.mediaQuery} {
    padding: 32px;
    gap: ${device.laptopL.gap};
    max-height: 124.25px;

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 14px;
    }
  }
`;
