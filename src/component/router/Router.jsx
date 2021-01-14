import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderLayout from '../layouts/Header.layout';
import DetailsLayout from '../layouts/Details.layout';
import Home from '../views/Home';
import Search from '../views/Search';

import PrivateRoute from './PrivateRoute';
import Details from '../views/Details';
import Shipping from '../views/Shipping';
import NotFound from '../views/NotFound';
import AnnouncementDetailled from '../AnnouncementDetailled/AnnouncementDetailled';

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute
          exact
          path="/annonces"
          layout={HeaderLayout}
          component={Search}
        />
        <PrivateRoute
          path="/panier"
          layout={DetailsLayout}
          component={Shipping}
        />
        <PrivateRoute
          path="/benoit"
          layout={DetailsLayout}
          component={() => {
            const annonce = {
              name: 'Linkedin',
              prix: '50€',
              localisation: 'Paris',
              expertise: 'Full Stack',
              logoSmall: 'logo',
            };
            return <AnnouncementDetailled announcement={annonce} />;
          }}
        />
        <PrivateRoute
          path="/annonces/:slug"
          layout={DetailsLayout}
          component={Details}
        />
        <PrivateRoute
          exact
          path="*"
          layout={DetailsLayout}
          component={NotFound}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
