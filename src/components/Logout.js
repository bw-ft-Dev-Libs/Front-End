//LOGOUT CREATED BY J.ATWOOD

import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { withStyles } from '@material-ui/core/styles';
import DialogTitle from "@material-ui/core/DialogTitle";

const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #29ABA4 30%, #E0FFFF 90%)',
      borderRadius: 3,
      border: 0,
      color: 354458,
      height: 48,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(53, 68, 88, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);
  
  export default function Logout() {
  
      const [open, setOpen] = React.useState(false);
  
      const handleClickOpen = () => {
          setOpen(true);
        };
  
      const logout = e => {
          localStorage.clear();
          window.location.href = "/";
        }
  
  return (
      <div>
          <StyledButton onClick={handleClickOpen}>
  LOGOUT      </StyledButton>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Goodbye!"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
             Thanks for visiting DevLibs!
             <br />
              You will now return to the Homepage!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={logout} >
              X close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  )};