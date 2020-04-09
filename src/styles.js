import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.colour};
    width: 100vw;
    height: 600px;
`;

export const GlobalStyle = createGlobalStyle`
  body {
   margin: 0; 
  }
`;