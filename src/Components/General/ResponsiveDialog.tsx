import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

interface DialogProps {
  isOpen: boolean;
  userId: number;
  handleAccept: (id: number) => void;
  handleClose: () => void;
}

const ResponsiveDialog: React.FC<DialogProps> = (props) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));



  return (
    <Dialog
      fullScreen={fullScreen}
      open={props.isOpen}
      onClose={props.handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Delete"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>Confim deleting user?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          autoFocus
          onClick={props.handleClose}
        >
          Disagree
        </Button>
        <Button onClick={()=>{props.handleAccept(props.userId)}} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default ResponsiveDialog;
