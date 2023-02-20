import PropTypes from "prop-types";

import {
  WrapperContainerWBckg,
  StyledResponsiveContainer,
  Title,
  RenderLegendStyled,
} from "./style";
import { getScaledValue } from "./utils";
import { RadialBarChart, RadialBar } from "recharts";
import colors from "../../utils/colors";

/**
 * Display the User Score in the form of a Radial bar chart
 * @param {object} sizes 
 * @param {array} data
 * @return (    <Radialbarchart
                  data={data}
                 
                sizes={{minWidth,minHeight,maxWidth,maxHeight}}
                />)
 */

const Radialbarchart = ({ data }) => {
  let scaledValue = getScaledValue(data[0].value, 0, 100, 200, -200);
  return (
    <WrapperContainerWBckg>
      <Title>Score</Title>

      <StyledResponsiveContainer
        backgroundColor={colors.backgroundColor}
        width="100%"
        height="100%"
      >
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="70%"
          outerRadius="70%"
          startAngle={200}
          endAngle={scaledValue}
          barSize={10}
          data={data}
        >
          <circle
            className="whiteCircle"
            cx="50%"
            cy="50%"
            r="30%"
            stroke="none"
            fill={colors.white}
          />

          <RadialBar
            clockWise={true}
            dataKey="value"
            cornerRadius={5}
            background="black"
          />
        </RadialBarChart>
      </StyledResponsiveContainer>
      <RenderLegendStyled value={data[0].value} />
    </WrapperContainerWBckg>
  );
};

export default Radialbarchart;

Radialbarchart.propTypes = {
  sizes: PropTypes.object,
  data: PropTypes.array.isRequired,
};
