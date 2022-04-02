import React from "react";
import { ClassNames } from "@emotion/react";
import "./Button.scss";

export interface ButtonProps {
  label: string;
  large?: boolean;
  small?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <ClassNames>
      {({ cx }) => (
        <button
          className={cx(
            "angelo-ui-button",
            { "angelo-ui-small": props.small },
            { "angelo-ui-large": props.large }
          )}
        >
          {props.label}
        </button>
      )}
    </ClassNames>
  );
};

export default Button;
