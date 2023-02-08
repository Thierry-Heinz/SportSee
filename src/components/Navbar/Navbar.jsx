import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Header } from "./style";
import Logo from "../../assets/logo.svg";

/**
 * Display the navbar of the dashboard
 * @component
 * @param {number} navBarHeight 
 * @return (
      <Navbar navBarHeight={navBarHeight} />)
 */
export default function Navbar({ navBarHeight }) {
  return (
    <Header navBarHeight={navBarHeight}>
      <Link to="/">
        <img src={Logo} alt="SportSee logo" />
      </Link>
      <ul>
        <li>
          <button>Accueil</button>
        </li>
        <li>
          <button>Profil</button>
        </li>
        <li>
          <button>Réglage</button>
        </li>
        <li>
          <button>Communauté</button>
        </li>
      </ul>
    </Header>
  );
}

Navbar.propTypes = {
  navBarHeight: PropTypes.number,
};
