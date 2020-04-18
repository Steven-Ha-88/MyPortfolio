import React from 'react';
import pic1 from './../../Images/setup2.jpeg';
import { Container, Stack, Section, Image, ImgWrapper, AboutWrapper, Header, Description, Skills, List, Point} from './styles';

export const AboutMe = () => {
  return (
    <Section id="about">
    <ImgWrapper>
      <div data-aos="fade-right" data-aos-easing="ease-out-cubic" style={{width: "100%"}}>
        <Image src={pic1} />
      </div>
    </ImgWrapper>
    <AboutWrapper data-aos="fade-down">
      <Header>About Me</Header>
      <Description data-aos="fade-right" textAlign="start">
      Front-end Developer(React/Redux) with Back-end experience (Node.js, Express and MongoDB). My background is in computer science with a huge interest in Cloud Services. I enjoy using the latest technology to deliver the simplest solution. Aside from coding, I love to game and travel.
      </Description>
      <Skills data-aos="fade-right">
        <List>
          <Point>JavaScript</Point>
          <Point>TypeScript</Point>
          <Point>React</Point>
          <Point>Redux</Point>
          <Point>Node</Point>
          <Point>MongoDB</Point>
        </List>
      </Skills>
      <Container data-aos="fade-down" colour="white" height="400px" fontcolor="white">
      <Stack>
        <i className="devicon-javascript-plain colored"></i>
        <i className="devicon-typescript-plain colored"></i>
        <i className="devicon-react-original colored"></i>
        <i className="devicon-html5-plain-wordmark colored"></i>
        <i className="devicon-css3-plain-wordmark colored"></i>
        <i className="devicon-nodejs-plain colored"></i>
        <i className="devicon-github-plain colored"></i>
      </Stack>
    </Container>
    </AboutWrapper>
  </Section>
  );
}