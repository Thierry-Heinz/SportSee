import { Header } from "./style";
import Logo from "../../assets/logo.svg";
export default function Navbar() {
  return (
    <Header>
      <img src={Logo} alt="SportSee logo" />
      <ul>
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#">Profil</a>
        </li>
        <li>
          <a href="#">Réglage</a>
        </li>
        <li>
          <a href="#">Communauté</a>
        </li>
      </ul>
    </Header>
  );
}
