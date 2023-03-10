import styled from "styled-components";
import { ResponsiveContainer } from "recharts";
import { device } from "../../utils/devices";

export const WrapperContainerWBckg = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledResponsiveContainer = styled(ResponsiveContainer)`
  background-color: ${(props) => props.styleBackgroundColor};
  border-radius: 5px;
  & .recharts-polar-grid-angle {
    display: none;
  }
  & .recharts-polar-angle-axis-tick line {
    display: none;
  }
  & .recharts-polar-angle-axis-tick text {
    fill: ${(props) => props.textColor};
    color: ${(props) => props.textColor};
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 9px;
    @media ${device.laptopL.mediaQuery} {
      font-size: 12px;
    }
  }
`;
