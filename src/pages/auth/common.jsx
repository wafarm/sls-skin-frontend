import PropTypes from "prop-types";
import styled from "styled-components";

import { Card } from "@/components/card/card.jsx";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  user-select: none;
`;

const AuthCard = styled(Card)`
  width: 30%;
  min-width: 300px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const AuthBanner = styled.span`
  font-family: "SL Logo", serif;
  font-size: 3.125rem;
  color: azure;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const AuthHint = styled.span`
  color: gray;
  text-align: center;
`;

export const AuthContainer = ({ children }) => {
  return (
    <Container>
      <AuthBanner>StarLight</AuthBanner>
      <AuthCard>{children}</AuthCard>
    </Container>
  );
};

AuthContainer.propTypes = {
  children: PropTypes.element,
};
