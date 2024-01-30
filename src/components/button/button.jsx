import styled from "styled-components";
import {
  primaryActiveColor,
  primaryColor,
  primaryHoverColor,
} from "@/components/button/_color.js";

export const Button = styled.button`
  padding: 6px 16px;
  border-radius: 800px;
  border: none;
  line-height: 1.5;
  font-size: 1rem;
  transition: 0.15s;
  cursor: pointer;
`;

export const ButtonPrimary = styled(Button)`
  color: white;
  background: ${primaryColor};

  &:hover {
    background: ${primaryHoverColor};
  }

  &:active {
    background: ${primaryActiveColor};
  }
`;
