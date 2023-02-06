import { StyledResponsiveContainer } from "./style";
import { LineChart, Line, XAxis, Tooltip } from "recharts";

const Linechart = ({ data, colors }) => {
  return (
    <StyledResponsiveContainer
      backgroundColor={colors.backgroundColor}
      width="100%"
      height="100%"
    >
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: -20,
          left: -20,
          bottom: 20,
        }}
      >
        <XAxis
          dataKey="day"
          tickLine={false}
          padding={{ left: 10, right: 10 }}
          axisLine={false}
        />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="min"
          stroke={colors.lineColor}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </StyledResponsiveContainer>
  );
};

export default Linechart;
