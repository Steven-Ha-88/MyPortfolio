// NavbarLinks.js

import React from "react";
import styled from "styled-components";
import { NavHashLink as Link } from "react-router-hash-link";

const NavItem = styled(Link)`
  text-decoration: none;
  color: ${props => props.social ? "#bbbbbb" : "black"};
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
    color: #0044ff;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 5px 0;
    font-size: ${props => props.social ? "1.5rem" : "2rem"};
    z-index: 6;
  }
`;
const NavbarLinks = ({setNavbar}) => {
  return (
    <>
      <NavItem onClick={() => setNavbar(false)} to="/#about">About</NavItem>
      <NavItem onClick={() => setNavbar(false)} to="/#projects">Projects</NavItem>
      <NavItem onClick={() => setNavbar(false)} to="/#contact">Contact</NavItem>
      <NavItem social onClick={() => setNavbar(false)} to="/#about">LinkedIn</NavItem>
      <NavItem social onClick={() => setNavbar(false)} to="/#projects">GitHub</NavItem>
      <NavItem social onClick={() => setNavbar(false)} to="/#contact">CV</NavItem>
    </>
  );
};

export default NavbarLinks;
