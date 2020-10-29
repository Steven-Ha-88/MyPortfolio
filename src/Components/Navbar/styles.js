import styled, { createGlobalStyle } from "styled-components";
import { NavHashLink } from "react-router-hash-link";

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 30px;
  width: 100%;
  background-color: ${({ isTransparent }) =>
    isTransparent ? "transparent" : "white"};
  z-index: 3002;
  padding: 25px 0;
  transition: 0.5s;
  @media (max-width: 1050px) {
    padding: 0;
    height: 50px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
  margin-left: 50px;
  @media (max-width: 375px) {
    margin: 7px;
  }
`;

export const Globalstyle = createGlobalStyle`
  body {
   margin: 0; 
   padding: 0;
   background-color: rgb(237,235,230);
  }
`;

export const Link = styled(NavHashLink)`
  text-decoration: none;
  margin: 0 25px 0 25px;
  color: black;
  font-family: "Nunito Sans", sans-serif;
  :hover {
    color: purple;
    text-decoration: none;
  }
`;
