import React from "react";
import { Container, Wrapper, Header } from "./styles";
// import reddit from "./../../Images/reddit.png";
// import weather1 from "./../../Images/Weather1.png";
// import myweb from "./../../Images/portfolio-cover3.jpeg";
// import streamer from "./../../Images/Steaming_thumbnail.jpeg";
// import youtube from "./../../Images/youtube_cover.jpeg";
// import { Link } from "react-router-dom";
import { Portfolio } from "./../PortfolioPage/index";
import {
  ams,
  weather,
  streamer,
  animatestv,
  tmdb,
  kel,
} from "./../../project-list";

export const Projects = () => {
  return (
    <Container id='projects'>
      <Header data-aos='fade-up'>Projects</Header>
      <Wrapper>
        <Portfolio project={tmdb} latest />
        <Portfolio project={animatestv} />
        <Portfolio project={ams} />
        <Portfolio project={weather} />
        <Portfolio project={streamer} />
        <Portfolio project={kel} />
        {/* <Portfolio project={youtube} /> */}
        {/* <Portfolio project={myweb} /> */}
      </Wrapper>
    </Container>
  );
};
