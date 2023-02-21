import { ResponsiveContainer } from "recharts";
import styled from "styled-components";

import colors from "../../utils/colors";
import { device } from "../../utils/devices";

export const WrapperContainerWBckg = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;

  border-radius: 5px;
`;

export const WeBckg = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => props.xPos}px;
  width: 100%;
  height: 100%;
  background-color: #e60000;
`;

export const Title = styled.h3`
  width: 100%;
  position: absolute;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: ${colors.white};
  font-size: 16px;
  margin-left: 18px;
  margin-top: 18px;
  padding-right: 20px;
  line-height: 18px;
  width: 100%;
  opacity: 80%;
  z-index: 20;

  @media ${device.laptopL.mediaQuery} {
    margin-left: 30px;
    line-height: 24px;
    margin-top: 24px;
    font-size: 18px;
  }
`;

export const StyledResponsiveContainer = styled(ResponsiveContainer)`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 5px;

  .recharts-cartesian-axis {
    .recharts-text {
      fill: #ffffff;
    }
    .recharts-tooltip-cursor {
      stroke: ${colors.primary}!important;
    }
  }

  .recharts-line-curve {
    opacity: 80%;
  }
  .custom-tooltip {
    background-color: ${colors.white};
    border: none;
    padding: 0px 5px;
    display: flex;
    flex-direction: column;
    gap: 0px;

    p.label {
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      color: ${colors.black};
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
