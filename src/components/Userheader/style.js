import styled from "styled-components";
import colors from "../../utils/colors";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 41px;
  margin-bottom: 77px;
`;

export const Title = styled.h1`
  color: ${colors.black};
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 48px;
  margin: 0;
  line-height: 1;

  span {
    color: ${(props) => props.firstNameColor};
  }
`;

export const SubTitle = styled.h2`
  margin: 0;
  line-height: 1;
  color: ${colors.black};
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 18px;
`;
