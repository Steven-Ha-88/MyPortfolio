import React, { useContext } from "react";
import { Switch, Route, __RouterContext } from "react-router-dom";
// import { useTransition, animated } from "react-spring";
import Home from "./Home";
import Navbar from "./Components/Navbar/index";

const App = () => {
  // const { location } = useContext(__RouterContext);
  // const transitions = useTransition(location, location => location.pathname, {
  //   from: { opacity: 0, transform: "translate(-100%, 0)" },
  //   enter: { opacity: 1, transform: "translate(0%, 0)" },
  //   leave: { opacity: 0, transform: "translate(-100%, 0)" }
  // });

  return (
    <>
      <Navbar />
      {/* {transitions.map(({ item, props, key }) => ( */}
      {/* <animated.div key={key} style={props}> */}
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
      {/* </animated.div> */}
      {/* ))}  */}
    </>
  );
};

export default App;
