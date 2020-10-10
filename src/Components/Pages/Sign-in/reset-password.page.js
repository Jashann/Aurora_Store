import React from "react";
import FormGroup from "./../../Templates/form-group/form-group.component";

import { Link } from "react-router-dom";

import { resetPassword } from "./../../../Firebase/auth";

import { StyledButton } from "./../../Templates/Buttons_Styled/botton.styled";

export default class ResetPasswordPage extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let value = e.target.value;
    this.setState({ email: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    resetPassword(this.state.email);
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        id="reset-password"
        className="my-3 p-3"
      >
        <FormGroup
          onChange={this.handleChange}
          value={this.state.email}
          type="email"
        >
          Email:
        </FormGroup>
        <StyledButton primary className="btn btn-primary">
          Reset Password
        </StyledButton>
        <div className="mt-3">
          <Link className="text-primary" to="/Aurora_Store/sign-in">
            Go to Sign Page
          </Link>
        </div>
      </form>
    );
  }
}
