import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" element={ <Login /> } />
      <Route exact path="/depoimentos/:user" element={ <Main /> } />
    </Switch>
  );
};

export default Routes;