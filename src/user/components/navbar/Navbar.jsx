import React from 'react'
import Styles from './Navbar.module.scss'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
 <div className={Styles.Container}>
  <div className={Styles.Image}>
          <img src='https://i.ibb.co/dJHmJmC4/jsg.png'  className={Styles.logo}/>
        </div>

        <div className={Styles.search}>
        <button className={Styles.btn} ><Link to={'/user/search'}><SearchSharpIcon /></Link></button>
           
            <input type='text' className={Styles.txt} placeholder='search your destination' />
            {/* <input type='submit' name='search' value='<SearchSharpIcon/>' className={Styles.btn} /> */}
          </div>



        <div className={Styles.Contact}>
        <div className={Styles.Contacts}>
          <div className={Styles.ContactIcon}>
          <Link to={'/user/profile'}><SupportAgentIcon className={Styles.icon} /></Link>
            <span>+9194574126</span>
          </div>
          <div className={Styles.ContactIcon}>
            <AlternateEmailIcon className={Styles.icon} />
            <span>jetsetgo@gmail.com</span>
          </div>
        </div>
        </div>
        </div>
  )
}

export default Navbar