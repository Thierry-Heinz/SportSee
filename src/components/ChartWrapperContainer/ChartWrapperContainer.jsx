import { StyledChartWrapperContainer } from "./style";

const ChartWrapperContainer = ({ sizes, className, children }) => {
  return (
    <StyledChartWrapperContainer sizes={sizes} className={className}>
      {children}
    </StyledChartWrapperContainer>
  );
};

export default ChartWrapperContainer;
