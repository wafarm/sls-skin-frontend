import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SidebarItem = styled(NavLink)`
  margin: 6px;
  padding: 3px 6px;
  border-radius: 5px;
  width: 85%;
  height: 8%;
  max-height: 50px;
  display: flex;
  text-decoration: none;
  color: azure;
  align-items: center;
  transition: 0.3s;

  &:hover {
    background-color: rgb(52, 52, 57);
  }

  &.active {
    background-color: rgb(68, 73, 82);
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }

  span {
    font-size: 1.125rem;
    margin-left: 20px;
  }
`;

export const SidebarSeparator = styled.div`
  margin: 3px 0;
  display: block;
  content: "";
  width: 85%;
  height: 2px;
  background: rgb(55, 65, 81);
`;

export const SidebarRoute = (props) => {
  return (
    <SidebarItem end to={props.to}>
      {props.icon}
      <span>{props.children}</span>
    </SidebarItem>
  );
};

SidebarRoute.propTypes = {
  to: PropTypes.string,
  icon: PropTypes.element,
  children: PropTypes.any,
};
