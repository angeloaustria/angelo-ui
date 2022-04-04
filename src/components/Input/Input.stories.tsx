import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const ClickMe = Template.bind({});
ClickMe.args = {
  disabled: false,
  placeholder: "Enter message",
  value: "Hello world",
};
