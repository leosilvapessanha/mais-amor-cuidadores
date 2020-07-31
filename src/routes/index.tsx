import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutTakeCare from '../pages/AboutTakeCare';
import WhoAmI from '../pages/WhoAmI';
import Services from '../pages/Services';
import Diferencial from '../pages/Diferencial';
import Contact from '../pages/Contact';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={AboutTakeCare} />
    <Route path="/quemsomos" exact component={WhoAmI} />
    <Route path="/servicos" exact component={Services} />
    <Route path="/diferenciais" exact component={Diferencial} />
    <Route path="/contato" exact component={Contact} />
  </Switch>
);

export default Routes;
