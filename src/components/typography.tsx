import React from "react";
import Typography, { TypographyProps } from "@mui/joy/Typography";

export interface CTypographyProps extends TypographyProps {
  //
}

export const CTypography = (props: CTypographyProps) => {
  return <Typography {...props} />;
};
