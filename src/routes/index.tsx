import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import SettingsPage from "../pages/SettingsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/users", element: <UsersPage /> },
      { path: "/settings", element: <SettingsPage /> },
    ],
  },
]);

export default router;
