import styled from "styled-components";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { describeArc } from "../../utils/svgUtils";

const data = [
  {
    name: "18-24",
    value: 200,
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const StyledResponsiveContainer = styled.div`
  height: 263px !important;
  width: 258px !important;
  flex: 1;
  background-color: #fbfbfb;
  border-radius: 5px;
  position: relative;
  h1 {
    z-index: 50;
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(220deg);
    transform-origin: center;
    z-index: 20;
    & circle {
      position: absolute;
      top: 50%;
      left: 50%;
    }
  }
`;

const Radialbarchart = ({ data }) => {
  return (
    <StyledResponsiveContainer width="100%" height="100%">
      <h1>Score: {data} % </h1>
      <svg viewBox="0 0 100% 100%" preserveAspectRatio="none">
        <circle r="100" cx={258 / 2} cy={263 / 2} fill="white" />
        <path
          id="arc1"
          width="100%"
          height="100%"
          r="80"
          strokeLinecap="round"
          fill="none"
          stroke="#FF0000"
          strokeWidth="10"
          d={describeArc(258 / 2, 263 / 2, 100, 0, 360 * (data / 100))}
        />
      </svg>
    </StyledResponsiveContainer>
  );
};

export default Radialbarchart;
