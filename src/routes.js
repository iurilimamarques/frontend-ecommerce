import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';

export default function Routes() {
  return(
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
    </BrowserRouter>
  );
}
