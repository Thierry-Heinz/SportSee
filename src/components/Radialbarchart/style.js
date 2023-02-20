import styled from "styled-components";
import { ResponsiveContainer } from "recharts";
import colors from "../../utils/colors";
import { device } from "../../utils/Devices";

export const WrapperContainerWBckg = styled.div`
  background-color: ${colors.lightgrey};
  position: relative;
  width: 100%;
`;

export const Title = styled.h3`
  z-index: 300;
  position: absolute;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: ${colors.darkgrey2};
  font-size: 16px;
  margin-left: 18px;
  margin-top: 18px;
  line-height: 18px;
  width: 50%;
  @media ${device.laptopL.mediaQuery} {
    margin-left: 30px;
    line-height: 24px;
    margin-top: 24px;
    font-size: 18px;
  }
`;

export const StyledResponsiveContainer = styled(ResponsiveContainer)`
  border-radius: 5px;
  position: relative;
  z-index: 300;

  .whiteCircle {
    z-index: 100;
  }
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
    line-height: 1;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: ${colors.darkgrey};
    margin: 0;
  }

  span {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 16px;
    color: ${colors.mediumgrey};
    line-height: 1;
  }

  @media ${device.laptopL.mediaQuery} {
    h4 {
      font-size: 26px;
      line-height: 1.5;
    }
    span {
      font-size: 18px;
      line-height: 1.5;
    }
  }
`;
