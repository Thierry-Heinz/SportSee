import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import Welcome from "../../pages/Welcome";
import Dashboard from "../../pages/Dashboard";

const router = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  {
    path: "/dashboard/:userId",
    element: <Dashboard />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
