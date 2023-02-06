import { ResponsiveContainer } from "recharts";
import styled from "styled-components";

export const StyledResponsiveContainer = styled(ResponsiveContainer)`
  height: 258px !important;
  width: 263px !important;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 5px;
`;
