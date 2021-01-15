import React, { useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import axios from 'axios';
import HeaderLayout from '../layouts/Header.layout';
import DetailsLayout from '../layouts/Details.layout';
import Home from '../views/Home';
import Search from '../views/Search';
import Auth from '../../authenticate/Authenticate';

import PrivateRoute from './PrivateRoute';
import Shipping from '../views/Shipping';
import NotFound from '../views/NotFound';

import AnnouncementDetailled from '../views/AnnouncementDetailled';

import SignIn from '../views/SignIn';
import SignUpTrainee from '../views/SignUpTrainee';
import SignUpCompany from '../views/SignUpCompany';
import AnnonceProvider from '../../Context/AnnonceContext';

function Router() {
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('TOKEN')) {
      axios
        .get(`${process.env.REACT_APP_SERVER}/login/checkAuth`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('TOKEN')}`,
            'Access-Control-Allow-Origin': process.env.REACT_APP_SERVER,
          },
        })
        .then((res) => {
          if (res.data.success) {
            Auth.logIn(() => history.push('/annonces'));
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);
  return (
    <AnnonceProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Connexion" component={SignIn} />
        <Route exact path="/inscription-stagiaire" component={SignUpTrainee} />
        <Route exact path="/inscription-entreprise" component={SignUpCompany} />
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
    </AnnonceProvider>
  );
}

export default Router;
