import styled, {createGlobalStyle} from 'styled-components';

export const Section = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    font-family: 'Nunito Sans',sans-serif;

    @media (max-width: 1024px) {
      flex-direction: column;
    }
`;
   

export const Wrapper = styled.div`
    background-color: ${props => props.colour};
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    font-family: 'Nunito Sans',sans-serif;
    width: 55%;
    height: 400px;
    @media (max-width: 1024px) {
      width: 100%;
      align-items: flex-start;

    }
`;

export const WrapperTwo = styled.div`
    background-color: ${props => props.colour};
    color: white;
    flex-direction: column;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
`;

export const Header = styled.h1`
    margin: 0 20px 0 20px;
    margin-bottom: 0px;
    padding: 15px;
`;

export const Description = styled.p`
    font-size: 2em;
    text-align: ${props => props.textAlign};
    margin: 0 20px 0 20px;
    padding: 15px;
     @media (max-width: 375px) {
          font-size: 1em;

    }
`;

export const GlobalStyle = createGlobalStyle`
  body {
   margin: 0; 
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Nunito Sans',sans-serif;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height:${props => props.height};
    background-color: ${props => props.colour};
    color: ${props => props.fontcolor};
`;

export const Stack = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 3em;
    letter-spacing: 8px;
    margin: 20px 0 20px 0;
    @media (max-width: 375px) {
          font-size: 2em;
    }
`;