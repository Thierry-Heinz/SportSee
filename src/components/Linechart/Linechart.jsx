import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  height: 258px !important;
  width: 263px !important;
`;

const Linechart = ({ data }) => {
  return (
    <StyledResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="day" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="min"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </StyledResponsiveContainer>
  );
};

export default Linechart;
