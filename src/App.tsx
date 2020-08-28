import React from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Snippets, Extensions, SignIn, SignUp, NoMatch } from "./pages";

// NOTE:  we need to do setup for github pages because its not working properly with react-router
//  https://github.com/rafgraph/spa-github-pages

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/snippets">
          <Snippets />
        </Route>
        <Route exact path="/extensions">
          <Extensions />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
