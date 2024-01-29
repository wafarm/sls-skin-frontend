import styled from "styled-components";
import {
  SidebarItem,
  SidebarSeparator,
} from "@/components/sidebar/sidebar-items";
import PropTypes from "prop-types";

const SidebarHolder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 20%;
  max-width: 250px;
  min-width: 220px;
  background: rgba(35, 33, 33, 0.95);
  height: 100%;
  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
`;

const SidebarHeader = styled(SidebarItem)`
  display: flex;
  justify-content: center;
  cursor: default;

  span {
    font-size: 40px;
    font-family:
      SL Logo,
      serif;
    color: azure;
  }
`;

export const Sidebar = ({ children }) => {
  return (
    <SidebarHolder>
      <SidebarHeader href="#">
        <span>StarLight</span>
      </SidebarHeader>
      <SidebarSeparator />
      {children}
    </SidebarHolder>
  );
};

Sidebar.propTypes = {
  children: PropTypes.element,
};
