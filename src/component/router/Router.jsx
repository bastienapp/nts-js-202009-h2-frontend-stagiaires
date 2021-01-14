import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderLayout from '../layouts/Header.layout';
import DetailsLayout from '../layouts/Details.layout';
import Home from '../views/Home';
import Search from '../views/Search';

import PrivateRoute from './PrivateRoute';
import Shipping from '../views/Shipping';
import NotFound from '../views/NotFound';

import AnnouncementDetailled from '../views/AnnouncementDetailled';

import SignIn from '../views/SignIn';
import SignUpTrainee from '../views/SignUpTrainee';
import SignUpCompany from '../views/SignUpCompany';
import AnnonceProvider from '../../Context/AnnonceContext';

function Router() {
  return (
    <AnnonceProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Connexion" component={SignIn} />
          <Route
            exact
            path="/inscription-stagiaire"
            component={SignUpTrainee}
          />
          <Route
            exact
            path="/inscription-entreprise"
            component={SignUpCompany}
          />
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
            path="/annonces/:slug/:id"
            layout={DetailsLayout}
            component={AnnouncementDetailled}
          />
          <PrivateRoute
            exact
            path="*"
            layout={DetailsLayout}
            component={NotFound}
          />
        </Switch>
      </BrowserRouter>
    </AnnonceProvider>
  );
}

export default Router;
