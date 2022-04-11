import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Heading from "./Heading";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const ClickMe = Template.bind({});
ClickMe.args = {
  element: "h1",
  bold: false,
  label: "Angelo Austria"
};
