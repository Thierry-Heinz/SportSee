import { Link } from "react-router-dom";
export default function Welcome() {
  return (
    <>
      <h1>Welcome!</h1>
      <p>{process.env.REACT_APP_BASE_URL}</p>
      <Link to="/dashboard/18">User 18</Link>
      <Link to="/dashboard/12">User 12</Link>
    </>
  );
}