import PropTypes from "prop-types";
import ChartWrapperContainer from "../ChartWrapperContainer";

import { StyledResponsiveContainer, Title, WeBckg } from "./style";
import { LineChart, Line, XAxis, Tooltip } from "recharts";

/**
 *
 * Display a custom tooltip
 * @component
 * @param {boolean} active
 * @param {Array} payload
 * @returns  {HTMLElement} div.custom-tooltip
 */
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

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};

/**
 * Display the User Averag Sessions in form of a linechart within a seven day week
 * @component
 * @param {object} sizes
 * @param {array} data
 * @param {object} colors
 * @return ( <Linechart
                  sizes={{minWidth,minHeight,maxWidth,maxHeight}}
                  data={data}
                  colors={{tooltipColor, lineColor, backgroundColor}}
                />)
 */
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

Linechart.propTypes = {
  sizes: PropTypes.object,
  data: PropTypes.array.isRequired,
  colors: PropTypes.object,
};
