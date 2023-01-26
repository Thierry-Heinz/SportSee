import { RadialBarChartContainer, StyledResponsiveContainer } from "./style";
import { getScaledValue } from "./utils";
import { RadialBarChart, RadialBar, Legend } from "recharts";
import { useState, useEffect } from "react";

const style = {
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  lineHeight: "24px",
};

const Radialbarchart = ({ data }) => {
  let scaledValue = getScaledValue(data[0].value, 0, 100, 200, -200);
  return (
    <RadialBarChartContainer>
      <h3>Score</h3>
      <StyledResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="80%"
          startAngle={200}
          endAngle={scaledValue}
          barSize={10}
          data={data}
        >
          <RadialBar clockWise={true} dataKey="value" />

          <Legend
            iconSize={0}
            layout="vertical"
            verticalAlign="middle"
            align="center"
            wrapperStyle={style}
          />
        </RadialBarChart>
      </StyledResponsiveContainer>
    </RadialBarChartContainer>
  );
};

export default Radialbarchart;
