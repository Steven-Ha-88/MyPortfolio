import React from 'react';
import { Container, Wrapper, Header, Button, Description } from './styles';


export const Contact = () => {
  return (
    <Container id="contact">
      <Wrapper>
        <Header data-aos="fade-right">
          Contact for any enquiries
        </Header>
        <Description data-aos="fade-right">
          Email: steven.dev@outlook.com<br/>
          Please feel free to download my CV.
        </Description>
        <Button href="mailto:steven.dev@outlook.com" data-aos="fade-right">
          get in touch!   
        </Button>
      </Wrapper>
    </Container>
  );
}