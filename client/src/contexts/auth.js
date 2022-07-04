
import React, {createContext, useContext, useState} from "react";
import {useLocation, Navigate} from "react-router-dom";
import noop from 'lodash/noop';

import { USER_SESSION_KEY } from "../util/constants";

const AuthContext = createContext(null);
const useAuth = () => {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem(USER_SESSION_KEY)));

    const login = (user, cb = noop) => {
        sessionStorage.setItem(USER_SESSION_KEY, JSON.stringify(user));
        setUser(user);
        cb();
    };
    const logout = (cb = noop) => {
        sessionStorage.removeItem(USER_SESSION_KEY);
        setUser(null);
        cb();
    };
    const value = {user, login, logout};
  
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