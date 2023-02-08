import styled from "styled-components";
import colors from "../../utils/colors";

export const Header = styled.header`
  flex: 0 0 100%;
  height: ${(props) => props.navBarHeight}px;
  background-color: ${colors.secondary};
  display: flex;
  padding: 28px 89px 28px 18px;
  box-sizing: border-box;
  justify-content: space-between;
  gap: 149px;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 178px;
    height: 61px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    flex: 1;
    margin: 0;
    list-style: none;
    li button {
      color: ${colors.white};
      text-decoration: none;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 24px;
      background-color: transparent;
      border: none;
    }
  }
`;
