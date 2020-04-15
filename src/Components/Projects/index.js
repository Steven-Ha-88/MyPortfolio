import React from 'react';
import { Container, Card, Wrapper, Header, Image, Overlay, Text } from './styles';
import reddit from './../../Images/reddit.png';
import weather from './../../Images/Weather.png';
import weather1 from './../../Images/Weather1.png';
import musician from './../../Images/musician.png';
import { Link } from "react-router-dom";


export const Projects = () => {
  return (
    <Container id="projects">
      <Header data-aos="fade-up">Projects</Header>
      <Wrapper>
          <Card data-aos="zoom-in" data-aos-easing="ease-out-cubic">
              <Link to="/Portfolio" style={{ textDecoration: "none" }} >
                <Image src={reddit} />
              <Overlay>
                <Text>
                  Open
                </Text>
              </Overlay>
              </Link>
          </Card>
        <Card data-aos="zoom-in" data-aos-easing="ease-out-cubic">
            <Link to="/Portfolio" style={{ textDecoration: "none" }} >
                <Image src={weather} />
                <Overlay>
                  <Text>
                    Open
                  </Text>
                </Overlay>
            </Link>
        </Card>
        <Card data-aos="zoom-in" data-aos-easing="ease-out-cubic">
            <Link to="/Portfolio" style={{ textDecoration: "none" }} >
              <Image src={weather1} />
              <Overlay>
                <Text>
                    Open
                </Text>
              </Overlay>
            </Link>
        </Card>
        <Card data-aos="zoom-in" data-aos-easing="ease-out-cubic">
            <Link to="/Portfolio" style={{ textDecoration: "none" }} >
                <Image src={musician} />
                <Overlay>
                  <Text>
                    Open
                  </Text>
                </Overlay>
            </Link>
        </Card>
      </Wrapper>
    </Container>
  );

}