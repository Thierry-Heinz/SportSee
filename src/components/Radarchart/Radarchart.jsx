import { StyledResponsiveContainer } from "./style";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

const Radarchart = ({ colors, data }) => {
  return (
    <StyledResponsiveContainer
      styleBackgroundColor={colors.styleBackgroundColor}
      textColor={colors.textColor}
      width="100%"
      height="100%"
    >
      <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
        <PolarGrid stroke={colors.lineColor} />
        <PolarAngleAxis
          stroke={colors.lineColor}
          fill={colors.lineColor}
          dataKey="category"
        />
        <Radar
          name="performance"
          dataKey="value"
          stroke={colors.areaColor}
          fill={colors.areaColor}
          fillOpacity="0.7"
        />
      </RadarChart>
    </StyledResponsiveContainer>
  );
};

export default Radarchart;
