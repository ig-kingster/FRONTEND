import React from 'react'
import Styles from './Footer.module.scss'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Footer = () => {
  return (
    <div className={Styles.Container}>


      <div className={Styles.items}>
        <div className={Styles.item}>

          <li className={Styles.itm}><ArrowForwardIosIcon />about</li>
          <li className={Styles.itm}><ArrowForwardIosIcon />services</li>
          <li className={Styles.itm}><ArrowForwardIosIcon />travel</li>
          <li className={Styles.itm}><ArrowForwardIosIcon />packages</li>
          <li className={Styles.itm}><ArrowForwardIosIcon />hotel</li>

        </div>
        <hr></hr>
        <div className={Styles.socials}>
         <span> Social Media</span> 
          <div className={Styles.social}>
           <div><InstagramIcon /></div>
           <div> <FacebookIcon /></div> 
           <div><XIcon /></div> 
          </div>
        </div>
      </div>
      
      <div className={Styles.bottom}>
        
        <div className={Styles.text}>
          EaseMyTrip offers 'End to End' travel solutions including air tickets for more than 400 international and domestic airlines, 
          hotel bookings for nearly 1 million hotels in India and abroad, cab booking with 4000+ cab operators,
          bus tickets with 2000+
        </div>


        <div className={Styles.Images}>
          <div className={Styles.top}>
            Download
          </div>
          <div className={Styles.img}>
          <img className={Styles.icon} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="Download Android App"></img>
          <img className={Styles.icon} src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="Download iOS App"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer