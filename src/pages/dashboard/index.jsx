import { Sidebar } from "@/components/sidebar/sidebar";
import {
  SidebarRoute,
  SidebarSeparator,
} from "@/components/sidebar/sidebar-items";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { rootDir, routes } from "@/pages/dashboard/_routes.jsx";
import path from "path-browserify";

const Content = styled.div`
  position: relative;
`;

const Index = () => {
  const sidebarItems = routes.map((route) => {
    if (route.type === "separator") {
      return <SidebarSeparator key={route.id} />;
    } else if (route.type === "route" || route.type === "route-index") {
      return (
        <SidebarRoute
          key={route.id}
          // exact={route.type === "route-index"}
          to={path.join(rootDir, route.path)}
          icon={route.icon}
        >
          {route.name}
        </SidebarRoute>
      );
    }
  });

  return (
    <>
      <Sidebar>{sidebarItems}</Sidebar>
      <Content>
        <Outlet />
      </Content>
    </>
  );
};

export default Index;
