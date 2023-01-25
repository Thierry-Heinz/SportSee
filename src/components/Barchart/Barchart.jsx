import styled from "styled-components";
import PropTypes from "prop-types";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  width: 100% !important;
  height: 500px !important;
`;

/**
 *
 * @returns {HTMLElement}
 */
export default function Barchart({ data }) {
  console.log(data);
  return (
    <StyledResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 20,
        }}
        barGap={"5%"}
        barCategoryGap={"20%"}
        barSize={7}
      >
        <CartesianGrid strokeDasharray="2" vertical={false} />
        <Tooltip />
        <Legend verticalAlign="top" align="right" margin={{ bottom: 20 }} />
        <XAxis
          dataKey="day"
          tickLine={false}
          padding={{ left: -45, right: -45 }}
        />
        <YAxis
          yAxisId={"right"}
          tickLine={false}
          dataKey="kilogram"
          orientation="right"
          axisLine={false}
          domain={["dataMin - 10", "dataMax + 5"]}
          margin={{ top: 50, right: 20 }}
        />
        <YAxis
          yAxisId={"left"}
          axisLine={false}
          tickLine={false}
          domain={["dataMin", 450]}
          dataKey="calories"
          orientation="left"
          hide={true}
        />
        <Bar
          yAxisId="right"
          dataKey="kilogram"
          name="Kilogrammes (kg)"
          legendType="circle"
          fill="#8884d8"
          background={{ fill: "#eee" }}
          radius={[3.5, 3.5, 0, 0]}
        />
        <Bar
          yAxisId="left"
          radius={[3.5, 3.5, 0, 0]}
          dataKey="calories"
          legendType="circle"
          name="Calories brûlées (kCal)"
          fill="#82ca9d"
        />
      </BarChart>
    </StyledResponsiveContainer>
  );
}

Barchart.propTypes = {};
