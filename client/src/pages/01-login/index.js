import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SignInWithGoogle } from 'react-sign-in-with-google';

import T01Login from "../../components/templates/01-login";

import useAuth from "../../contexts/auth";
import {GOOGLE_CLIENT_ID} from '../../util/constants';

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

    const responseGoogle = (response) => {
        console.log('responseGoogle', response);
        const idToken = response.credential;

        login(idToken, () => navigate(from, { replace: true, from: '/settings/account' }));
    };
    const googleButton = <SignInWithGoogle clientId={GOOGLE_CLIENT_ID} handleGoogleSignIn={responseGoogle} />;

    return (
        <T01Login
            googleButton={googleButton}
        />
    );
};

export default P01Login;