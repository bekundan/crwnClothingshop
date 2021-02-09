import styled, { css } from "styled-components";

const ButtonStyle = css`
  background-color: black;
  color: #ffffff;
  border: none;
  &:hover {
    background-color: #fff;
    color: #000;
    border: 1px solid black;
  }
`;
const invertedButtonStyle = css`
  background-color: #fff;
  color: #000;
  border: 1px solid #000000;

  &:hover {
    background-color: #000000;
    color: #fff;
    border: none;
  }
`;

const googleSignInStyle = css`
  background-color: #4285f4;
  color: #fff;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;
const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyle;
  }
  return props.inverted ? invertedButtonStyle : ButtonStyle;
};

export const CustomButtonContainer = styled.button`
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #000;
  color: #fff;
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
