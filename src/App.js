import React from 'react';
import { LandingPage } from './Components/LandingPage/landing';
import { GlobalStyle, Container, Section, Wrapper, WrapperTwo, Header, Description, Stack} from './styles';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
    <LandingPage />
    <Section>
      <Wrapper colour="#ffb160">
        <h1 style={{ fontSize: "4em", margin: "0px", marginRight: "15px"}}>My</h1>
        <h1 style={{ fontSize: "5em", margin: "0px", marginRight: "10px"}}>Portfolio :)</h1>
      </Wrapper>
      <WrapperTwo colour="#277da7">
        <Header>About Me</Header>
        <Description textAlign="start">
        Front-end Developer(React/Redux) with Back-end experience <br /> (Node.js, Express and MongoDB). My background is in computer science <br /> with a huge interest in Cloud Services. I enjoy using the latest technology to deliver the simplest solution. Aside from coding, I love to game and travel.
        </Description>
      </WrapperTwo>
    </Section>
    <Container colour="#288869de" height="400px" fontcolor="white">
      <h1>Tech Stack</h1>
      <Description textAlign="center">
        JavaScript | TypeScript | React | Redux | HTML5 | CSS3 | Styled-Components |<br/> 
        Node.js | Express | MongoDB |
        Bootstrap4 | Jest | Enzyme
      </Description>
      <Stack>
        <i className="devicon-javascript-plain"></i>
        <i className="devicon-typescript-plain"></i>
        <i className="devicon-react-original"></i>
        <i className="devicon-html5-plain-wordmark"></i>
        <i className="devicon-css3-plain-wordmark"></i>
        <i className="devicon-nodejs-plain"></i>
        <i className="devicon-github-plain"></i>
      </Stack>
    </Container>
    <Container colour="white" height="800px" fontcolor="black">
        <h1>Projects</h1>
    
    </Container>
    </div>
  );
}

export default App;
