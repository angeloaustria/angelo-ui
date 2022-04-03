import React, { InputHTMLAttributes } from "react";
import { ClassNames } from "@emotion/react";
import "./Input.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  large?: boolean;
  small?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const { fullWidth, small, large, ...otherInputProps } = props;
  return (
    <ClassNames>
      {({ cx }) => (
        <input
          className={cx(
            "angelo-ui-input",
            { "angelo-ui-full-width": props.fullWidth },
            { "angelo-ui-small": props.small },
            { "angelo-ui-large": props.large }
          )}
          {...otherInputProps}
        />
      )}
    </ClassNames>
  );
};

export default Input;
