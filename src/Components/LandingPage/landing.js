import React from 'react';
import { Container, Image, Header, Wrapper, WrapperImg, SubHead } from './styles';
import Selfie from './../../Images/Selfie.png'


export const LandingPage = () => {
  return (
    <Container>
      <Wrapper>
        <Header>Steven Ha</Header>
        <SubHead>Front End Developer</SubHead>
      </Wrapper>
      <WrapperImg>
          <Image src={Selfie} alt="Selfie of Steven" />
      </WrapperImg>
    </Container>
  );
}