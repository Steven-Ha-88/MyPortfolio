import React from "react";
import {
  Container,
  Image,
  Header,
  Wrapper,
  WrapperImg,
  SubHead,
  ImageDiv,
} from "./styles";
import Selfie from "./../../Images/Selfie.png";

export const LandingPage = () => {
  return (
    <Container>
      <Wrapper>
        <Header
          data-aos='fade-down'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='1000'>
          Hi! <br /> I'm Steven
        </Header>
        <SubHead
          data-aos='fade-down'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='1000'>
          Front End Developer
        </SubHead>
      </Wrapper>
      <WrapperImg>
        <ImageDiv
          data-aos='fade-up'
          data-aos-easing='ease-out-cubic'
          data-aos-duration='500'>
          <Image src={Selfie} alt='Selfie of Steven' />
        </ImageDiv>
      </WrapperImg>
    </Container>
  );
};
