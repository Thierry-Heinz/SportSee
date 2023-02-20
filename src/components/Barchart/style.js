import styled from "styled-components";
import { ResponsiveContainer } from "recharts";
import colors from "../../utils/colors";
import { device } from "../../utils/Devices";

export const Title = styled.h3`
  position: absolute;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: ${colors.darkgrey2};
  font-size: 16px;
  margin-left: 18px;
  margin-top: 18px;
  line-height: 18px;
  @media ${device.laptopL.mediaQuery} {
    width: 50%;
    margin-left: 30px;
    line-height: 24px;
    margin-top: 24px;
    font-size: 18px;
  }
`;

export const StyledResponsiveContainer = styled(ResponsiveContainer)`
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
  .recharts-default-legend {
    display: flex;
    justify-content: flex-end;
    gap: 15px;

    .recharts-legend-item-text {
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 12px;
      color: ${colors.mediumgrey} !important;
      margin-left: 6px;
    }

    @media ${device.laptopL.mediaQuery} {
      gap: 32px;
      .recharts-legend-item-text {
        font-size: 14px;
        margin-left: 12px;
      }
    }
  }
  .recharts-cartesian-grid-horizontal {
    line:nth-last-child(2),
    line:last-child {
      display: none;
    }
  }
  .recharts-bar-background-rectangle {
    display: none;
  }
  .custom-tooltip {
    background-color: ${colors.primary};
    border: none;
    outline: none;
    padding: 0px 5px;
    display: flex;
    flex-direction: column;
    gap: 0px;

    p.label {
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      color: ${colors.white};
      font-size: 10px;
    }

    @media ${device.laptopL.mediaQuery} {
      padding: 5px 10px;
      gap: 7px;
      p.label {
        font-size: 12px;
      }
    }
  }
`;
