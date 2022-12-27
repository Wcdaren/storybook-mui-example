import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box, Stack, useTheme } from "@mui/joy";
import { CTypography } from "../components/typography";

export default {
  title: "Example/Typography",
  component: CTypography,
};

const Template: ComponentStory<typeof CTypography> = (args) => (
  <CTypography {...args} />
);

// export const Playground = Template.bind({});
// Playground.args = {
//   label: "Click me!",
// };

export const Variants: ComponentStory<typeof CTypography> = () => {
  const theme = useTheme();
  console.log(`==============>theme.typography`);
  console.log(theme.typography);

  return (
    <>
      <Stack direction={"column"} justifyContent="flex-start">
        {Object.entries(theme.typography).map(([level, value]) => {
          console.log(`==============>level`);
          console.log(level);
          if (!value) return "";
          return (
            <CTypography key={level} level={level} textAlign="start">
              {level}. Castlery Desgin
            </CTypography>
          );
        })}
        {/* <CTypography level="h1">h1.Castlery Desgin</CTypography>
        <CTypography level="h2">h2.Castlery Desgin</CTypography>
        <CTypography level="h3">h3.Castlery Desgin</CTypography>
        <CTypography level="h4">h4.Castlery Desgin</CTypography> */}
      </Stack>
    </>
  );
};
