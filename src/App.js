import React from 'react';
import { LandingPage } from './Components/LandingPage/landing';
import { GlobalStyle, Container } from './styles';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
    <LandingPage />
    <Container colour="purple"/>
    <Container colour="red"/>
    <Container colour="pink"/>
    <Container colour="blue"/>


    </div>
  );
}

export default App;
