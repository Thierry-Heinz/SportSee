import styled from "styled-components";
import { ResponsiveContainer } from "recharts";

export const RadialBarChartContainer = styled.div`
  position: relative;

  & h3 {
    position: absolute;
    top: 24px;
    left: 30px;
    z-index: 200;
    line-height: 1;
    padding: 0;
    margin: 0;
  }
`;

export const StyledResponsiveContainer = styled(ResponsiveContainer)`
  height: 283px !important;
  width: 288px !important;
  background-color: #fbfbfb;
  border-radius: 5px;
  position: relative;
`;
