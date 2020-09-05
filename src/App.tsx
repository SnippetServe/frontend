import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Extensions, Home, NoMatch, SignIn, SignUp, Snippets } from './pages';

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
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter initial={false}>
              <Switch location={location} key={location.pathname}>
                <Route exact path="/signin" render={() => <SignIn />} />
                <Route exact path="/signup" render={() => <SignUp />} />
              </Switch>
            </AnimatePresence>
          )}
        />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
