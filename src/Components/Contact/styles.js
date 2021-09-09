import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 200px;
  color: white;
  line-height: 1.8;
`;




export const FooterDescription = styled.p`
  font-family: "Roboto Mono", monospace;
  margin: 0 0 20px 0;
  padding: 0px;
  text-align: center;
  color: black;
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  background-color: ${(props) => props.colour};
  color: ${(props) => props.fontcolor};
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
  text-decoration: none;
  color: white;
  font-size: 1.5em;
`;


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 300px;
  color: white;
  line-height: 1.8;
`;

export const Outer = styled.div`
background: rgb(178,190,204);
background: linear-gradient(324deg, rgba(178,190,204,1) 29%, rgba(218,209,209,1) 100%);
`;




export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Header = styled.h1`
  font-family: "DM Serif Display", serif;
  @media (max-width: 375px) {
    font-size: 1.6em;
  }
`;

export const Description = styled.p`
  font-family: "Roboto Mono", monospace;
  margin: 0 0 20px 0;
  padding: 0px;
  text-align: center;
`;

export const Button = styled.a`
  margin-bottom: 21.44px;
  font-family: "Roboto Mono", monospace;
  width: 230px;
  height: 3.125em;
  line-height: 3.125em;
  color: white;
  background-color: transparent;
  border: 2px solid #fff;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  border-radius: 0px;
  cursor: pointer;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  box-shadow: none !important;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  text-decoration: none;
  :hover {
    background-color: white;
    color: black;
    text-decoration: none;
  }
`;

// // export const ButtonAnchor = styled.a`
// //     textDecoration: none;
// //     color: white;
// //     :hover {
// //       color: black
// //     }
// `;
