import React from 'react';
import { Container, Image, Header, Wrapper, WrapperImg, SubHead, Stack, SocialLinks } from './styles';
import Selfie from './../../Images/Selfie.png'


export const LandingPage = () => {
  return (
    <Container>
      <Wrapper>
        <Header data-aos="fade-down" data-aos-easing="ease-out-cubic"data-aos-duration="2000">Hi! <br/> I'm Steven</Header>
        <SubHead data-aos="fade-down" data-aos-easing="ease-out-cubic"data-aos-duration="2000">Front End Developer</SubHead>
      </Wrapper>
      <WrapperImg>
          <Image src={Selfie} alt="Selfie of Steven" />
      </WrapperImg>
    </Container>
  );

}