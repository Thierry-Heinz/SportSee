import styled from "styled-components";
import colors from "../../utils/colors";

import { device } from "../../utils/Devices";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${device.laptop.gap};
  margin-bottom: 50px;

  @media ${device.laptopL.mediaQuery} {
    gap: ${device.laptopL.gap};
    margin-bottom: 77px;
  }
`;

export const Title = styled.h1`
  color: ${colors.black};
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 40px;
  margin: 0;
  line-height: 1;

  span {
    color: ${(props) => props.firstNameColor};
  }
  @media ${device.laptopL.mediaQuery} {
    font-size: 48px;
  }
`;

export const SubTitle = styled.h2`
  margin: 0;
  line-height: 1;
  color: ${colors.black};
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 16px;
  @media ${device.laptopL.mediaQuery} {
    font-size: 18px;
  }
`;
