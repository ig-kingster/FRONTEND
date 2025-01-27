import React from 'react'
import Styles from './Banner.module.scss'
const Banner = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.top}>
        <div className={Styles.topimage}>
            <img src="https://platforms.makemytrip.com/contents/2a381830-3353-4cc6-8e7d-beed2eb44d85" alt="" className={Styles.img}/>
        </div>
        </div>
        <div className={Styles.bottom}>
<div className={Styles.bottomimg}>
   .
    <img src="https://www.indianholiday.com/pictures/country_banner/asia-33.jpeg" alt="" className={Styles.img}/>
    <img src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHRyYXZlbHxlbnwwfDB8MHx8fDA%3D" alt="" className={Styles.img}/>

</div>

        </div>
    </div>
    
  )
}

export default Banner