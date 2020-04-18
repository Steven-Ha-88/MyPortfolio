import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    font-family: 'Nunito Sans',sans-serif;
    background-color: #f4f4f4;



    @media (max-width: 1024px) {
      flex-direction: column;
      justify-content: flex-start;

    }
    `;
   

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 55%;
    height: 100%;
    @media (max-width: 1024px) {
      width: 100%;
      justify-content: center;
    }
`;

export const WrapperImg = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    align-self: flex-end;
    @media (max-width: 1024px) {
      justify-content: center;
    }
    @media (max-width: 600px) {
      height: 100%;
    }

`;

export const Header = styled.h1` 
    font-weight: 700;
    font-size: 82px;
    font-family: 'DM Serif Display', serif;
    line-height: 1.3;
    margin-left: 100px;
    margin-bottom: 10px;
    text-align: start;
    color: black;
    @media (max-width: 375px) {
      margin-top: 0px;
      margin-left: 0px;
      margin-bottom: 0px;
    }

    @media (max-width: 1280px) {
      margin-top: 40px;
      margin-left: 0px;
      margin-bottom: 0px;
      font-size: 55px;

    }
`;

export const SubHead = styled.p` 
    font-family: 'Nunito Sans',sans-serif;
    margin: 0 0 0 100px;
    text-align: start;
    letter-spacing: 2px;
    font-size: 1em;

    @media (max-width: 1640px) {
      font-size: 1em;
    }

    @media (max-width: 1024px) {
      font-size: 1em;
      margin-left: 0px;
      text-align: center;
    }
`;

export const Image = styled.img`
    width: auto;
    height: 100%;
    align-self: flex-end;

    @media (max-width: 1024px) {
      width: 70%;
      height: 100%;
    }

    @media (max-width: 375px) {
      width: 80%;
      height: 110%;
    }

    `;

    export const Stack = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 2em;
    letter-spacing: 20px;
    margin: 20px;
    padding-left: 20px;
    @media (max-width: 1024px) {
      justify-content: center;
      margin-top: 20px;
    }
`;

export const SocialLinks = styled.a`
    textDecoration: none;  
    color: white;
    font-size: 1.5em;
`;

    
     
