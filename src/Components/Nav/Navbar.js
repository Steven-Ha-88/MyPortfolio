// Navbar.js

import React, { useState } from "react";
import styled from "styled-components";
import NavbarLinks from "./NavbarLinks";

const Navigation = styled.nav`
  height: 50px;
  display: flex;
  /* background: white; */
  /* box-shadow: 0px 1px 10px #999; */
  justify-content: center;
  /* text-transform: uppercase; */
  /* border-bottom: 2px solid #33333320; */
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    justify-content: end;

  }
`;

const Stack = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.5em;
  letter-spacing: 20px;
  align-items: center;
  padding-left: 20px;
  @media (max-width: 1024px) {
    justify-content: start;
    margin-top: 20px;
    padding-left: 0px;
    margin: 5px;
  }
  @media (max-width: 834px) {
    display: none;
  }
`;

const SocialLinks = styled.a`
  text-decoration: none;
  color: gray;
  font-size: 1em;
  :hover {
    color: ${(props) => props.color};
  }
`;

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  align-self: center;
  z-index: 9999999;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #f6f6f6;
    align-items: start;
    padding-left: 24px;
    transition: all 0.3s ease-in;
    top: 0;
    right: ${(props) => (props.open ? "-100%" : "0")};
  }
`;

const Hamburger = styled.div`
  background-color: black;
  width: 30px;
  height: 2px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 2px;
    background-color: black;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <Navigation>
      {/* <Logo /> */}
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks setNavbar={setNavbarOpen} />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks setNavbar={setNavbarOpen} />
        </Navbox>
      )}
      {/* <Stack>
        <SocialLinks
          color="red"
          href="https://youtube.com/channel/UCoO9WEIu6UJLPp0Dmw0j3Yw"
        >
          <i aria-hidden className="fab fa-youtube"></i>
        </SocialLinks>
        <SocialLinks
          color="pink"
          href="https://www.instagram.com/morningstarldn/"
        >
          <i aria-hidden className="fab fa-instagram"></i>
        </SocialLinks>
        <SocialLinks
          color="rgb(34,78,212)"
          href="https://www.facebook.com/themorningstarlondon/"
        >
          <i aria-hidden className="fab fa-facebook"></i>
        </SocialLinks>
        <SocialLinks
          color="rgb(95 181 252)"
          href="https://twitter.com/morningstarldn?s=11"
        >
          <i aria-hidden className="fab fa-twitter"></i>
        </SocialLinks>
      </Stack> */}
    </Navigation>
  );
};

export default Navbar;
