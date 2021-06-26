import React, { useContext } from 'react';
import firebaseConfig from '../../firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';


firebase.initializeApp(firebaseConfig);

const Login = () => {
    const user = useContext(userContext);
    const [loggedInUser, setLoggedInuser] = user;
    console.log(loggedInUser);
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };


    const provider = new firebase.auth.GoogleAuthProvider();

    function handleSigninMethod(){
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            setLoggedInuser(user);
            history.replace(from);
        }).catch((error) => {
            // Handle Errors here.
            var errorMessage = error.message;
            alert("Fail ", errorMessage)
        });
    }
    return (
        <div style={{textAlign:'center', margin:'200px'}}>
            <div className="login">
                <h2>Login With</h2>
                <button onClick = {()=>handleSigninMethod()}>Continue with Google</button>
                <p>Don't have an account? <a href="#">Create an account</a></p>
            </div>
        </div>
    );
};

export default Login;