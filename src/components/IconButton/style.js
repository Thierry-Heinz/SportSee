import styled from "styled-components";
import colors from "../../utils/colors";

export const Button = styled.button`
  border-radius: 5px;
  width: 64px;
  height: 64px;
  background-color: ${colors.lightgrey};
  &:hover {
    cursor: pointer;
  }
`;
