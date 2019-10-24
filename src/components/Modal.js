import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import axiosWithAuth from '../utils/axiosWithAuth';



function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);



    const [add, setAdd] = React.useState()

    React.useEffect(()=>{
        setAdd(props.lib.lib)
        console.log('use effect', props.lib)
  
    }, [props.open])
   
    const handleChange = e => {
        setAdd(e.target.value)
        console.log('HANDLECHANGE', e.target.value)
    }

    const handleSubmit = () =>{
      const updatedLib = {
          ...props.lib, 
          lib: add
      }     
      props.setFetching(true)    
      axiosWithAuth()
          .put('/api/devLib', updatedLib)
          .then (res =>{
              if (res.status === 200){
                  props.setFetching(false)
                  
                  console.log(res)
              }
              props.handleClose()
          })
          .catch(err => console.log(err))          
         
    }

  return (
    <div>      
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.open}
        onClose={props.handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Edit your Dev-Lib</h2>
          <textarea cols='50' rows='10' type='text'  value={add} onChange={handleChange}>
            
          </textarea> 
          <button onClick={handleSubmit}> Submit </button>         
        </div>
      </Modal>
    </div>
  );
}