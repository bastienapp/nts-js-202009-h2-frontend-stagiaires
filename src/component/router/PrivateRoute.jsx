/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Auth from '../../authenticate/Authenticate';

function LayoutedRoute({ layout: Layout, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        Auth.isAuthenticate ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to={{ pathname: '/connexion' }} />
        )
      }
    />
  );
}

LayoutedRoute.propTypes = {
  layout: PropTypes.func.isRequired,
  component: PropTypes.func.isRequired,
};

export default LayoutedRoute;
