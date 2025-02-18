import React from 'react'
import Styles from './Result.module.scss'
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';
const Result = () => {
    const packages = [
        {
            id: 1,
            name: 'Kashmir',
            image: 'https://images.emtcontent.com/holiday-img/home-img/kashmir-handpckd.webp',
        
            price: '$100',
          },
          {
            id: 2,
            name: 'Goa',
            image: 'https://images.emtcontent.com/holiday-img/home-img/kashmir-handpckd.webp',
        
            price: '$200',
          },
          {
            id: 3,
            name: 'Manali',
            image: 'https://images.emtcontent.com/holiday-img/home-img/kashmir-handpckd.webp',
        
            price: '$300',
          },
          {
            id: 4,
            name: 'Leh-Ladakh',
            image: 'https://images.emtcontent.com/holiday-img/home-img/kashmir-handpckd.webp',
        
            price: '$400',
          },
          {
            id: 5,
            name: 'Kerala',
            image: 'https://images.emtcontent.com/holiday-img/home-img/kashmir-handpckd.webp',
        
            price: '$500',
          },
          {
            id: 6,
            name: 'Rajasthan',
            image: 'https://images.emtcontent.com/holiday-img/home-img/kashmir-handpckd.webp',
        
            price: '$600',
          },
          {
            id: 7,
            name: 'Andaman',
            image: 'https://images.emtcontent.com/holiday-img/home-img/kashmir-handpckd.webp',
        
            price: '$700',
          },
          {
            id: 8,
            name: 'Sikkim',
            image: 'https://images.emtcontent.com/holiday-img/home-img/kashmir-handpckd.webp',
        
            price: '$800',
          },
          
        
        ]
  return (
<div className={Styles.container}>
      <div className={Styles.sub}>

      <div className={Styles.layout}>
       {packages.map((pkg) => (
      <div  key={pkg.id} className={Styles.package}>
        <div className={Styles.packageimage}>
          <img src={pkg.image} alt="" className={Styles.img} />
        </div>
        <div className={Styles.packageinfo}>


          <div className={Styles.packagename}>
            <span>{pkg.name}</span>
          </div>
          <div className={Styles.pkginfo}>

    
          <div className={Styles.packageprice}>
            <span>Price:{pkg.price}</span>
          </div>
          <div className={Styles.explore}>
           <div className={Styles.exploretxt}><span >explore</span></div> 
            <div className={Styles.exploreicon}><Link to={'./viewmore'}><EastIcon /></Link></div>
          </div>
          </div>
        </div>
      </div>
          ))}
          </div>
          </div>
    </div>
  )
}

export default Result