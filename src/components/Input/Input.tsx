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
  const { fullWidth, inputRef, large, small, ...otherInputProps } = props;
  return (
    <ClassNames>
      {({ cx }) => (
        <input
          ref={inputRef}
          className={cx(
            "angelo-ui-input",
            { "angelo-ui-full-width": fullWidth },
            { "angelo-ui-small": small },
            { "angelo-ui-large": large }
          )}
          {...otherInputProps}
        />
      )}
    </ClassNames>
  );
};

export default Input;
