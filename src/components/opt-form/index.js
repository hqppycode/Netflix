import React from "react";
import { Container, Input, Button, Text, Break } from "./styles/opt-form";

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

// children are not passed down as an input doesn't have children
OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

// Here, children is the text within the button
OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
