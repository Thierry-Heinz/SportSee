import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import Welcome from "../../containers/Welcome";
import Dashboard from "../../containers/Dashboard";

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  {
    path: "/dashboard/:userId",
    element: <Dashboard />,
  },
]);

/**
 * The different routes of the app
 * @component
 * @return  <ReactElement />
 */
export default function Router() {
  return <RouterProvider router={router} />;
}
