import React from "react";
// import {
//   Button as MuiButton,
//   ButtonProps as MuiButtonProps,
// } from "@mui/material";

import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/joy/Button";
// Only include variant, size, color from MuiButtonProps
// type ButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "color">;
type ButtonBaseProps = MuiButtonProps;

// Include everything from MuiButtonProps except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface ButtonProps extends ButtonBaseProps {
  // label: string;
}

export const Button = ({  ...rest }: ButtonProps) => (
  <MuiButton {...rest}>
    {/* {label} */}
  
  </MuiButton>
);

Button.defaultProps = {
  // variant: "contained",
  // size: "medium",
  // color: "primary",
};
