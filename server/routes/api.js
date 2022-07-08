const express = require('express')
const firebaseApp = require('../firebase');
const { getAuth, signInWithCredential, GoogleAuthProvider } = require('firebase/auth');

const router = express.Router()

router.use(express.json());

router.post('/auth/google/login', (req, res) => {
    const idToken = req.body.idToken;
    const credential = GoogleAuthProvider.credential(idToken);

    const auth = getAuth(firebaseApp);
    signInWithCredential(auth, credential)
        .then((data) => {
            const {displayName, email, photoURL, uid, phoneNumber} = data.user.providerData[0];
            const user = {uid, displayName, email, photoURL, phoneNumber};

            return res.json({success: true, payload: {user}});
        })
        .catch((error) => {
            return res.status(403).json({success: false, error});
        });
});

module.exports = router