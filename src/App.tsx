import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Extensions, Home, NoMatch, SignIn, SignUp, Snippets } from "./pages";

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
