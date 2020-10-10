import React, { useState } from "react";
import FormGroup from "../../Templates/form-group/form-group.component";

import { Link, useRouteMatch } from "react-router-dom";

import "./signIn.styles.scss";
import { StyledButton } from "./../../Templates/Buttons_Styled/botton.styled";

import {
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../../../Firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const currentPath = useRouteMatch().path;

  return (
    <div className="px-3 sign-in">
      <h2>Sign In</h2>
      <span>I already have an account</span>

      <form onSubmit={handleSubmit} autoComplete="off" className="my-2">
        <FormGroup onChange={handleChange} type="email" name="email">
          Email/Username:
        </FormGroup>
        <FormGroup onChange={handleChange} type="password" name="password">
          Password
        </FormGroup>
        <div className="d-flex mb-1">
          <StyledButton primary type="submit">
            Sign In
          </StyledButton>
          <StyledButton
            secondary
            onClick={signInWithGoogle}
            type="button"
            className="ml-1"
          >
            Sign in with Google
          </StyledButton>
        </div>
        <Link className="text-primary" to={currentPath + "/reset-password"}>
          Forget Password?
        </Link>
        <br />
        <Link className="text-primary font-2" to="/Aurora_Store/sign-up">
          Don't have account? Sign Up Now!
        </Link>
      </form>
    </div>
  );
};

export default SignIn;
