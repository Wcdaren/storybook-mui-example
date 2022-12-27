import * as React from "react";
import Button from "@mui/joy/Button";
import TextField from "@mui/joy/TextField";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import Typography from "@mui/joy/Typography";
import { CButton } from "./button.component";
import { Box, ModalClose, Sheet } from "@mui/joy";

export default function BasicModalDialog() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<Add />}
        onClick={() => setOpen(true)}
      >
        New project
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="basic-modal-dialog-title"
          aria-describedby="basic-modal-dialog-description"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <Typography
            id="basic-modal-dialog-title"
            component="h2"
            level="inherit"
            fontSize="1.25em"
            mb="0.25em"
          >
            Create new project
          </Typography>
          <Typography
            id="basic-modal-dialog-description"
            mt={0.5}
            mb={2}
            textColor="text.tertiary"
          >
            Fill in the information of the project.
          </Typography>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <TextField label="Name" autoFocus required />
              <TextField label="Description" required />
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}

// export BasicModalDialog

export const Dialog = (props: any) => {
  const { children, title, content, subContent, ...rest } = props;
  return (
    <>
      <Modal layout="center" variant="plain" {...rest}>
        <ModalDialog variant="plain">
          <Sheet
            // color="rgba(193, 175, 134, 1)"
            variant="outlined"
            sx={{
              padding: "24px",
              color: "rgba(193, 175, 134, 1)",
            }}
          >
            <ModalClose />
            <Typography fontWeight="lg" mt={0.25} level="h3">
              {title}
            </Typography>
            <Typography>{content}</Typography>
            <Typography level="body3">{subContent}</Typography>
            {/* <ModalClose /> */}
            {/* <Typography>Modal title</Typography> */}
            {children}
          </Sheet>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <CButton
              variant="outlined"
              sx={{
                width: "100%",
              }}
            >
              Cancel
            </CButton>
            <CButton
              sx={{
                width: "100%",
              }}
            >
              Confirm
            </CButton>
          </Box>
        </ModalDialog>
      </Modal>
    </>
  );
};
