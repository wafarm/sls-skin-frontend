import { Outlet } from "react-router-dom";
import background from "@/assets/img/background1.jpg";
import { createGlobalStyle } from "styled-components";

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
