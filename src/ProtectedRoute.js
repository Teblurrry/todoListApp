//protects routes that require authentication
import React, {Component, useContext} from "react";
import {Route, Redirect} from 'react-router-dom';
import { AuthContext } from "./AutoContext";

const ProtectedRoute = ({component: Component, ...rest}) => {
    const {auth} = useContext(AuthContext);

    return (
        <Route
        {...rest}
        render = {props => 
        auth ? (
            <Component {...props} />
        ) : (
            <Redirect to="/login" />
        )}
        />
    );
};

export default ProtectedRoute;