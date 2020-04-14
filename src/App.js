import React, { useContext } from "react";
import { Router, Switch, Route, __RouterContext, BrowserRouter } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Home from "./Home";
import { Portfolio } from "./Components/PortfolioPage/index.js";
import history from "./history";


const App = () => {
  // const { location } = useContext(__RouterContext);
  // const transitions = useTransition(location, location => location.pathname, {
  //   from: { opacity: 0, transform: "translate(-100%, 0)" },
  //   enter: { opacity: 1, transform: "translate(0%, 0)" },
  //   leave: { opacity: 0, transform: "translate(-100%, 0)" }
  // });

  return (
    <>
            <Router history={history}>
              <Route exact path="/" component={Home} />
              <Route exact path="/Portfolio" render={(props) => <Portfolio {...props} header="Hello World" description="blablabla" />} />
            </Router>
            
        {/* {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
          </animated.div>
        ))} */}
    </>
  );
};

export default App;
