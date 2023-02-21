import styled from "styled-components";
import { device } from "../../utils/devices";

export const StyledDashboardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

export const Main = styled.main`
  flex: 1;
  height: calc(100% - ${(props) => props.navBarHeight}px);

  box-sizing: border-box;
  display: flex;
`;

export const UserDashboard = styled.div`
  padding: 53px 53px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${device.laptopL.mediaQuery} {
    padding: 68px 107px;
  }
`;

export const ChartsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 200px;
  grid-template-rows: 1fr 1fr;
  grid-column: span 1;
  gap: ${device.laptop.gap};

  @media ${device.laptopL.mediaQuery} {
    gap: ${device.laptopL.gap};
    grid-template-columns: 1fr 1fr 258px;
  }
`;

export const ChartsRow = styled.div`
  position: relative;
  display: flex;
  gap: ${device.laptop.gap};
  flex-wrap: nowrap;
  justify-content: space-evenly;
  grid-area: ${(props) => {
    return `
  ${props.area.rowStart} /
  ${props.area.colStart} /
      ${props.area.rowEnd} / span
      ${props.area.colEnd}
  `;
  }};

  @media ${device.laptopL.mediaQuery} {
    gap: ${device.laptopL.gap};
  }
`;

export const Keyinfos = styled.div`
  flex: 0 0 200px;
  display: flex;
  flex-direction: column;
  gap: ${device.laptop.gap};
  grid-area: ${(props) => {
    return `
    ${props.area.rowStart} /
    ${props.area.colStart} /
    span ${props.area.rowEnd} /
    ${props.area.colEnd}
    `;
  }};
  @media ${device.laptopL.mediaQuery} {
    flex: 0 0 258px;
    gap: ${device.laptopL.gap};
  }
`;
