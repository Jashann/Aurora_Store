import React, { useState } from "react";
import { Link } from "react-router-dom";

import FormGroup from "../../Templates/form-group/form-group.component";

import "./signIn.styles.scss";
import { StyledButton } from "./../../Templates/Buttons_Styled/botton.styled";

import { signUpWithEmailAndPassword } from "../../../Firebase/auth";

import { MessageHandler } from "../../../UIHandler/uiHandler";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword)
      signUpWithEmailAndPassword(email, password);
    else MessageHandler.showMessage("Passwords don't match");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "confirm_password") setConfirmPassword(value);
  };

  return (
    <div className="px-3 sign-in">
      <h2>Sign Up</h2>
      <span>I don't have an acoount</span>
      <form onSubmit={handleSubmit} autoComplete="false" className="my-2">
        <FormGroup onChange={handleChange} name="email" type="email">
          Email
        </FormGroup>

        <FormGroup onChange={handleChange} name="password" type="password">
          Password
        </FormGroup>
        <FormGroup
          onChange={handleChange}
          name="confirm_password"
          type="password"
        >
          Confirm Password
        </FormGroup>

        <StyledButton primary type="submit">
          Sign Up
        </StyledButton>
        <br />
        <Link className="text-primary font-2" to="/Aurora_Store/sign-in">
          Go To Sign In Page!
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
