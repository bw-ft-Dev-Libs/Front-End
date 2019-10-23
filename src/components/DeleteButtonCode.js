// import React from "react";
// import { Card } from "../styles/CardStyles";
// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import { withStyles } from '@material-ui/core/styles';

// const StyledButton = withStyles({
//     root: {
//       background: 'linear-gradient(45deg, #29ABA4 30%, #E0FFFF 90%)',
//       borderRadius: 3,
//       border: 0,
//       color: 354458,
//       height: 48,
//       padding: '0 30px',
//       boxShadow: '0 3px 5px 2px rgba(53, 68, 88, .3)',
//     },
//     label: {
//       textTransform: 'capitalize',
//     },
//   })(Button);

// const ProfileCard = () => {
//   const [open, setOpen] = React.useState(false);
  
//       const handleClickOpen = () => {
//           setOpen(true);
//         };
  
//         const handleClose = () => {
//           setOpen(false);
//         };

//   return (
//     <div>
//       <Card>
//         <p>ProfileCard</p>
//         <p>Display Mad-Lib Here</p>
//       </Card>
//     <form>
//       <StyledButton>Edit</StyledButton>
//       <StyledButton onClick={handleClickOpen}>Delete</StyledButton>
//         <Dialog
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="alert-dialog-title"
//             aria-describedby="alert-dialog-description"
//           >
//           <DialogContent>
//             <DialogContentText id="alert-dialog-description">
//             Are you sure you want to delete?
//             </DialogContentText>
//           </DialogContent>
//           <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Disagree
//           </Button>
//           <Button onClick={handleClose} color="primary" autoFocus>
//             Agree
//           </Button>
//           </DialogActions>
//         </Dialog>
//     </form>
//     </div>
//   );
// };

// export default ProfileCard;