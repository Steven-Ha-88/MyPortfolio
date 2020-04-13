import React from 'react';
import { ButtonAnchor, Container, Wrapper, Header, Button, Description } from './styles';


export const Contact = () => {
  return (
    <Container id="contact">
      <Wrapper>
        <Header data-aos="fade-right">
          Contact for any enquiries
        </Header>
        <Description data-aos="fade-right">
          Email: steven.dev@outlook.com<br/>
          Mobile: 07842555942
        </Description>
        <Button href="mailto:steven.dev@outlook.com" data-aos="fade-right">
          get in touch!   
        </Button>
      </Wrapper>
    </Container>
  );
}