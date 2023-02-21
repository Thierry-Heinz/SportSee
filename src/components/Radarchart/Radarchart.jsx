import PropTypes from "prop-types";

import { WrapperContainerWBckg, StyledResponsiveContainer } from "./style";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

/**
 * 
 * Display the User performances in the form of a Radar chart
 * @component
 * @param {array} data
 * @param {object} colors
 * @return (<Radarchart
                  sizes={{minWidth,minHeight,maxWidth,maxHeight}}
                  data={data}
                  colors={{textColor, lineColor, styleBackgroundColor, areaColor}}
                />)
 */

const Radarchart = ({ colors, data }) => {
  return (
    <WrapperContainerWBckg>
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
    </WrapperContainerWBckg>
  );
};

export default Radarchart;

Radarchart.propTypes = {
  data: PropTypes.array.isRequired,
  colors: PropTypes.object,
};
