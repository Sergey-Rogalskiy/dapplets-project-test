import React from 'react';
import { Switch, Route } from 'react-router';
import Header from '../Header/Header';
import { Dapplets, Intro } from '../../pages';
import './App.css';

function App() {
  return (
    <>
      <Header />
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
