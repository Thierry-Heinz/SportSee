import styled from "styled-components";
import colors from "../../utils/colors";

import { hexToRgb } from "../../utils/colors";

export const InfoCard = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 32px;
  gap: 24px;
  background-color: #fbfbfb;
  border-radius: 5px;
  max-height: 124.25px;
  .icon {
    border-radius: 6px;
    background-color: rgba(${(props) => hexToRgb(props.backgroundColor)}, 10%);
    // opacity: 10%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    & img {
      width: 15px;
    }
  }

  h2 {
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 20px;
    color: ${colors.secondary};
  }
  h3 {
    margin: 0;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: ${colors.mediumgrey};
  }
`;
