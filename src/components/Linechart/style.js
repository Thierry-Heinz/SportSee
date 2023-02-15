import { ResponsiveContainer } from "recharts";
import styled from "styled-components";

import colors from "../../utils/colors";

export const WrapperContainerWBckg = styled.div`
  position: relative;
  width: 100%;
`;

export const WeBckg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 30%;
  height: 100%;
  background-color: #e60000;
  border-radius: 0 5px 5px 0;
`;

export const Title = styled.h3`
  position: absolute;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: ${colors.white};
  margin-left: 34px;
  line-height: 24px;
  margin-top: 29px;
  width: 50%;
  opacity: 80%;
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
    padding: 5px 10px;
    display: flex;
    flex-direction: column;
    gap: 7px;

    p.label {
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      color: ${colors.black};
      font-size: 12px;
    }
  }
`;
