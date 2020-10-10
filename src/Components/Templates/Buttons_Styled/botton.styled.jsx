import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  border: none;
  height: 40px;
  background: #c3c3c329;
  padding: 0px 19px;
  display: block;
  border-radius: 100px;
  width: 100%;
  color: #333;
  font-family: Quicksand;
  font-size: 1.05rem;
  transition: 0.1s;
  font-weight: 700;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.9;
    transform: scale(1.01);
  }
  ${(props) =>
    props.primary &&
    css`
      background: #6ddba4;
    `}
  ${(props) =>
    props.secondary &&
    css`
      background: #44c3ff;
    `}
`;
