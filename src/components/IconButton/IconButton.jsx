import { Button } from "./style";

const IconButton = ({ iconSrc, name }) => {
  return (
    <Button>
      <div className="icon">
        <img src={iconSrc} alt={name} />
      </div>
    </Button>
  );
};

export default IconButton;
