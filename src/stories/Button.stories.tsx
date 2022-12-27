import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Box from "@mui/joy/Box";

import { CButton } from "../components/button.component";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { CIconButton } from "../components/iconbutton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
export default {
  title: "Example/Button",
  component: CButton,
} as ComponentMeta<typeof CButton>;

const Template: ComponentStory<typeof CButton> = (args) => (
  <CButton {...args} />
);

export const Playground = Template.bind({});
// Playground.args = {
//   label: "Click me!",
// };

export const Variants: ComponentStory<typeof CButton> = () => (
  <>
    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
      <CButton>Primary</CButton>
      <CButton variant="outlined">outlined</CButton>
      <CButton variant="plain">plain</CButton>
    </Box>
    <br></br>
    <h2>disbale</h2>
    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
      <CButton disabled>Primary</CButton>
      <CButton disabled variant="outlined">
        outlined
      </CButton>
      <CButton disabled variant="plain">
        plain
      </CButton>
    </Box>
  </>
);

export const IconButton: ComponentStory<typeof CIconButton> = () => {
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

// export const Secondary: ComponentStory<typeof Button> = () => (
//   <Stack spacing={2} maxWidth={300}>
//     {/* <Button variant="text" label="Text Button" /> */}
//     {/* <Button variant="contained" label="Contained Button" /> */}
//     <Button>Text</Button>
//     <Button>Text</Button>
//   </Stack>
// );
// export const Teriary: ComponentStory<typeof Button> = () => (
//   <Stack spacing={2} maxWidth={300}>
//     {/* <Button variant="text" label="Text Button" /> */}
//     {/* <Button variant="contained" label="Contained Button" /> */}
//     <Button>Text</Button>
//     <Button>Text</Button>
//   </Stack>
// );

// export const Colors: ComponentStory<typeof Button> = () => (
//   <Stack spacing={2} maxWidth={300}>
//     <Button variant="contained" label="Primary" />
//     <Button variant="contained" color="secondary" label="Secondary" />
//     <Button variant="contained" color="success" label="Success" />
//     <Button variant="contained" color="error" label="Error" />
//   </Stack>
// );

// export const Sizes: ComponentStory<typeof Button> = () => (
//   <Stack spacing={2} maxWidth={300}>
//     <Button variant="contained" size="small" label="Small" />
//     <Button variant="contained" size="medium" label="Medium" />
//     <Button variant="contained" size="large" label="Large" />
//   </Stack>
// );
