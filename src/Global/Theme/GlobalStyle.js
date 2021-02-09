import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.bodyBg};
    color: ${({ theme }) => theme.bodyColor};
  }
  pre {
    display: inline-block
  }
`;
