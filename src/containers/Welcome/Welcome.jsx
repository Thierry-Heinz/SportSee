import { Link } from "react-router-dom";
import { StyledWelcome } from "./style.js";

/**
 * Display a welcome page to switch between the two mock users
 * @return <ReactElement />
 */
export default function Welcome() {
  return (
    <StyledWelcome>
      <h1>Welcome!</h1>
      <div className="links">
        <Link to="/dashboard/18">User 18</Link>
        <Link to="/dashboard/12">User 12</Link>
      </div>
    </StyledWelcome>
  );
}
