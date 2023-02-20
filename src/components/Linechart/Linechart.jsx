import PropTypes from "prop-types";
import {
  WrapperContainerWBckg,
  StyledResponsiveContainer,
  Title,
  WeBckg,
} from "./style";
import { LineChart, Line, XAxis, Tooltip } from "recharts";
import { useState } from "react";

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
const Linechart = ({ data, colors }) => {
  const [mousePosX, setMousePosX] = useState();
  const handleMouseMove = () => {
    const dotRect = document
      .querySelector(".recharts-active-dot circle")
      .getBoundingClientRect();
    const containerRect = document
      .querySelector(".lineChartContainer")
      .getBoundingClientRect();
    const xPos = dotRect.left - containerRect.left + 8;
    setMousePosX(xPos);
  };

  return (
    <WrapperContainerWBckg className="lineChartContainer">
      <Title>Durée moyenne des sessions</Title>
      <WeBckg xPos={mousePosX} />
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
          onMouseMove={handleMouseMove}
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
    </WrapperContainerWBckg>
  );
};

export default Linechart;

Linechart.propTypes = {
  data: PropTypes.array.isRequired,
  colors: PropTypes.object,
};
