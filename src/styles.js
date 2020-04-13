import styled, {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
   margin: 0; 
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Nunito Sans',sans-serif;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    height:${props => props.height};
    background-color: ${props => props.colour};
    color: ${props => props.fontcolor};
`;