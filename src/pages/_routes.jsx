import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import Dashboard from "@/pages/dashboard";
import {
  routes as _dashboardRoutes,
  rootDir as _dashboardRoot,
} from "@/pages/dashboard/_routes.jsx";
import {
  routes as _authRoutes,
  rootDir as _authRoot,
} from "@/pages/auth/_routes.jsx";
import path from "path-browserify";
import { Auth } from "@/pages/auth/index.jsx";
import { ErrorPage } from "@/pages/error-page.jsx";

const dashboardRoutes = generateRoutes(_dashboardRoutes, _dashboardRoot);
const authRoutes = generateRoutes(_authRoutes, _authRoot);

function generateRoutes(_routes, _rootDir) {
  const routes = [];
  for (const route of _routes) {
    if (route.type === "route") {
      routes.push({
        path: path.join(_rootDir, route.path),
        element: route.element,
      });
    } else if (route.type === "route-index") {
      routes.push({
        index: true,
        element: route.element,
      });
    }
  }
  return routes;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: dashboardRoutes,
  },
  {
    path: "/auth",
    element: <Auth />,
    children: authRoutes,
  },
]);
