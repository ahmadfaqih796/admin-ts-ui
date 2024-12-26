import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "@/layouts/DashboardLayout";
import HomePage from "@/pages/HomePage";
import UsersPage from "@/pages/UsersPage";
import SettingsPage from "@/pages/SettingsPage";
import CobaPage from "@/pages/CobaPage";
import LoginPage from "@/pages/auth/LoginPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: (
          <HomePage
            name="John Doe"
            age={30}
            onClick={() => {
              console.log("ppppppppp");
            }}
          />
        ),
      },
      { path: "/users", element: <UsersPage name="Faqih" /> },
      {
        path: "/settings",
        element: <SettingsPage name="John Doe" value={1} />,
      },
      {
        path: "/coba",
        element: <CobaPage />,
      },
    ],
  },
]);

export default router;
