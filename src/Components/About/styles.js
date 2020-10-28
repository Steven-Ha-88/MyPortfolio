import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  min-height: 660px;
  padding: 0 50px;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: white;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0;
    height: auto;
  }

  @media (max-height: 635px) {
    height: auto;
  }
`;

export const Image = styled.img`
  width: 380px;
  // height: 100%;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: none;
  }

  // @media (max-width: 1030px) {
  //   margin: 0;
  //   padding: 100px;
  // }

  // @media (max-width: 600px) {
  //   padding: 20px;
  //   margin-right: 0px;
  //   margin-top: 30px;
  // }
`;

export const AboutWrapper = styled.div`
  color: black;
  flex-direction: column;
  width: 315px;
  height: 510px;
  display: flex;
  justify-content: start;
  text-align: left;

  @media (max-width: 1024px) {
    text-align: center;
    padding: 0;
    width: 100%;
    height: auto;
    margin: 20px 0;
    justify-content: center;
    align-items: center;
  }
`;

export const Header = styled.h1`
  // margin: 0 20px 0 20px;
  font-family: "Open Sans", sans-serif;
  font-size: 20px;
  color: black;
  @media (max-height: 635px) {
    margin: 20px;
  }
`;

export const Description = styled.p`
  font-size: 12px;
  color: grey;
  text-align: ${(props) => props.textAlign};
  // margin: 10px 20px 0 20px;
  font-family: "Open Sans", sans-serif;
  @media (max-width: 1024px) {
    font-size: 1em;
    text-align: center;
    padding: 0 106px;
  }
  @media (max-width: 1300px) {
    font-size: 14px;
    // margin: 30px 20px 0 20px;
  }
  @media (max-width: 376px) {
    padding: 0;
  }
`;

export const Skills = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
  font-family: "Open Sans", sans-serif;
  font-size: 10px;
  @media (max-width: 1024px) {
    justify-content: center;
    margin-top: 20px;
  }
`;

export const List = styled.ul`
  list-style: none;
  font-family: "Roboto Mono", monospace;
  padding: 0 20px;
  font-size: 12px;

  // @media (max-width: 1300px) {
  //   font-size: 10px;
  // }
`;

export const Point = styled.li`
  margin-bottom: 15px;

  ::before {
    font-family: FontAwesome;
    content: "\f00c";
    color: #41b883;
    padding-right: 35px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Nunito Sans", sans-serif;
  justify-content: flex-start;
  width: 100%;
  background-color: ${(props) => props.colour};
  color: ${(props) => props.fontcolor};
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.5em;
  letter-spacing: 8px;
  padding: 0 20px;
  // margin: 20px 0 40px 0;
  @media (max-width: 1024px) {
    justify-content: center;
    margin-top: 20px;
  }
`;
