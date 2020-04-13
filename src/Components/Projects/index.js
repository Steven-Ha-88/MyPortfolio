import React from 'react';
import { Container, Card, Wrapper, Header, Image } from './styles';
import reddit from './../../Images/reddit.png';
import weather from './../../Images/Weather.png';
import weather1 from './../../Images/Weather1.png';
import musician from './../../Images/musician.png';

export const Projects = () => {
  return (
    <Container id="projects">
      <Header data-aos="fade-up">Projects</Header>
      <Wrapper>
        <Card data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
          <Image src={reddit} />
        </Card>
        <Card data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
          <Image src={weather} />
        </Card>
        <Card data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
          <Image src={weather1} />
        </Card>
        <Card data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
          <Image src={musician} />
        </Card>
      </Wrapper>
    </Container>
  );

}