
import React, {createContext, useContext, useState} from "react";
import {useLocation, Navigate} from "react-router-dom";
import noop from 'lodash/noop';

import { SESSION_USER_KEY, SESSION_JWT_KEY } from "../util/constants";

const AuthContext = createContext(null);
const useAuth = () => {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [jwt, setJwt] = useState(JSON.parse(sessionStorage.getItem(SESSION_JWT_KEY)));
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem(SESSION_USER_KEY)));

    const authFetch = (url, method = 'GET', body = null, bearer) => fetch(url, {
        method: method,
        headers: {
            'Authorization': `Bearer ${bearer || jwt}`,
        },
        body,
    });
    const login = (idToken, cb = noop) => {
        /**
         * This is a protected route.
         * We will verify the JWT server side and return some user data.
         */
        authFetch('api/user/profile', 'GET', null, idToken)
            .then((res) => {
                if (res.ok) {return res.json();}
                
                throw new Error(`(${res.status}) Unable to request user profile`);
            })
            .then((user) => {
                // set session storage + state
                sessionStorage.setItem(SESSION_JWT_KEY, JSON.stringify(idToken));
                setJwt(idToken);
                sessionStorage.setItem(SESSION_USER_KEY, JSON.stringify(user));
                setUser(user);
                cb();
            })
            .catch((err) => {
                // clear session storage + state
                logout();
                console.error(err);
            });
    };
    const logout = (cb = noop) => {
        sessionStorage.removeItem(SESSION_JWT_KEY);
        setJwt(null);
        sessionStorage.removeItem(SESSION_USER_KEY);
        setUser(null);
        cb();
    };
    const value = {user, authFetch, login, logout};
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function RequireAuth({children}) {
    let auth = useAuth();
    let location = useLocation();
  
    if (!auth.user) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
}

export default useAuth;