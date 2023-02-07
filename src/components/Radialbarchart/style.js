import styled from "styled-components";
import { ResponsiveContainer } from "recharts";
import colors from "../../utils/colors";

export const WrapperContainer = styled.div`
  position: relative;
  height: 283px !important;
  width: 288px !important;

  background-color: #fbfbfb;
`;

export const Title = styled.h3`
  z-index: 300;
  position: absolute;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: ${colors.darkgrey2};
  margin-left: 30px;
  line-height: 24px;
  margin-top: 24px;
  width: 50%;
`;

export const StyledResponsiveContainer = styled(ResponsiveContainer)`
  border-radius: 5px;
  position: relative;
  z-index: 300;
`;

const RenderLegend = ({ className, value }) => {
  return (
    <div className={className}>
      <h4>{`${value}%`}</h4>
      <span>de votre objectif</span>
    </div>
  );
};

export const RenderLegendStyled = styled(RenderLegend)`
  z-index: 300;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30%;
  transform: translate(-50%, -50%);
  text-align: center;

  h4 {
    line-height: 1.5;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 26px;
    color: ${colors.darkgrey};
    margin: 0;
  }

  span {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: ${colors.mediumgrey};
    line-height: 1.5;
  }
`;

export const WhiteCircle = styled.div`
  z-index: 100;
  position: absolute;
  border-radius: 100%;
  width: 66%;
  height: 66%;
  top: 50%;
  left: 50%;
  background-color: ${colors.white};

  transform: translate(-50%, -50%);
`;
