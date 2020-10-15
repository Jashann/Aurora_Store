import React from "react";
// import "./form-group.styles.scss";

import styled from "styled-components";

const StyledFormGroup = styled.div`
  margin: 1.4rem 0;
  & > * {
    display: block;
  }
`;
const StyledLabel = styled.label`
  padding-left: 7px;
`;
const StyledInput = styled.input`
  border: none;
  height: 40px;
  width: 100%;
  color: #333;
  background: #e8f0fe;
  padding: 0px 19px;
  display: block;
  border-radius: 100px;
  font-family: Quicksand;
  font-size: 1.05rem;
  transition: 0.1s;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.9;
    transform: scale(1.01);
  }
`;

class FormGroup extends React.Component {
  render() {
    const { children, ...otherprops } = this.props;
    return (
      <StyledFormGroup>
        <StyledLabel> {children} </StyledLabel>
        {/* <input required autoComplete="false" {...otherprops} /> */}
        <StyledInput required autoComplete="false" {...otherprops} />
      </StyledFormGroup>
    );
  }
}

export default FormGroup;
