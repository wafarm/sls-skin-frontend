import styled from "styled-components";
import {
  SidebarItem,
  SidebarSeparator,
} from "@/components/sidebar/sidebar-items";
import PropTypes from "prop-types";

const SidebarBlock = styled.div`
  width: 20%;
  max-width: 250px;
  min-width: 220px;
`;

const SidebarHolder = styled.div`
  position: fixed;
  margin-top: 0;
  margin-left: 0;
  top: 0;
  left: 0;
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
  padding: 0;
  display: flex;
  justify-content: center;
  cursor: default;

  span {
    margin-left: 0;
    font-size: 2.5rem;
    font-family:
      SL Logo,
      serif;
  }

  &:hover {
    background: none;
  }

  &.active {
    background: none;
  }
`;

export const Sidebar = ({ children }) => {
  return (
    <>
      <SidebarBlock />
      <SidebarHolder>
        <SidebarHeader end to="#">
          <span>StarLight</span>
        </SidebarHeader>
        <SidebarSeparator />
        {children}
      </SidebarHolder>
    </>
  );
};

Sidebar.propTypes = {
  children: PropTypes.any,
};
