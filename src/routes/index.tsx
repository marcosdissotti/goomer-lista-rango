import React from 'react';
import { Switch, Route, RouteProps } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

//Switch - uma rota apenas seja exibida.
// exact - para incluir no path exatamente a /

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository" component={Repository} />
  </Switch>
);

export default Routes;