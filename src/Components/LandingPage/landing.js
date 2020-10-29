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
import Selfie from "./../../Images/Selfie.webp";
import Selfie_mobile from "./../../Images/Selfie-mobile.webp";

export const LandingPage = () => {
  return (
    <Container>
      <Wrapper>
        <Header data-aos='fade-down'>
          Hi! <br /> I'm Steven
        </Header>
        <SubHead data-aos='fade-down'>Front End Developer</SubHead>
      </Wrapper>
      <WrapperImg>
        <ImageDiv data-aos='fade-up'>
          <Image
            src={window.screen.width <= 480 ? Selfie_mobile : Selfie}
            alt='Selfie of Steven'
          />
        </ImageDiv>
      </WrapperImg>
    </Container>
  );
};
