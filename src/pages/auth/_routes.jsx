import { LoginPage } from "@/pages/auth/login.jsx";

export const rootDir = "/auth";

export const routes = [
  {
    type: "route",
    id: "login",
    path: "login",
    element: <LoginPage />,
  },
];
