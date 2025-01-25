import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import Styles from './BaseMenu.module.scss'
import Login from '../../pages/login/Login';
import Register from '../../pages/register/Register';

import Dialog from '@mui/material/Dialog';

import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [login, setlogin] = React.useState(false);

  const LoginOpen = () => {
    setlogin(true);
    setAnchorEl(null);

  };
  const SignupClose = () => {
    setSignup(false);
  };
//register

  const [signup, setSignup] = React.useState(false);

  const SignupOpen = () => {
    setSignup(true);
    setAnchorEl(null);

  };

  const LoginClose = () => {
    setlogin(false);
  };




  return (
    <div className={Styles.menu}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <PersonIcon  className={Styles.icon}/> 
      <span className={Styles.name}>SignUp</span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={LoginOpen}>Login</MenuItem>
        <MenuItem onClick={SignupOpen}>Sign Up</MenuItem>

        {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
      <Dialog
        open={login}
        TransitionComponent={Transition}
        keepMounted
        onClose={LoginClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth='md'
        PaperProps={{style: {width:'2000px',      backgroundColor: 'transparent',   boxShadow: 'none', }}}
      > <Login/>
        
      </Dialog>
      <Dialog
        open={signup}
        TransitionComponent={Transition}
        keepMounted
        onClose={SignupClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth='md'
        PaperProps={{style: {width:'2000px',      backgroundColor: 'transparent',   boxShadow: 'none', }}}
      > <Register/>
        
      </Dialog>
      <Dialog
        open={signup}
        TransitionComponent={Transition}
        keepMounted
        onClose={SignupClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth='md'
        PaperProps={{style: {width:'2000px',      backgroundColor: 'transparent',   boxShadow: 'none', }}}
      > <Register/>
        
      </Dialog>

    </div>
  );
}






      
     