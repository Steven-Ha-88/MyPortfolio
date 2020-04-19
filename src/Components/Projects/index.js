import React from 'react';
import { Container, Card, Wrapper, Header, Image, Overlay, Text } from './styles';
import reddit from './../../Images/reddit.png';
import weather1 from './../../Images/Weather1.png';
import myweb from './../../Images/portfolio-cover3.jpeg';
import streamer from './../../Images/Steaming_thumbnail.jpeg';
import youtube from './../../Images/youtube_cover.jpeg'
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
                  Social News App
                </Text>
              </Overlay>
              </Link>
          </Card>
        <Card data-aos="zoom-in" data-aos-easing="ease-out-cubic">
            <Link to="/project-weather" style={{ textDecoration: "none" }} >
                <Image src={weather1} />
                <Overlay>
                  <Text>
                    The Weather
                  </Text>
                </Overlay>
            </Link>
        </Card>
        <Card data-aos="zoom-in" data-aos-easing="ease-out-cubic">
            <Link to="/project-streamer" style={{ textDecoration: "none" }} >
              <Image src={streamer} />
              <Overlay>
                <Text>
                    Live Streaming
                </Text>
              </Overlay>
            </Link>
        </Card>
        <Card data-aos="zoom-in" data-aos-easing="ease-out-cubic">
            <Link to="/project-youtube" style={{ textDecoration: "none" }} >
                <Image src={youtube} />
                <Overlay>
                  <Text>
                    YouTube Replica
                  </Text>
                </Overlay>
            </Link>
        </Card>
        <Card data-aos="zoom-in" data-aos-easing="ease-out-cubic">
            <Link to="/project-portfolio" style={{ textDecoration: "none" }} >
                <Image src={myweb} />
                <Overlay>
                  <Text>
                    My Website
                  </Text>
                </Overlay>
            </Link>
        </Card>
      </Wrapper>
    </Container>
  );

}