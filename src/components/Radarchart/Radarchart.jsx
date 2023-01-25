import styled from "styled-components";
import {
  Radar,
  RadarChart,
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
} from "recharts";

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  // height: 258px !important;
  // width: 263px !important;
  flex: 1;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 5px;
  & .recharts-polar-grid-angle {
    display: none;
  }
  & .recharts-polar-angle-axis-tick line {
    display: none;
  }
  & .recharts-polar-angle-axis-tick text {
    fill: ${(props) => props.lineColor};
    color: ${(props) => props.lineColor};
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 12px;
  }
`;

const Radarchart = ({ lineColor, backgroundColor, areaColor, data }) => {
  return (
    <StyledResponsiveContainer
      backgroundColor={backgroundColor}
      textColor={lineColor}
      width="100%"
      height="100%"
    >
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid stroke={lineColor} />
        <PolarAngleAxis stroke={lineColor} fill={lineColor} dataKey="subject" />
        <Radar
          name="performance"
          dataKey="value"
          stroke={areaColor}
          fill={areaColor}
          fillOpacity="0.7"
        />
      </RadarChart>
    </StyledResponsiveContainer>
  );
};

export default Radarchart;
