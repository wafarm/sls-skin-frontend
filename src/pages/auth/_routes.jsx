import { LoginPage } from "@/pages/auth/login.jsx";
import { RegisterPage } from "@/pages/auth/register.jsx";
import { ResetPage } from "@/pages/auth/reset.jsx";

export const rootDir = "/auth";

export const routes = [
  {
    type: "route",
    id: "login",
    path: "login",
    element: <LoginPage />,
  },
  {
    type: "route",
    id: "register",
    path: "register",
    element: <RegisterPage />,
  },
  {
    type: "route",
    id: "reset",
    path: "reset",
    element: <ResetPage />,
  },
];
