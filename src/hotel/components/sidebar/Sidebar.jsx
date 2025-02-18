import React from 'react'
import { Link } from 'react-router-dom';
import Styles from './Sidebar.module.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HotelIcon from '@mui/icons-material/Hotel';
import TourIcon from '@mui/icons-material/Tour';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
const Sidebar = () => {
  return (
    <div className={Styles.sidebar}>
    <h2 className={Styles.logo}>Hotel Dashboard</h2>
    <ul className={Styles.menu}>
        <li><Link to="/"><DashboardIcon /> Dashboard</Link></li>
        <li><Link to="./managehotel"><HotelIcon /> Manage Hotel</Link></li>
        <li><Link to="./packageadd"><TourIcon /> Manage Packages</Link></li>
        <li><Link to="./packages"><TourIcon />  Packages</Link></li>
        <li><Link to="./guides"><TourIcon />  Guides</Link></li>
        <li><Link to="./bookings"><TourIcon />  Bookings</Link></li>



        <li><Link to="./addguide"><PersonAddIcon /> Add Guide</Link></li>
        <li><Link to="/logout"><ExitToAppIcon /> Logout</Link></li>
    </ul>
</div>
  )
}

export default Sidebar