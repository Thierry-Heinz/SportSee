import PropTypes from "prop-types";
import ChartWrapperContainer from "../ChartWrapperContainer";

import { Title, StyledResponsiveContainer } from "./style";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

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
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="label">{`${payload[1].value}Kcal`}</p>
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
 * 
 * Display the User daily activity for a week in the form of a Bar chart
 * @component
 * @param {object} sizes
 * @param {array} data
 * @param {object} colors
 * @return ( <Barchart
                sizes={{minWidth,minHeight,maxWidth,maxHeight}}
                data={data}
                colors={{dataKey1Color,dataKey2Color,titleColor,textColor,backgroundColor}}
              />)
 */
export default function Barchart({ sizes, data, colors }) {
  return (
    <ChartWrapperContainer sizes={sizes}>
      <Title>Activité quotidienne</Title>

      <StyledResponsiveContainer backgroundColor={colors.backgroundColor}>
        <BarChart
          width="100%"
          height="100%"
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
          barGap={"5%"}
          barCategoryGap={"20%"}
          barSize={8}
        >
          <CartesianGrid
            strokeDasharray="2"
            vertical={false}
            padding={{ top: 10, bottom: 10 }}
            margin={{ top: 50, right: 20 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            verticalAlign="top"
            align="right"
            margin={{ top: 10, bottom: 20 }}
            padding={{ top: 10, bottom: 10 }}
            height={60}
          />
          <XAxis
            dataKey="day"
            tickLine={false}
            padding={{ left: 10, right: 10 }}
            axisLine={false}
          />
          <YAxis
            yAxisId={"right"}
            tickLine={false}
            dataKey="kilogram"
            orientation="right"
            axisLine={false}
            domain={["dataMin - 10", "dataMax + 5"]}
            padding={{ top: 10, bottom: 10 }}
            margin={{ top: 50, right: 20 }}
          />
          <YAxis
            yAxisId={"left"}
            axisLine={false}
            tickLine={false}
            domain={["dataMin", 450]}
            dataKey="calories"
            orientation="left"
            padding={{ top: 10, bottom: 10 }}
            hide={true}
          />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            name="Kilogrammes (kg)"
            legendType="circle"
            fill={colors.dataKey1Color}
            background={{ fill: "#eee" }}
            radius={[3.5, 3.5, 0, 0]}
            margin={{ top: 10, left: 10, right: 10, bottom: 10 }}
          />
          <Bar
            yAxisId="left"
            radius={[3.5, 3.5, 0, 0]}
            dataKey="calories"
            legendType="circle"
            name="Calories brûlées (kCal)"
            fill={colors.dataKey2Color}
          />
        </BarChart>
      </StyledResponsiveContainer>
    </ChartWrapperContainer>
  );
}

Barchart.propTypes = {
  sizes: PropTypes.object,
  data: PropTypes.array.isRequired,
  colors: PropTypes.object,
};
