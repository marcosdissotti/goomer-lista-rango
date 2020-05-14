import React from 'react';
import { Switch, Route, RouteProps } from 'react-router-dom';

import Main from '../pages/Main';

//Switch - uma rota apenas seja exibida.
// exact - para incluir no path exatamente a /

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
  </Switch>
);

export default Routes;
