import React, { InputHTMLAttributes } from "react";
import { ClassNames } from "@emotion/react";
import "./Chat.css";

export interface ChatProps {
    sender?: boolean;
    text: string;
}

const Input: React.FC<ChatProps> = (props) => {
  return (
    <ClassNames>
      {({ cx }) => (
        <div
          className={cx(
            "angelo-ui-chat",
            { "angelo-ui-chat-receiver": !props.sender },
            { "angelo-ui-chat-sender": props.sender }
          )}
        >
            {props.text}
        </div>
      )}
    </ClassNames>
  );
};

export default Input;
