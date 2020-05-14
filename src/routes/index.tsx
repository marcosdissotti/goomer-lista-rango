import React from 'react';
import { Switch, Route, RouteProps } from 'react-router-dom';

import Main from '../pages/Main';
import Restaurant from '../pages/Restaurant';

//Switch - uma rota apenas seja exibida.
// exact - para incluir no path exatamente a /

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/restaurante" component={Restaurant} />
  </Switch>
);

export default Routes;
