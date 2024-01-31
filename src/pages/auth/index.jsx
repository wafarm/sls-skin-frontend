import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import background from "@/assets/img/background1.jpg";

const AuthStyle = createGlobalStyle`
    body {
        background-image: url(${background});
        background-size: cover;
    }

    #root {
        justify-content: center;
        height: 100vh;
    }
`;

export const Auth = () => {
  return (
    <>
      <AuthStyle />
      <Outlet />
    </>
  );
};
