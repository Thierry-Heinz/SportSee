import ChartWrapperContainer from "../ChartWrapperContainer";

import {
  WrapperContainer,
  StyledResponsiveContainer,
  Title,
  WeBckg,
} from "./style";
import { LineChart, Line, XAxis, Tooltip } from "recharts";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

const Linechart = ({ sizes, data, colors }) => {
  return (
    <ChartWrapperContainer sizes={sizes}>
      <Title>Durée moyenne des sessions</Title>
      <WeBckg />
      <StyledResponsiveContainer
        backgroundColor={colors.backgroundColor}
        width="100%"
        height="100%"
      >
        <LineChart
          width="100%"
          height="100%"
          data={data}
          margin={{
            top: 20,
            right: 10,
            left: 10,
            bottom: 20,
          }}
        >
          <XAxis
            dataKey="day"
            tickLine={false}
            padding={{ left: 10, right: 10 }}
            axisLine={false}
            tickMargin={20}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: "none" }} />
          <Line
            type="monotone"
            dataKey="min"
            stroke={colors.lineColor}
            activeDot={{ r: 8, stroke: "transparent", fill: colors.lineColor }}
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </StyledResponsiveContainer>
    </ChartWrapperContainer>
  );
};

export default Linechart;
