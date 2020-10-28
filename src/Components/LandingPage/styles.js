import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 600px;
  height: 100vh;
  font-family: "Nunito Sans", sans-serif;
  background-color: #f4f4f4;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (max-width: 480px) {
    height: auto;
    justify-content: space-evenly;
  }
`;

export const ImageDiv = styled.div`
  width: 500px;
  max-width: 425px;
  height: auto;
  display: flex;
  alignitems: flex-end;
  // @media (max-width: 1000px) {
  //   width: 225px;
  // }
  @media (max-width: 800px) {
    width: 200px;
    height: 200px;
    // border-radius: 50%;
    display: flex;
    justify-content: center;
    // background-color: #988faf;
  }
  @media (min-width: 1400px) {
    width: 600px;
    max-width: ;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  @media (max-width: 1024px) {
    width: 100%;
    justify-content: center;
  }
`;

export const WrapperImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-self: flex-end;
  justify-content: flex-start;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
// @media (max-width: 1024px) {
//   justify-content: center;
// }
// @media (max-width: 375px) {
//   height: 100%;
// }

export const Header = styled.h1`
  font-weight: 700;
  font-size: 82px;
  font-family: "DM Serif Display", serif;
  line-height: 1.3;
  margin-left: 100px;
  margin-bottom: 10px;
  text-align: start;
  color: black;
  @media (max-width: 375px) {
    font-size: 3em;
    margin-top: 0px;
    margin-left: 0px;
    margin-bottom: 0px;
  }
  @media (max-width: 1640px) {
    margin-top: 0px;
    margin-left: 0px;
    margin-bottom: 0px;
  }
  @media (max-width: 1200px) {
    font-size: 3em;
    margin-top: 0px;
    margin-left: 0px;
    margin-bottom: 0px;
  }
`;

export const SubHead = styled.p`
  font-family: "Nunito Sans", sans-serif;
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
  width: 100%;
  align-self: center;
  border-radius: 41%;
`;
// @media (max-width: 1200px) {
//   width: 33%;
//   height: 100%;
// }

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
  textdecoration: none;
  color: white;
  font-size: 1.5em;
`;
