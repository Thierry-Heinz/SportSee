import ChartWrapperContainer from "../ChartWrapperContainer";

import { StyledResponsiveContainer } from "./style";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

const Radarchart = ({ sizes, colors, data }) => {
  return (
    <ChartWrapperContainer sizes={sizes}>
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
            dataKey="subject"
          />
          <Radar
            name="performances"
            dataKey="A"
            stroke={colors.areaColor}
            fill={colors.areaColor}
            fillOpacity="0.7"
          />
        </RadarChart>
      </StyledResponsiveContainer>
    </ChartWrapperContainer>
  );
};

export default Radarchart;
