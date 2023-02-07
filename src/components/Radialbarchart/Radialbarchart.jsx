import {
  WrapperContainer,
  StyledResponsiveContainer,
  Title,
  RenderLegendStyled,
  WhiteCircle,
} from "./style";
import { getScaledValue } from "./utils";
import { RadialBarChart, RadialBar } from "recharts";

const Radialbarchart = ({ data }) => {
  let scaledValue = getScaledValue(data[0].value, 0, 100, 200, -200);
  return (
    <WrapperContainer>
      <Title>Score</Title>
      <RenderLegendStyled value={data[0].value} />
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
        </RadialBarChart>
      </StyledResponsiveContainer>
      <WhiteCircle />
    </WrapperContainer>
  );
};

export default Radialbarchart;
