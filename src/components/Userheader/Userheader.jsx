import PropTypes from "prop-types";
import { Header, Title, SubTitle } from "./style.js";

/**
 * Display the User first name and custom sub-title in Dashboard
 * @component
 * @param {string} title
 * @param {string} subTitle
 * @param {string} titleColor
 * @return (<Userheader
            title={title}
            titleColor={titleColor}
            subTitle={subTitle}
          />)
 */
const UserHeader = ({ title, titleColor, subTitle }) => {
  return (
    <Header>
      <Title firstNameColor={titleColor}>
        Bonjour <span>{title}</span>
      </Title>
      <SubTitle>{subTitle}</SubTitle>
    </Header>
  );
};

UserHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  titleColor: PropTypes.string,
};

export default UserHeader;
