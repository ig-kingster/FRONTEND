import React from 'react'
import Styles from './Trendingspot.module.scss'
const Trendingspot = () => {
  return (
   <div className={Styles.trendings}>
           <div className={Styles.heads}>
             <span className={Styles.head}>Trending </span>
             <span> Spots</span>
           </div>
           <div className={Styles.trending}>
             <div className={Styles.spots}>
               <div className={Styles.spot}>
                 <div className={Styles.names}>
   
                   <div className={Styles.name}>
                     <div className={Styles.shadow}></div>
                     <img src='https://images.emtcontent.com/holiday-img/home-img/europe-tpt.webp' className={Styles.spotimg} />
                     <span className={Styles.title}>Europe</span>
                   </div>
                   <div className={Styles.name}>
                     <div className={Styles.shadow}></div>
                     <img src='https://images.emtcontent.com/holiday-img/home-img/andaman-handpckd.webp' className={Styles.spotimg} />
                     <span className={Styles.title}>Andaman</span>
                   </div>
                   <div className={Styles.name}>
                     <div className={Styles.shadow}></div>
                     <img src='https://images.emtcontent.com/holiday-img/home-img/bali-qckv.webp' className={Styles.spotimg} />
                     <span className={Styles.title}>Bali</span>
                   </div>
                   <div className={Styles.name}>
                     <div className={Styles.shadow}></div>
                     <img src='https://images.emtcontent.com/holiday-img/home-img/japan.webp' className={Styles.spotimg} />
                     <span className={Styles.title}>Japan</span>
                   </div>
   
   
   
   
                 </div>
               </div>
             </div>
           </div>
         </div>
   
   
  )
}

export default Trendingspot