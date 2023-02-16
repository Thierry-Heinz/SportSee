import styled from "styled-components";

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
  padding: 68px 107px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ChartsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 258px;
  grid-template-rows: 1fr 1fr;
  grid-column: span 1;
  gap: 30px;
`;

export const ChartsRow = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: auto;
  grid-area: ${(props) => {
    return `
  ${props.area.rowStart} /
  ${props.area.colStart} /
      ${props.area.rowEnd} / span
      ${props.area.colEnd}
  `;
  }};
`;

export const Keyinfos = styled.div`
  flex: 0 0 258px;
  display: flex;
  flex-direction: column;
  gap: 39px;
  grid-area: ${(props) => {
    return `
  ${props.area.rowStart} /
  ${props.area.colStart} /
     span ${props.area.rowEnd} /
      ${props.area.colEnd}
  `;
  }};
`;
