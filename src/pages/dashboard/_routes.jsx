import { UserCenter } from "@/pages/dashboard/user-center.jsx";
import { CgHomeAlt } from "react-icons/cg";

export const rootDir = "/dashboard";

export const routes = [
  {
    type: "route-index",
    name: "Home",
    id: "index",
    path: "",
    icon: <CgHomeAlt />,
    element: <UserCenter />,
  },
];
