import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Box from "@mui/joy/Box";

import { Dialog } from "../components/dialog.component";
import { CButton } from "../components/button.component";

export default {
  title: "Example/Dialog",
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const Playground = Template.bind({});
// Playground.args = {
//   label: "Click me!",
// };

export const Variants: ComponentStory<typeof Dialog> = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <CButton
        variant="outlined"
        color="neutral"
        // startDecorator={<Add />}
        onClick={() => setOpen(true)}
      >
        New project
      </CButton>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title="Are you sure you want to lorem ipsum dolor sit amet?"
        content="Action consequence text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        subContent="Disclaimer text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </>
  );
};
