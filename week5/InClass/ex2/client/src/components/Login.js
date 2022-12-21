import React from "react";
import { Button } from "@mui/material";
import "./Login.css";

import { auth, provider } from "../firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

const Login = () => {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      }).catch((e) => alert(e.message));
    });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="logo512.png" alt="whatapp" />
        <div className="login__text">
          <h1>Sign in to Messaging App</h1>
        </div>
        <button onClick={signIn}>Sign In with Google</button>
      </div>
    </div>
  );
};

export default Login;
