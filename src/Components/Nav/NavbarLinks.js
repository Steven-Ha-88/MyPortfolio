// NavbarLinks.js

import React from "react";
import styled from "styled-components";
import { NavHashLink as Link } from "react-router-hash-link";

const NavItem = styled(Link)`
  text-decoration: none;
  color: black;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-family: 'Open sans', sans-serif;
  font-size: 1rem;

  /* :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #0044ff;
    height: 1px;
    transition: all 0.4s ease-in;
  } */

  :hover {
    font-size: 1.2rem;
    color: turquoise;
    ::after {
      width: 100%;
    }
  }


  @media (max-width: 768px) {
    padding: 5px 0;
    font-size: 2rem;
    z-index: 6;
  }
`;

const Socials = styled.a`
    text-decoration: none;
  color: #bbbbbb;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-family: 'Open sans', sans-serif;
  font-size: 1rem;

  :hover {
    color: turquoise;
    font-size: 1.2rem;
    ::after {
      width: 100%;
    }
  }


  @media (max-width: 768px) {
    padding: 5px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`; 
const NavbarLinks = ({setNavbar}) => {
  return (
    <>
      <NavItem onClick={() => setNavbar(false)} to="/#about">About</NavItem>
      <NavItem onClick={() => setNavbar(false)} to="/#projects">Projects</NavItem>
      <NavItem onClick={() => setNavbar(false)} to="/#contact">Contact</NavItem>
      <Socials  href="https://www.linkedin.com/in/steven-dev/">LinkedIn</Socials>
      <Socials  href="https://github.com/Steven-Ha-88">GitHub</Socials>
      <Socials  href="/#contact">CV</Socials>
    </>
  );
};

export default NavbarLinks;
