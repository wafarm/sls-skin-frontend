import { Sidebar } from "@/components/sidebar/sidebar";
import {
  SidebarRoute,
  SidebarSeparator,
} from "@/components/sidebar/sidebar-items";
import { Outlet } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Sidebar>
        <SidebarRoute href="#">Route 1</SidebarRoute>
        <SidebarRoute href="#">Route 2</SidebarRoute>
        <SidebarRoute href="#">Route 3</SidebarRoute>
        <SidebarSeparator />
        <SidebarRoute href="#">Route 4</SidebarRoute>
        <SidebarRoute href="#">Route 5</SidebarRoute>
        <SidebarRoute href="#">Route 6</SidebarRoute>
      </Sidebar>
      <Outlet />
    </>
  );
};

export default Index;
