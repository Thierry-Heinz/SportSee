import PropTypes from "prop-types";
import { Button } from "./style";

/**
 * Display the button with icon in sidebar
 * @component
 * @param {string} iconSrc
 * @param {string} name
 *  
 * @return ( <IconButton
            iconSrc={iconSrc}
            name={name}
          />)
 */

const IconButton = ({ iconSrc, name }) => {
  return (
    <Button>
      <div className="icon">
        <img src={iconSrc} alt={name} />
      </div>
    </Button>
  );
};

IconButton.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  name: PropTypes.string,
};

export default IconButton;
