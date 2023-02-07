import styled from "styled-components";

export const StyledDashboardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

export const Main = styled.main`
  flex: 1;
  height: 100%;

  box-sizing: border-box;
  display: flex;
`;

export const UserDashboard = styled.div`
  padding: 68px 107px;
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  display: flex;
  gap: 31px;
`;

export const Charts = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  gap: 30px;
`;

export const Keyinfos = styled.div`
  flex: 0 0 258px;
  display: flex;
  flex-direction: column;
  gap: 39px;
`;
