import PropTypes from "prop-types";
import { StyledChartWrapperContainer } from "./style";

/**
 * Wrap the Chart components to define their sizes
 * @component
 * @param {object} sizes
 * @param {string} className
 * @param {ReactElement} children
 * @return (<ChartWrapperContainer sizes={sizes}>)
 */
const ChartWrapperContainer = ({ sizes, className, children }) => {
  return (
    <StyledChartWrapperContainer sizes={sizes} className={className}>
      {children}
    </StyledChartWrapperContainer>
  );
};

ChartWrapperContainer.propTypes = {
  sizes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ChartWrapperContainer;
