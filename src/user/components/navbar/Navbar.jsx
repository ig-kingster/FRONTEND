import React, { useState } from 'react';
import Styles from './Navbar.module.scss';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Link, useNavigate } from 'react-router-dom';
import { AccountCircle } from "@mui/icons-material";
import { Menu, MenuItem, Typography } from "@mui/material";

const Navbar = () => {
  const userId = sessionStorage.getItem("uid");
  const userEmail = sessionStorage.getItem("eid");
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div className={Styles.Container}>
      <div className={Styles.Image}>
        <img src="https://i.ibb.co/dJHmJmC4/jsg.png" className={Styles.logo} alt="Logo"/>
      </div>

      <div className={Styles.search}>
        <button className={Styles.btn}>
          <Link to={'/user/search'}>
            <SearchSharpIcon />
          </Link>
        </button>
        <input type="text" className={Styles.txt} placeholder="Search your destination" />
      </div>

      {/* User Profile Section */}
      <div className={Styles.user} 
       >
        {/* Clickable Email */}
        <Typography
          onClick={handleMenuOpen}
          style={{ display: "flex", alignItems: "center", cursor: "pointer", }}
        >
          <AccountCircle style={{ marginRight: "5px" }} />
          {userEmail}
        </Typography>

        {/* Dropdown Menu */}
        <Menu 
          anchorEl={anchorEl} 
          open={Boolean(anchorEl)} 
          onClose={handleMenuClose} 
          disableAutoFocusItem 
        >
          <MenuItem disabled >USER SUB MENU</MenuItem>
          <MenuItem onClick={() => { navigate("../profile"); handleMenuClose(); }} >Profile</MenuItem>
          <MenuItem onClick={() => { navigate("../settings"); handleMenuClose(); }}>Settings</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
