import { VscHome } from "react-icons/vsc";

import { UserCenter } from "@/pages/dashboard/user-center.jsx";

export const rootDir = "/dashboard";

export const routes = [
  {
    type: "route-index",
    name: "Home",
    id: "index",
    path: "",
    icon: <VscHome />,
    element: <UserCenter />,
  },
];
