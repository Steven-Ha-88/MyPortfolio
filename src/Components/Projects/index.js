import React from 'react';
import { Container, Card, Wrapper, Header, Image, Overlay, Text } from './styles';
import reddit from './../../Images/reddit.png';
import weather1 from './../../Images/Weather1.png';
import myweb from './../../Images/my-portfolio.png';
import streamer from './../../Images/streamer2.png';
import youtube from './../../Images/youtube.png'
import { Link } from "react-router-dom";


export const Projects = () => {
  return (
    <Container id="projects">
      <Header data-aos="fade-up">Projects</Header>
      <Wrapper>
          <Card data-aos="zoom-in" data-aos-easing="ease-out-cubic">
              <Link to="/project-askmesomething" style={{ textDecoration: "none" }} >
                <Image src={reddit} />
              <Overlay>
                <Text>
                  Open
                </Text>
              </Overlay>
              </Link>
          </Card>
        <Card data-aos="zoom-in" data-aos-easing="ease-out-cubic">
            <Link to="/project-weather" style={{ textDecoration: "none" }} >
                <Image src={weather1} />
                <Overlay>
                  <Text>
                    Open
                  </Text>
                </Overlay>
            </Link>
        </Card>
        <Card data-aos="zoom-in" data-aos-easing="ease-out-cubic">
            <Link to="/project-streamer" style={{ textDecoration: "none" }} >
              <Image src={streamer} />
              <Overlay>
                <Text>
                    Open
                </Text>
              </Overlay>
            </Link>
        </Card>
        <Card data-aos="zoom-in" data-aos-easing="ease-out-cubic">
            <Link to="/project-youtube" style={{ textDecoration: "none" }} >
                <Image src={youtube} />
                <Overlay>
                  <Text>
                    Open
                  </Text>
                </Overlay>
            </Link>
        </Card>
        {/* <Card data-aos="zoom-in" data-aos-easing="ease-out-cubic">
            <Link to="/project-portfolio" style={{ textDecoration: "none" }} >
                <Image src={myweb} />
                <Overlay>
                  <Text>
                    Open
                  </Text>
                </Overlay>
            </Link>
        </Card> */}
      </Wrapper>
    </Container>
  );

}