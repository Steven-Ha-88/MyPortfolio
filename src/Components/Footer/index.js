import React from 'react';
import { Stack, SocialLinks, Container, Description } from './styles';
import CV from './../../Images/CV.pdf';


export const Footer = () => {
  return (
    <Container id="contact">
         <Stack data-aos="fade-up">
           <SocialLinks href={CV} download><i className="fas fa-file-word"></i></SocialLinks>
           <SocialLinks href="https://www.linkedin.com/in/steven-dev/"><i className="fab fa-linkedin"></i></SocialLinks>
           <SocialLinks href="https://github.com/Steven-Ha-88"><i className="fab fa-github"></i></SocialLinks>
           <SocialLinks href="mailto:steven.dev@outlook.com"><i className="fas fa-envelope"></i></SocialLinks>
         </Stack>
         <Description>
         &copy; Copyright Steven Ha
         </Description>
    </Container>
  );
}