import styled from "styled-components";
import { Button } from "@/components/button/button.jsx";
import {
  primaryActiveColor,
  primaryColor,
  primaryHoverColor,
} from "@/components/button/_color.js";

export const ActionButton = styled(Button)`
  border-radius: 6px;
`;

export const ActionButtonPrimary = styled(ActionButton)`
  color: white;
  background: ${primaryColor};

  &:hover {
    background: ${primaryHoverColor};
  }

  &:active {
    background: ${primaryActiveColor};
  }
`;
