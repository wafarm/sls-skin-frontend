import styled from "styled-components";
import PropTypes from "prop-types";

export const SidebarItem = styled.a`
  margin: 9px;
  width: 85%;
  height: 8%;
  max-height: 50px;
  display: flex;
  text-decoration: none;
  color: rgb(205, 205, 225);
  justify-content: center;
  align-items: center;

  span {
    font-size: 18px;
    opacity: 1;
  }
`;

export const SidebarSeparator = styled.div`
  display: block;
  content: "";
  width: 85%;
  height: 2px;
  background: rgb(55, 65, 81);
`;

export const SidebarRoute = (props) => {
  return (
    <SidebarItem href={props.href}>
      <span>{props.children}</span>
    </SidebarItem>
  );
};

SidebarRoute.propTypes = {
  href: PropTypes.string,
  children: PropTypes.element,
};
