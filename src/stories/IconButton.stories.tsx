import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CIconButton } from "../components/iconbutton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default {
  title: "Example/IconButton",
  component: CIconButton,
} as ComponentMeta<typeof CIconButton>;

const Template: ComponentStory<typeof CIconButton> = (args) => (
  <CIconButton {...args} />
);

export const Playground = Template.bind({});
// Playground.args = {
//   label: "Click me!",
// };

export const Variants: ComponentStory<typeof CIconButton> = () => {
  return (
    <>
      <CIconButton>
        <CloseIcon />
      </CIconButton>
      <CIconButton>
        <ArrowForwardIcon />
      </CIconButton>
    </>
  );
};

export const size = () => {
  return (
    <>
      <CIconButton size="sm">
        <ArrowForwardIcon />
      </CIconButton>
      <CIconButton size="md">
        <ArrowForwardIcon />
      </CIconButton>
      <CIconButton size="lg">
        <ArrowForwardIcon />
      </CIconButton>
    </>
  );
};
