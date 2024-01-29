import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import Dashboard from "@/pages/dashboard";
import {
  routes as _dashboardRoutes,
  rootDir as _dashboardRoot,
} from "@/pages/dashboard/_routes.jsx";
import path from "path-browserify";

const dashboardRoutes = [];

for (const route of _dashboardRoutes) {
  if (route.type === "route") {
    dashboardRoutes.push({
      path: path.join(_dashboardRoot, route.path),
      element: route.element,
    });
  } else if (route.type === "route-index") {
    dashboardRoutes.push({
      index: true,
      element: route.element,
    });
  }
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: dashboardRoutes,
  },
]);
