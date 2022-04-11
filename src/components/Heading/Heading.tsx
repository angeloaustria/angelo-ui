import React, { HTMLAttributes } from "react";
import { ClassNames } from "@emotion/react";
import "./Heading.css";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  bold?: boolean;
  label: string;
}

const Heading = (props: HeadingProps) => {
  const { children, element: Element, bold = false, label, ...otherHeadingProps } = props;
  return (
    <ClassNames>
      {({ cx }) => (
        <Element
          className={cx(
            "angelo-ui-heading",
            { "angelo-ui-heading-bold": bold },
          )}
          {...otherHeadingProps}
        >
          {label}
        </Element>
      )}
    </ClassNames>
  );
};

export default Heading;
