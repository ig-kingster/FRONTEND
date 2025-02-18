import React, { useState } from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SellIcon from '@mui/icons-material/Sell';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SystemSecurityUpdateIcon from '@mui/icons-material/SystemSecurityUpdate';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ApartmentIcon from '@mui/icons-material/Apartment';
import VillaIcon from '@mui/icons-material/Villa';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };


    return (
        <div className='Sidebar'>
            {/* <div className="top">
                <span className="logo">Admin</span>
            </div>
            <hr /> */}
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>

                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>User</span>
                    </li>
                    <li>
                        <InventoryIcon className="icon" />
                        <span>Products</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <li>
                        <SellIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <SellIcon className="icon" />
                        <span>Categories</span>
                    </li>
                    <List>
                        <ListItemButton
                            sx={{
                                padding: '0px 8px',
                                marginLeft: '7px',
                                minHeight: '25px',
                                '&:hover': {
                                    backgroundColor: '#ccc3c3', // Set your custom hover color
                                }
                            }}
                            onClick={handleClick}>
                            <ListItemIcon
                                sx={{ minWidth: 'unset', marginRight: '13px', marginLeft: '-11px' }}>
                                <AddLocationAltIcon
                                    sx={{ color: 'rgb(104, 20, 104)', fontSize: '18px' }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="Locations"
                                primaryTypographyProps={{ sx: { fontSize: '14px', color: '#888', fontWeight: '600' } }}
                            />
                            {open ? (
                                <ExpandLess style={{ color: "#888", fontSize: "23px" }} />
                            ) : (
                                <ExpandMore style={{ color: "#888", fontSize: "23px" }} />
                            )}
                        </ListItemButton>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding >
                                <Link to="/admin/state" style={{ textDecoration: "none" }}>
                                <ListItemButton
                                    
                                    sx={{
                                        padding: '0px 8px',
                                        marginLeft: '17px',
                                        minHeight: '25px',
                                        '&:hover': {
                                            backgroundColor: '#ccc3c3', // Set your custom hover color
                                        }
                                    }}>
                                    <ListItemIcon
                                        sx={{ minWidth: 'unset', marginRight: '13px', marginLeft: '-11px' }}>
                                        <VillaIcon
                                            sx={{ color: 'rgb(104, 20, 104)', fontSize: '18px' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        
                                        primaryTypographyProps={{ sx: { fontSize: '14px', color: '#888', fontWeight: '600',} }}
                                        primary="State" />
                                </ListItemButton>
                                        </Link>
                                   
                                        <Link  to="/admin/district" style={{ textDecoration: "none" }}>
                                <ListItemButton
                                    sx={{
                                        padding: '0px 8px',
                                        marginLeft: '17px',
                                        minHeight: '25px',
                                        '&:hover': {
                                            backgroundColor: '#ccc3c3', // Set your custom hover color
                                        }
                                    }}>
                                    <ListItemIcon
                                        sx={{ minWidth: 'unset', marginRight: '13px', marginLeft: '-11px' }}>
                                        <LocationCityIcon
                                            sx={{ color: 'rgb(104, 20, 104)', fontSize: '18px' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primaryTypographyProps={{ sx: { fontSize: '14px', color: '#888', fontWeight: '600' } }}
                                        primary="District" />
                                </ListItemButton>
                                </Link>
                                <Link to="/admin/place" style={{ textDecoration: "none" }}>
                                <ListItemButton
                                    sx={{
                                        padding: '0px 8px',
                                        marginLeft: '17px',
                                        minHeight: '25px',
                                        '&:hover': {
                                            backgroundColor: '#ccc3c3', // Set your custom hover color
                                        }
                                    }}>
                                    <ListItemIcon
                                        sx={{ minWidth: 'unset', marginRight: '13px', marginLeft: '-11px' }}>
                                        <ApartmentIcon
                                            sx={{ color: 'rgb(104, 20, 104)', fontSize: '18px' }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primaryTypographyProps={{ sx: { fontSize: '14px', color: '#888', fontWeight: '600' } }}
                                        primary="Places" />
                                </ListItemButton>
                                </Link>
                            </List>
                        </Collapse>
                    </List>
                    <p className="title">USEFUL</p>
                    <li>
                        <QueryStatsIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <SystemSecurityUpdateIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <NotificationsIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <li>
                        <AssessmentIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountBoxIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon" />
                        <span>Logout</span>
                    </li>


                </ul>
            </div>
            <div className="bottom">
                <div className="colorOptions"></div>
                <div className="colorOptions"></div>
            </div>

        </div>
    )
}

export default Sidebar