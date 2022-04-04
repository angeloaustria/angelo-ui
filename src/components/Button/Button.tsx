import React, { ButtonHTMLAttributes } from "react";
import { ClassNames } from "@emotion/react";
import "./Button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  label: string;
  large?: boolean;
  small?: boolean;
}

const Button = (props: ButtonProps) => {
  const { large, small, ...otherButtonProps } = props;
  return (
    <ClassNames>
      {({ cx }) => (
        <button
          className={cx(
            "angelo-ui-button",
            { "angelo-ui-small": small },
            { "angelo-ui-large": large }
          )}
          {...otherButtonProps}
        >
          {otherButtonProps.label}
        </button>
      )}
    </ClassNames>
  );
};

export default Button;
