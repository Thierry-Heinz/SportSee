import styled from "styled-components";
import colors from "../../utils/colors";

export const StyledWelcome = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${colors.black};
  padding: 200px;
  h1 {
    color: ${colors.white};
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 48px;
    margin: 0;
    line-height: 1;
  }
  .links {
    display: flex;
    gap: 15px;
    padding-top: 30px;
  }

  a {
    color: ${colors.darkgrey};
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 18px;
    text-decoration: none;
    padding: 5px 10px;
    background-color: ${colors.white};
    border-radius: 5px;
    transition: all 0.35s ease-in-out;
    &:hover {
      color: ${colors.white};
      background-color: ${colors.primary};
    }
  }
`;
