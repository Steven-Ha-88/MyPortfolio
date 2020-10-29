import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Components/Navbar/index";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </>
  );
};

export default App;
