//protects routes that require authentication
import React, {useContext} from "react";
import {Navigate} from 'react-router-dom';
import { AuthContext } from "./AutoContext";

const ProtectedRoute = ({children}) => {
    const {auth} = useContext(AuthContext);

    if (!auth) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;