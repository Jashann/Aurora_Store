import React from "react";
import { useHistory } from "react-router-dom";
import { MessageHandler } from "./../../../UIHandler/uiHandler";
import "./message.styles.scss";

import { StyledButton } from "./../Buttons_Styled/botton.styled";

const Message = () => {
  const history = useHistory();
  return (
    <div style={{ display: "block" }} className="messages">
      {/* <div className="message d-flex py-2 px-2">
        <div>You need to be signed to add product in cart</div>
        <div className="close-btn">
          <ion-icon name="close-circle-outline"></ion-icon>
        </div>
      </div> */}
      <div id="signInLink" className="container flex-center">
        <StyledButton
          primary
          type="submit"
          className="btn btn-secondary"
          onClick={() => {
            history.push("/Aurora_Store/sign-in");
            MessageHandler.hideMessage();
          }}
        >
          Sign In
        </StyledButton>
      </div>
    </div>
  );
};

export default Message;
