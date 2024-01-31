import styled from "styled-components";
import { Button, ButtonPrimary } from "@/components/button/button.jsx";
import { secondaryColor } from "@/components/button/_color.js";

export const ActionButton = styled(Button)`
  border-radius: 6px;
`;

export const ActionButtonPrimary = styled(ButtonPrimary)`
  border-radius: 6px;
`;

export const ActionButtonSecondary = styled(ActionButton)`
  border: 1px solid ${secondaryColor};
  color: ${secondaryColor};
  background: transparent;

  &:hover {
    background: ${secondaryColor};
    color: white;
  }
`;
