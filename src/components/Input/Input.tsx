import React, { InputHTMLAttributes, MutableRefObject } from "react";
import { ClassNames } from "@emotion/react";
import "./Input.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  inputRef?: MutableRefObject<HTMLInputElement | null>;
  large?: boolean;
  small?: boolean;
}

const Input: React.FC<InputProps> = (props) => {
  const { fullWidth, small, large, inputRef, ...otherInputProps } = props;
  return (
    <ClassNames>
      {({ cx }) => (
        <input
          ref={inputRef}
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
