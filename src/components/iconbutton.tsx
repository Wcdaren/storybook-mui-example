import React from "react";

import IconButton, { IconButtonProps } from "@mui/joy/IconButton";
// Only include variant, size, color from MuiButtonProps
// type ButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "color">;

// Include everything from MuiButtonProps except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface CIconButtonProps extends IconButtonProps {
  // label: string;
}

export const CIconButton = ({ ...rest }: CIconButtonProps) => (
  <IconButton variant="solid" {...rest}>
    {/* {label} */}
  </IconButton>
);

CIconButton.defaultProps = {
  // variant: "contained",
  // size: "medium",
  // color: "primary",
};
