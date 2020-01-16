import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ component: Component, authed, ...rest }) => (
    <Route
        render={(routeProps) =>
            authed ? (
                <Component {...routeProps} />
            ) : (
                <Redirect
                    to={{ pathname: '/', state: { from: routeProps.location } }}
                />
            )
        }
        {...rest}
        exact
    />
);

export default PrivateRoute;
