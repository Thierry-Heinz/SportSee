import styled from "styled-components";
import { ResponsiveContainer } from "recharts";
import colors from "../../utils/colors";

export const WrapperContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
`;

export const Title = styled.h3`
  position: absolute;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: ${colors.darkgrey2};
  margin-left: 32px;
  line-height: 24px;
  margin-top: 24px;
`;

export const StyledResponsiveContainer = styled(ResponsiveContainer)`
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
  .recharts-default-legend {
    display: flex;
    justify-content: flex-end;
    gap: 32px;

    .recharts-legend-item-text{
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: ${colors.mediumgrey} !important;
        margin-left: 12px;
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
    padding:5px 10px;
    display:flex;
    flex-direction: column;
    gap: 7px;

    p.label {
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
        color: ${colors.white};
        font-size: 12px;
      }
    }
  }
`;
