import React from 'react';
import { Switch, Route } from 'react-router';

import { Dapplets, Intro } from '../../pages';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route path="/dapplets">
          <Dapplets />
        </Route>
        <Route path="/">
          <Intro />
        </Route>
      </Switch>
    </>
  );
}

export default App;
