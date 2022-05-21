/** React Imports */
import React, {Suspense} from "react";
import {Navigate} from "react-router-dom";

const user = JSON.parse(localStorage.getItem("authUser"));

const PublicRoute = ({children, route}) => {
    if (route) {

        const restrictedRoute = route.meta && route.meta.restricted

        if (user && restrictedRoute) {
            return <Navigate to="/"/>
        }
    }

    return <Suspense fallback={null}>{children}</Suspense>
}

export default PublicRoute
