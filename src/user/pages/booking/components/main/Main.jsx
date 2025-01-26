import React from 'react'
import Styles from './Main.module.scss'
import ScheduleIcon from '@mui/icons-material/Schedule';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import SearchIcon from '@mui/icons-material/Search';
const Main = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.top}>
        <div className={Styles.item}>
          <div className={Styles.title}>
            <ScheduleIcon className={Styles.titleicon}/>
            <span>Upcoming</span>
          </div>

          <div className={Styles.subtitle}>
            <span className={Styles.sublabel}> 0 Active</span>
          </div>
        </div>

        <div className={Styles.item}>
          <div className={Styles.title}>
            <EventBusyIcon className={Styles.titleicon}/>
            <span>Cancelled/Refunded</span>
          </div>

          <div className={Styles.subtitle}>
            <span className={Styles.sublabel}> Check/Refund Status</span>
          </div>
        </div>

        <div className={Styles.item}>
          <div className={Styles.title}>
            <EventAvailableIcon className={Styles.titleicon}/>
            <span>Completed</span>
          </div>

          <div className={Styles.subtitle}>
            <span className={Styles.sublabel}> Check Previous Trips</span>
          </div>
        </div>

        <div className={Styles.item}>
          <div className={Styles.title}>
            <ScheduleIcon className={Styles.titleicon} />
            <span className={Styles.titlelabel}>Unsuccessful</span>
          </div>

          <div className={Styles.subtitle}>
            <span className={Styles.sublabel}> Check Pending Trips
            </span>
          </div>
          </div>

          <div className={Styles.item}>
          <div className={Styles.search}>
          <SearchIcon className={Styles.searchicon} />

            <input type='text' className={Styles.searchtxt} placeholder='search'/>

          </div>
          </div>
      </div>
      <div className={Styles.center}>
          <div className={Styles.img}>
            <img src='https://mybookings.easemytrip.com/Content/assest/img/booking-data.svg'/>
          </div>
          <div className={Styles.imglabel}>
            <span>Currently No Bookings</span>
          </div>
      </div>
    </div>
  )
}

export default Main