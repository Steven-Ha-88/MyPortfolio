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



export const Overlay = styled.div`

position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
border-radius: 10px;
height: 100%;
width: 100%;
opacity: 0;
transition: .5s ease;
background-color: #31835fab;
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
  :hover ${Overlay} {
    opacity: 1;

  }
`;

export const Text = styled.div`
    color: white;
    font-size: 4em;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    font-family: 'DM Serif Display', serif;

`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    `;