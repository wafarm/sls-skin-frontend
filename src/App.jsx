import { RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import logoFont from "@/assets/font/Logo.ttf";
import { router } from "@/pages/_routes";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: SL Logo;
        src: url(${logoFont});
    }

    body {
        margin: 0;
    }

    #root {
        display: flex;
        align-items: center;
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
