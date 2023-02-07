import styled from "styled-components";

export const StyledChartWrapperContainer = styled.div`
  position: relative;
  /* width: 100%; */
  /* height: 100%; */
  min-width: ${(props) => props.sizes.minWidth}px;
  min-height: ${(props) => props.sizes.minHeight}px;
  /* max-width: ${(props) => props.sizes.maxWidth}px; */
  /* max-height: ${(props) => props.sizes.maxHeight}px; */
`;
