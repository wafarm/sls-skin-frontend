import { useRouteError } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const ErrorStyle = createGlobalStyle`
    #root {
        justify-content: center;
        height: 100vh;
    }
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  user-select: none;

  i {
    color: gray;
  }
`;

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <ErrorStyle />
      <ErrorContainer>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </ErrorContainer>
    </>
  );
};
