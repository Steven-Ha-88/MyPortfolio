import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  background-color: #f4f4f4;
`;

export const Header = styled.h1`
  text-align: center;
  margin: 0 20px 0 20px;
  margin-bottom: 0px;
  font-family: 'DM Serif Display', serif;
  color: #8a8a8a;
  margin: 100px 0 20px;
  @media (max-width: 375px) {
    margin-bottom: 0px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  background-color: white;
  justify-content: center;
  margin-bottom: 100px;
  background-color: #f4f4f4;
  @media (max-width: 375px) {
    
  }
`;


export const Card = styled.div`
  width: 750px;
  height: 460px;
  border-radius: 10px;
  margin: 30px;
  cursor: pointer;
  @media (max-width: 375px) {
    width: 500px;
    height: 200px;
  }

`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    `;