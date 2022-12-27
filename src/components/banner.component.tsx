import React from "react";
import Alert from "@mui/joy/Alert";
import { IconButton } from "@mui/joy";
import CloseIcon from "@mui/icons-material/Close";
import { CIconButton } from "./iconbutton";

export const CBanner = (props) => {
  const { children, ...rest } = props;
  console.log(`==============>1`);
  console.log(1);

  return (
    <>
      <Alert
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          width: "100%",
        }}
        variant="solid"
        color="primary"
        endDecorator={
          <CIconButton>
            <CloseIcon />
          </CIconButton>
        }
        {...rest}
      >
        {children}
      </Alert>
    </>
  );
};
