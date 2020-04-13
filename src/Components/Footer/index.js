import React from 'react';
import { Stack, SocialLinks, Container, Wrapper, Header, Button, Description } from './styles';


export const Footer = () => {
  return (
    <Container id="contact">
         <Stack data-aos="fade-up">
           <SocialLinks href=""><i class="fas fa-file-word"></i></SocialLinks>
           <SocialLinks href="https://www.linkedin.com/in/steven-dev/"><i class="fab fa-linkedin"></i></SocialLinks>
           <SocialLinks href="https://github.com/Steven-Ha-88"><i class="fab fa-github"></i></SocialLinks>
           <SocialLinks href="mailto:steven.dev@outlook.com"><i class="fas fa-envelope"></i></SocialLinks>
         </Stack>
         <Description>
         &copy; Copyright Steven Ha
         </Description>
    </Container>
  );
}