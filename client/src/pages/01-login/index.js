import { useEffect } from "react";
import {
    useNavigate,
    useLocation,
} from "react-router-dom";

import useAuth from "../../contexts/auth";

const P01Login = () => {
    const navigate = useNavigate();
    const {user, login} = useAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(function userIsAlreadyLoggedIn() {
        /**
         * If we already have a user, redirect them to their acccount page.
         * 
         * We will also forward the `from` state onto the account page so when
         * the user clicks back they will go back to the page before they
         * navigated to the login page.
         * 
         * They will have the option to logout or switch user on the account page.
         */
        if (user) {navigate('/settings/account', { replace: true, from: from })};
    }, [user, from, navigate])

    const handleLogin = () => login(
        {name: 'James Hill'},
        /**
         * Navigate to where they were before they logged in.
         * If the user clicks back, send them to the account page instead.
         */
        () => navigate(from, { replace: true, from: '/settings/account' })
    );

    return (
        <>
            <h1>Login</h1>
            <button onClick={handleLogin}>Set User</button>
        </>
    );
};

export default P01Login;