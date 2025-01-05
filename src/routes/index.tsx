import DashboardLayout from "@/layouts/DashboardLayout";
import CobaPage from "@/pages/CobaPage";
import HomePage from "@/pages/HomePage";
import SettingsPage from "@/pages/SettingsPage";
import UsersPage from "@/pages/UsersPage";
import LoginForm from "@/pages/auth/LoginForm";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginForm />,
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
